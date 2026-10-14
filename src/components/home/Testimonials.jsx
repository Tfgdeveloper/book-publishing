import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ThumbsUp } from "lucide-react";
import Container from "../ui/Container";

const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const AUTOPLAY_MS = 5000; // time on each review; 0 turns autoplay off
const CENTER_OFFSET = "md:translate-y-16"; // how far the centre card sits lower (e.g. md:translate-y-12 / md:translate-y-20)
const ease = [0.22, 1, 0.36, 1];

/* Add as many as you like (at least 3) */
const REVIEWS = [
  {
    name: "Agnes Lockman",
    role: "Lead Operations Orchestrator",
    avatar: "image/avatars/1.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's.",
  },
  {
    name: "Hugo Nienow",
    role: "District Security Agent",
    avatar: "image/avatars/2.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.",
  },
  {
    name: "Ms. Tony Rutherford",
    role: "Principal Implementation Engineer",
    avatar: "image/avatars/3.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem the industry's.",
  },
  {
    name: "Daniel Brooks",
    role: "First-time Author",
    avatar: "image/avatars/1.png",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          fill={i < count ? "#F5B301" : "#e3e3e8"}
          stroke="none"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, featured }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-3 pb-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500"
      style={{
        boxShadow: featured ? "0 20px 40px rgba(239,26,7,0.3), 0 6px 14px rgba(226,119,11,0.25)" : undefined,
      }}
    >
      {/* Gradient frame fades in on the centre card */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: GRADIENT }}
        initial={false}
        animate={{ opacity: featured ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Label */}
      <div className="relative flex items-center justify-center gap-2 py-4">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-500 ${
            featured ? "bg-white text-[#EF1A07]" : "bg-[#151515] text-white"
          }`}
        >
          <ThumbsUp className="h-3 w-3" fill="currentColor" strokeWidth={0} />
        </span>
        <span
          className={`font-heading text-sm transition-colors duration-500 ${
            featured ? "text-white" : "text-[#000]"
          }`}
        >
          Testimonial
        </span>
      </div>

      {/* Inner white card */}
      <div className="relative mt-8 flex flex-1 flex-col rounded-xl bg-white px-6 pb-6 pt-14 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <img
          src={review.avatar}
          alt={review.name}
          className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white object-cover shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
        />
        <Stars count={review.rating} />
        <blockquote className="mt-4 text-sm leading-6 font-light text-[#000]">{review.text}</blockquote>
        <p className="mt-auto pt-5 text-sm font-semibold text-[#EF1A07]">{review.name}</p>
        <p className="mt-0.5 text-xs text-neutral-500">{review.role}</p>
      </div>
    </div>
  );
}

function Testimonials({ reviews = REVIEWS }) {
  const total = reviews.length;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setActive((i) => (i + dir + total) % total);
    },
    [total]
  );

  const goTo = (i) => {
    if (i === active) return;
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  useEffect(() => {
    if (!AUTOPLAY_MS || paused || reduceMotion) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, go]);

  // Previous, current, next (wrapping around)
  const slots = [-1, 0, 1].map((o) => (active + o + total) % total);

  const slide = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.95 }),
  };

  return (
    <section id="reviews" className="overflow-hidden bg-white py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl text-[#000] md:text-4xl lg:text-5xl">
            <span className="font-light">Trusted by </span>
            <span className="">Authors</span>
            <span className="font-light"> Worldwide</span>
          </h2>
          <p className="mt-4 text-sm leading-6 font-light text-[#555] md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.
          </p>
        </motion.div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Author testimonials"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
          className="mt-16 outline-none"
        >
          <motion.div
            className="mx-auto grid max-w-5xl cursor-grab items-stretch gap-6 touch-pan-y active:cursor-grabbing md:grid-cols-3"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50 || info.velocity.x < -400) go(1);
              else if (info.offset.x > 50 || info.velocity.x > 400) go(-1);
            }}
          >
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {slots.map((reviewIndex, slot) => {
                const featured = slot === 1;
                return (
                  <motion.div
                    key={reviewIndex}
                    layout={!reduceMotion}
                    custom={direction}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: reduceMotion ? 0 : 0.6, ease }}
                    // Side cards hide on mobile
                    className={`${featured ? "" : "hidden md:block"} select-none`}
                    onClick={() => !featured && go(slot === 0 ? -1 : 1)}
                  >
                    {/* Centre card drops lower without changing its height (CENTER_OFFSET) */}
                    <div
                      className={`h-full transition-transform duration-500 ${featured ? CENTER_OFFSET : "translate-y-0"}`}
                    >
                      <ReviewCard review={reviews[reviewIndex]} featured={featured} />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6 md:mt-28">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EF1A07]/30 text-[#EF1A07] transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-[0_10px_25px_rgba(239,26,7,0.3)] hover:[background:var(--btn-grad)]"
              style={{ "--btn-grad": GRADIENT }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((r, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show review from ${r.name}`}
                  aria-current={i === active ? "true" : undefined}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: i === active ? 24 : 8, background: i === active ? GRADIENT : "#e3e3e8" }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#EF1A07]/30 text-[#EF1A07] transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-[0_10px_25px_rgba(239,26,7,0.3)] hover:[background:var(--btn-grad)]"
              style={{ "--btn-grad": GRADIENT }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;