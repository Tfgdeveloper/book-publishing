import { motion } from "framer-motion";
import { Award, BadgeDollarSign, Clock4, Crown, Headset, Rocket } from "lucide-react";
import Container from "../ui/Container";


const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.15 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* `wide: true` makes a card span two columns on desktop */
const REASONS = [
  {
    icon: Crown,
    title: "You keep 100% of your rights",
    text: "Your book, your royalties, your name on the cover. We never take ownership of your work.",
    wide: true,
  },
  { icon: Award, title: "Industry-grade quality", text: "Editors and designers with big-publisher experience." },
  { icon: Clock4, title: "On-time delivery", text: "Clear milestones and deadlines we actually hit." },
  { icon: Headset, title: "A dedicated manager", text: "One point of contact from kickoff to launch day." },
  { icon: BadgeDollarSign, title: "Transparent pricing", text: "Fixed packages with no hidden fees, ever." },
  {
    icon: Rocket,
    title: "Launch & marketing built in",
    text: "Amazon optimisation, author website, social campaigns and press outreach to get your book seen.",
    wide: true,
  },
];

function WhyChooseUs({ reasons = REASONS }) {
  return (
    <section id="why-choose-us" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-[#EF1A07]">
              + Why Choose Us?
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-heading text-4xl leading-[1.1] text-[#151515] md:text-5xl">
              <span className="font-light">The publishing partner </span>
              <span className="font-semibold">authors trust</span>
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="max-w-md text-base leading-7 text-neutral-500 lg:justify-self-end"
          >
            Hundreds of authors have chosen us to bring their books to life. Here's what makes working
            with us different.
          </motion.p>
        </div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Highlight card */}
          <motion.div
            variants={fadeUp}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 text-white sm:col-span-2 lg:col-span-1 lg:row-span-2"
            style={{ background: GRADIENT }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1.2px, transparent 1.6px)",
                backgroundSize: "11px 11px",
                maskImage: "radial-gradient(ellipse 70% 50% at 50% 110%, black 0%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 110%, black 0%, transparent 100%)",
              }}
            />
            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-white/80">Trusted by</p>
            <div className="relative mt-16">
              <p className="font-heading text-6xl font-semibold leading-none">500+</p>
              <p className="mt-3 max-w-[14rem] text-sm leading-6 text-white/85">
                authors who published with us and would do it again.
              </p>
            </div>
          </motion.div>

          {reasons.map(({ icon: Icon, title, text, wide }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative overflow-hidden rounded-3xl border border-neutral-200 bg-[#F7F7F9] p-7 transition-colors duration-300 hover:border-[#EF1A07]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(239,26,7,0.12)] ${
                wide ? "lg:col-span-2" : ""
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#EF1A07] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:[background:var(--g)]"
                style={{ "--g": GRADIENT }}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-heading text-lg font-semibold text-[#151515]">{title}</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;