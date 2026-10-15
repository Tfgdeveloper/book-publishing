import { motion } from "framer-motion";
import { Eye, Target, HeartHandshake, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import Container from "../ui/Container";


const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const CARDS = [
  {
    number: "01",
    icon: Target,
    label: "Our Mission",
    title: "Make professional publishing possible for every author.",
    text: "We remove the barriers between a finished manuscript and a published book, giving independent authors the same editing, design and distribution that big publishers offer, without giving up their rights.",
  },
  {
    number: "02",
    icon: Eye,
    label: "Our Vision",
    title: "A world where every great story finds its readers.",
    text: "We want to be the most trusted partner for independent authors, known for books that look, read and sell like they came from the world's leading publishing houses.",
  },
];

const VALUES = [
  { icon: HeartHandshake, label: "Author first" },
  { icon: ShieldCheck, label: "Honest & transparent" },
  { icon: Sparkles, label: "Craft in every detail" },
  { icon: Lightbulb, label: "Always improving" },
];

function MissionVision({ cards = CARDS, values = VALUES }) {
  return (
    <section id="mission-vision" className="px-3 py-6 sm:px-5">
      <div className="relative overflow-hidden rounded-[30px] bg-black py-20 text-white lg:py-28">
        {/* Grid + glow backdrop */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black 10%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black 10%, transparent 100%)",
          }}
        />
        <span aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#EF1A07]/25 blur-[140px]" />

        <Container className="relative">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-[#E2770B]">
              + Mission & Vision
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-heading text-4xl leading-[1.1] md:text-5xl">
              <span className="font-light">What drives us </span>
              <span className="font-semibold">every day</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-14 grid gap-6 lg:grid-cols-2"
          >
            {cards.map(({ number, icon: Icon, label, title, text }) => (
              <motion.article
                key={label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-colors duration-500 hover:border-transparent sm:p-10"
              >
                {/* Gradient border that appears on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: GRADIENT,
                    WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Big outlined number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 font-heading text-[9rem] font-semibold leading-none text-transparent transition-transform duration-700 group-hover:-translate-y-2"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
                >
                  {number}
                </span>

                <span
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_10px_25px_rgba(239,26,7,0.35)]"
                  style={{ background: GRADIENT }}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <p className="relative mt-8 font-mono text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
                <h3 className="relative mt-3 max-w-md font-heading text-2xl font-medium leading-snug sm:text-3xl">
                  {title}
                </h3>
                <p className="relative mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">{text}</p>
              </motion.article>
            ))}
          </motion.div>

          {/* Values row */}
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {values.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 transition-colors duration-300 hover:border-[#EF1A07]/60 hover:text-white"
              >
                <Icon className="h-4 w-4 text-[#EF1A07]" aria-hidden="true" />
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </div>
    </section>
  );
}

export default MissionVision;