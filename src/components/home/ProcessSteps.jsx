import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, NotebookPen, PenTool, Rocket } from "lucide-react";
import Container from "../ui/Container";

import Heading from "../ui/Heading";
/* Replace icons with your own (transparent PNG or SVG) */
const STEPS = [
  {
    icon: NotebookPen,
    title: "Manuscript Consultation & Planning",
    text: "We review your draft or book concept, pair you with a dedicated publishing project manager, and define a custom roadmap for editing, layout, and release.",
    
  },
  {
    icon: PenTool,
    title: "Production, Design & Formatting",
    text: "Our expert editors polish your manuscript while our designers craft a captivating book cover and interior format ready for print and eBook platforms.",

  },
  {
    icon: Rocket,
    title: "Global Publishing & Promotion",
    text: "Your book is published across major platforms worldwide with custom marketing campaigns designed to reach your target readers and maximize sales. ",

  },
];

const ease = [0.22, 1, 0.36, 1];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/* Two faded red arcs around the icon, slowly turning */
function IconRings({ src, alt }) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative mx-auto h-28 w-28">
      <motion.svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="ringFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EF1A07" stopOpacity="1" />
            <stop offset="100%" stopColor="#EF1A07" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* outer arc */}
        <circle cx="60" cy="60" r="56" fill="none" stroke="url(#ringFade)" strokeWidth="2.5"
          strokeLinecap="round" strokeDasharray="120 400" transform="rotate(-60 60 60)" />
        <circle cx="60" cy="60" r="56" fill="none" stroke="url(#ringFade)" strokeWidth="2.5"
          strokeLinecap="round" strokeDasharray="90 400" transform="rotate(120 60 60)" />
        {/* inner arc */}
        <circle cx="60" cy="60" r="46" fill="none" stroke="url(#ringFade)" strokeWidth="2"
          strokeLinecap="round" strokeDasharray="80 400" transform="rotate(10 60 60)" opacity="0.7" />
        <circle cx="60" cy="60" r="46" fill="none" stroke="url(#ringFade)" strokeWidth="2"
          strokeLinecap="round" strokeDasharray="60 400" transform="rotate(190 60 60)" opacity="0.7" />
      </motion.svg>

      
    </div>
  );
}

/* Curved arrow between steps, drawn in when it scrolls into view */
function CurvedArrow({ delay = 0 }) {
  return (
    <svg viewBox="0 0 160 40" className="h-10 w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E2770B" />
          <stop offset="100%" stopColor="#EF1A07" />
        </linearGradient>
      </defs>
      <motion.path
        d="M4 14 C 50 30, 105 30, 148 18"
        stroke="url(#arrowGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9, delay, ease }}
      />
      <motion.path
        d="M138 10 L150 17 L139 26"
        stroke="#EF1A07"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.3, delay: delay + 0.8 }}
      />
    </svg>
  );
}

function ProcessSteps({ steps = STEPS }) {
    
  return (
    <section id="process" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl text-[#000] md:text-4xl lg:text-5xl">
            <span className="regular">From Idea to  </span>
            <span className="medium">Published Book </span>
            <span className="regular"> Step by Step</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-6 text-[#555] md:text-base">
           We simplify the journey from manuscript creation to global publishing. At Author House Inc, our streamlined 3-step process guides you through every milestone to make publishing seamless and rewarding. 
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mt-16 grid gap-14 md:grid-cols-3 md:gap-8"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
            
            <motion.article key={i} variants={item} className="group relative text-center">
             <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                  <IconRings />

                  <Icon
                    size={32}
                    strokeWidth={1.7}
                    className="absolute z-10 text-[#EF1A07]"
                  />
                </div>

              <h3 className="mt-6 font-heading text-2xl  text-[#000]">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs font-light text-sm leading-6 text-[#555]">{step.text}</p>

              {/* Arrow to the next step (desktop only) */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(100%-22%)] top-[72px] hidden w-[44%] md:block">
                  <CurvedArrow delay={0.4 + i * 0.4} />
                </div>
              )}
            </motion.article>
          );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default ProcessSteps;