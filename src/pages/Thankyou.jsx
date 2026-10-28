import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import LightRays from "../components/ui/LightRays";
import PrimaryButton from "../components/ui/PrimaryButton";

/* ------------------------------------------------------------------ */
/*  Animation config                                                   */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const RAYS_PROPS = {
  raysOrigin: "top-center",
  raysColor: "#566120",
  raysSpeed: 1,
  lightSpread: 2,
  rayLength: 2,
  followMouse: true,
  mouseInfluence: 0.1,
  fadeDistance: 2,
  saturation: 1.5,
  dotCount: 60,
  dotSize: [1, 3.5],
  dotColor: ["#ffffff"],
  dotOpacity: [0.1, 0.6],
  dotSpeed: 25,
  dotDirection: "up",
  dotSpread: 40,
  dotWobble: 8,
  dotGlow: 5,
};

function Rays(props) {
  return (
    <div className="absolute inset-0 z-0">
      <LightRays {...RAYS_PROPS} {...props} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Thank You page                                                     */
/*  Requires the "Great Vibes" Google Font — add this to your          */
/*  index.html <head>:                                                 */
/*    <link rel="preconnect" href="https://fonts.googleapis.com">      */
/*    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"> */
/*  Or in CSS:  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'); */
/* ------------------------------------------------------------------ */
const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative overflow-clip  bg-black">
        <Rays dotCount={40} />

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-32 sm:px-6 md:px-12 lg:px-16 lg:pb-20 lg:pt-40"
        >
          <div className="flex flex-col justify-center items-center text-center">
            {/* Small eyebrow label */}
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#fff]/80"
            >
              Submission received
            </motion.span>

            {/* Handwritten "Thank You" — script font, teal, soft glow */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'Great Vibes', 'Brush Script MT', cursive",
                color: "#fff",
                textShadow:
                  "0 0 28px rgba(252, 252, 252, 0.55), 0 0 60px rgba(45, 212, 191, 0.25)",
              }}
              className="mt-8 text-[5rem] leading-[0.9] sm:text-[7rem] lg:text-[9rem]"
            >
              Thank You
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg"
            >
              We've received your form and our team will be in touch with you
              shortly. Keep an eye on your inbox — we typically respond within
              1–2 business days. If your request is urgent, feel free to reach
              out to us directly.
            </motion.p>

            {/* CTA — navigates back to the previous page */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <PrimaryButton
                onClick={() => navigate(-1)}
                className="px-[32px] py-[16px]"
              >
                Go Back
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </PrimaryButton>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ThankYou;