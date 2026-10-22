import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

/* Replace with your covers (portrait images, about 2:3) */
const BOOKS = [
  { src: "/image/book/01.png", title: "Fuel for Life" },
  { src: "/image/book/02.png", title: "Called to Lead" },
  { src: "/image/book/03.png", title: "Fuel" },
  { src: "/image/book/04.png", title: "Conversations with My Dead Husband" },
  { src: "/image/book/05.png", title: "The Art of Conscious Parenting" },
  { src: "/image/book/06.png", title: "12 Rounds of Elite Boxing" },
  { src: "/image/book/07.png", title: "Tree" },
  { src: "/image/book/08.png", title: "The Manifestos" },
];

const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const AUTOPLAY_MS = 3000; // time on each book; set to 0 to turn autoplay off
const ease = [0.22, 1, 0.36, 1];

function RecentBooks({ books = BOOKS }) {
  const total = books.length;
  const [active, setActive] = useState(Math.floor(total / 2));
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(1100);
  const stageRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Size the books from the slider's width so it scales on every screen
  useEffect(() => {
    if (!stageRef.current) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(stageRef.current);
    return () => ro.disconnect();
  }, []);

  const bookW = Math.max(150, Math.min(width * 0.24, 290)); // centre book width
  const bookH = bookW * 1.5;
  const spacing = bookW * (width < 640 ? 0.55 : 0.68); // distance between books
  const sideCount = width < 640 ? 1 : width < 1024 ? 2 : 3; // books shown on each side

  const go = useCallback((dir) => setActive((i) => (i + dir + total) % total), [total]);

  // Autoplay, paused on hover/focus and for reduced motion
  useEffect(() => {
    if (!AUTOPLAY_MS || paused || reduceMotion) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, go]);

  // Shortest way around the loop, so books wrap from end to start smoothly
  const offsetOf = (i) => {
    let d = i - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section id="portfolio" className="overflow-hidden bg-white py-10 lg:py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2  className="font-heading text-3xl text-[#000] md:text-4xl lg:text-5xl">
            <span className="regular">Our Recent </span>
            <span className="medium">Bestselling Books</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-light text-[#555] md:text-base">
            Discover a curated collection of published titles that showcase the creativity, precision, and passion of our authors. At Author House Inc, we take immense pride in helping authors refine their stories and successfully launch their books into the global market.
          </p>
        </motion.div>
      </Container>

      {/* Slider */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Recent selling books"
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        className="relative mx-auto mt-14 max-w-[1300px] px-4 outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07]/40"
      >
        <motion.div
          ref={stageRef}
          className="relative cursor-grab touch-pan-y active:cursor-grabbing"
          style={{ height: bookH + 40 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50 || info.velocity.x < -400) go(1);
            else if (info.offset.x > 50 || info.velocity.x > 400) go(-1);
          }}
        >
          {books.map((book, i) => {
            const offset = offsetOf(i);
            const dist = Math.abs(offset);
            const visible = dist <= sideCount;

            return (
              <motion.button
                key={book.src + i}
                type="button"
                onClick={() => (offset === 0 ? null : setActive(i))}
                aria-label={offset === 0 ? book.title : `Show ${book.title}`}
                aria-current={offset === 0 ? "true" : undefined}
                tabIndex={-1}
                className="absolute bottom-10 left-1/2 block"
                style={{ width: bookW, height: bookH, marginLeft: -bookW / 2, zIndex: 50 - dist }}
                initial={false}
                animate={{
                  x: offset * spacing,
                  scale: 1 - dist * 0.14,
                  opacity: visible ? 1 - dist * 0.01 : 0,
                  filter: `brightness(${1 - dist * 0.12})`,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
              >
                <img
                  src={book.src}
                  alt={book.title}
                  draggable={false}
                  className="h-full w-full rounded-[10px] object-contain shadow-[0_25px_40px_-12px_rgba(0,0,0,0.45)]"
                  style={{ transformOrigin: "bottom center" }}
                />
                {/* Soft shadow on the "floor" */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 left-1/2 h-5 w-[90%] -translate-x-1/2 rounded-[50%] bg-black/25 blur-md"
                />
              </motion.button>
            );
          })}

          
        </motion.div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous book"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EF1A07]/30 text-[#EF1A07] transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-[0_10px_25px_rgba(239,26,7,0.3)] hover:[background:var(--btn-grad)]"
            style={{ "--btn-grad": GRADIENT }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {books.map((book, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to ${book.title}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 24 : 8,
                  background: i === active ? GRADIENT : "#e3e3e8",
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next book"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EF1A07]/30 text-[#EF1A07] transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-[0_10px_25px_rgba(239,26,7,0.3)] hover:[background:var(--btn-grad)]"
            style={{ "--btn-grad": GRADIENT }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default RecentBooks;