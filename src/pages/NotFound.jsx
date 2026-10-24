import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const GRADIENT = "linear-gradient(135deg, #B0197E 0%, #310D89 100%)";
const GLOW = "0 10px 25px rgba(239,26,7,0.3), 0 4px 12px rgba(226,119,11,0.25)";
const ease = [0.22, 1, 0.36, 1];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function NotFound() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black px-5 py-24 text-center">
      {/* Halftone dots behind the number, same texture as the CTA cards */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(239,26,7,0.35) 1.2px, transparent 1.6px)",
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(ellipse 40% 45% at 50% 35%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 40% 45% at 50% 35%, black 0%, transparent 100%)",
        }}
      />

      {/* Soft red glow behind the number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[30%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B0197E]/25 blur-[100px]"
      />

      <motion.div variants={container} initial="hidden" animate="visible" className="relative">
        <motion.p
          variants={fadeUp}
          className="font-heading text-[7rem] font-semibold leading-none tracking-tight sm:text-[10rem]"
        >
          <motion.span
            className="inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: GRADIENT }}
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.span>
        </motion.p>

        <motion.h1 variants={fadeUp} className="mt-4 font-heading text-3xl text-white sm:text-4xl">
          <span className="font-light">This page isn't </span>
          <span className="font-semibold">in print</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-400 sm:text-base">
          The page you're looking for doesn't exist or has moved.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-shadow duration-300 hover:[box-shadow:var(--glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0197E] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{ background: GRADIENT, "--glow": GLOW }}
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <Link
            to="#contact"
            className="inline-flex items-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#B0197E] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default NotFound;