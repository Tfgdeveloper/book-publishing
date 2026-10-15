'use client';

import { Children, cloneElement, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/*
  Animated heading. Each word (or letter) blurs and slides in one after another.

  <Heading as="h1" title={<>We Bring Children's <span className="font-medium">Stories</span> to Life</>} />
  <Heading as="h2" className="text-5xl" animateBy="letters">Plain text works too</Heading>
  <Heading text="Old string prop still works" />

  Props
  as          → tag to render: "h1" | "h2" | "h3" | "p" …            (default "h2")
  title       → JSX or string (or pass it as children, or as `text`)
  animateBy   → "words" | "letters"                                    (default "words")
  direction   → "top" | "bottom"                                       (default "top")
  delay       → ms between each word/letter                            (default 80 for words, 30 for letters)
  stepDuration, threshold, rootMargin, animationFrom, animationTo, easing, onAnimationComplete
              → same as before
*/

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

/*
  Turn any JSX into a flat list of tokens, remembering which elements
  (e.g. <span className="font-medium">) wrapped each word so the styling is kept.
*/
const tokenize = (node, wrappers = []) => {
  if (node === null || node === undefined || typeof node === 'boolean') return [];

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
      .split(/(\s+)/)
      .filter(Boolean)
      .map((part) => (/^\s+$/.test(part) ? { type: 'space' } : { type: 'word', text: part, wrappers }));
  }

  if (Array.isArray(node)) return node.flatMap((n) => tokenize(n, wrappers));

  if (isValidElement(node)) {
    if (node.type === 'br') return [{ type: 'br' }];
    return Children.toArray(node.props.children).flatMap((c) => tokenize(c, [...wrappers, node]));
  }

  return [];
};

// Re-wrap a piece of text in its original elements (innermost last)
const wrap = (content, wrappers, key) =>
  wrappers.reduceRight((inner, el, i) => cloneElement(el, { key: `${key}-${i}` }, inner), content);

// Plain text version for screen readers
const toPlainText = (node) => {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(toPlainText).join('');
  if (isValidElement(node)) return node.type === 'br' ? ' ' : toPlainText(node.props.children);
  return '';
};

const Heading = ({
  as: Tag = 'h2',
  title,
  children,
  text = '',
  className = '',
  animateBy = 'letters',
  direction = 'top',
  delay,
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const content = title ?? children ?? text;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reduce = useReducedMotion();
  const stagger = delay ?? (animateBy === 'letters' ? 30 : 80);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const fromSnapshot = useMemo(
    () =>
      animationFrom ?? { filter: 'blur(10px)', opacity: 0, y: direction === 'top' ? -50 : 50 },
    [animationFrom, direction]
  );

  const toSnapshots = useMemo(
    () =>
      animationTo ?? [
        { filter: 'blur(5px)', opacity: 0.5, y: direction === 'top' ? 5 : -5 },
        { filter: 'blur(0px)', opacity: 1, y: 0 },
      ],
    [animationTo, direction]
  );

  const keyframes = useMemo(() => buildKeyframes(fromSnapshot, toSnapshots), [fromSnapshot, toSnapshots]);
  const tokens = useMemo(() => tokenize(content), [content]);
  const plain = useMemo(() => toPlainText(content).replace(/\s+/g, ' ').trim(), [content]);

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  // Count animated pieces so we know which one is last
  const totalUnits = tokens.reduce(
    (n, t) => (t.type === 'word' ? n + (animateBy === 'letters' ? [...t.text].length : 1) : n),
    0
  );

  let unit = 0;
  const animated = (piece, key) => {
    const index = unit++;
    if (reduce) return <span key={key} className="inline-block">{piece}</span>;
    return (
      <motion.span
        key={key}
        className="inline-block will-change-[transform,filter,opacity]"
        initial={fromSnapshot}
        animate={inView ? keyframes : fromSnapshot}
        transition={{ duration: totalDuration, times, delay: (index * stagger) / 1000, ease: easing }}
        onAnimationComplete={index === totalUnits - 1 ? onAnimationComplete : undefined}
      >
        {piece}
      </motion.span>
    );
  };

  return (
    <Tag ref={ref} className={className}>
      {/* Screen readers get the sentence once, not word by word */}
      <span className="sr-only">{plain}</span>

      <span aria-hidden="true">
        {tokens.map((t, i) => {
          if (t.type === 'br') return <br key={i} />;
          if (t.type === 'space') return ' ';

          if (animateBy === 'letters') {
            // Keep a word's letters together so lines only break between words
            return (
              <span key={i} className="inline-block whitespace-nowrap">
                {[...t.text].map((ch, j) => animated(wrap(ch, t.wrappers, `${i}-${j}`), `${i}-${j}`))}
              </span>
            );
          }

          return animated(wrap(t.text, t.wrappers, i), i);
        })}
      </span>
    </Tag>
  );
};

export default Heading;