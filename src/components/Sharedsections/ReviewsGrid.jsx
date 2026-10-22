import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";
import { REVIEWS, ReviewCard } from "./Testimonials";

const ease = [0.22, 1, 0.36, 1];

// How far each column is pushed down (px), for the staggered look
const COLUMN_OFFSETS = {
  1: [0],
  2: [0, 48],
  3: [0, 64, 0],
};

function useColumnCount() {
  const get = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };
  const [count, setCount] = useState(get);
  useEffect(() => {
    const onResize = () => setCount(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return count;
}

export default function ReviewsGrid({ reviews = REVIEWS }) {
  const columnCount = useColumnCount();
  const reduce = useReducedMotion();
  // The 2nd review (top of the middle column) starts highlighted, like the design
  const [active, setActive] = useState(reviews.length > 1 ? 1 : 0);

  // Spread reviews across columns left-to-right, row by row
  const columns = Array.from({ length: columnCount }, () => []);
  reviews.forEach((review, i) =>
    columns[i % columnCount].push({ review, index: i, row: Math.floor(i / columnCount) })
  );
  const offsets = COLUMN_OFFSETS[columnCount] ?? [];

  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-heading text-3xl text-[#000] md:text-4xl lg:text-5xl">
            <span className="regular">What Our </span>
            <span className="medium">Authors</span>
            <span className="regular"> Say</span>
          </h1>
          <p className="mt-4 text-sm font-light leading-6 text-[#555] md:text-base">
            Real stories from writers who trusted us to bring their books to life, from the first
            draft to their publishing day and beyond.
          </p>
        </motion.div>

        {/* Staggered columns */}
        <div className="mx-auto mt-16 flex max-w-5xl items-start gap-6">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="flex flex-1 flex-col gap-8"
              style={{ marginTop: offsets[colIndex] ?? 0 }}
            >
              {col.map(({ review, index, row }) => (
                <motion.div
                  key={`${review.name}-${index}`}
                  initial={{ opacity: 0, y: reduce ? 0 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease, delay: (row < 2 ? row : 0) * 0.08 + colIndex * 0.12 }}
                  onMouseEnter={() => setActive(index)}
                  className="transition-transform duration-500 hover:-translate-y-1"
                >
                  <ReviewCard review={review} featured={index === active} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}