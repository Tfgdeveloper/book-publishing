import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpenCheck, Globe2, PenLine, Users } from "lucide-react";
import Container from "../ui/Container";


const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const GRADIENT_BG = "bg-[linear-gradient(135deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]";
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const POINTS = [
  { icon: PenLine, title: "Expert writers", text: "Ghostwriters and editors across every genre." },
  { icon: BookOpenCheck, title: "End-to-end service", text: "From first draft to the bookstore shelf." },
  { icon: Globe2, title: "Global reach", text: "Distribution to 40,000+ retailers worldwide." },
  { icon: Users, title: "Author first", text: "You keep 100% of your rights and royalties." },
];

const STATS = [
  { value: 10, suffix: "+", label: "Years in publishing" },
  { value: 500, suffix: "+", label: "Books published" },
  { value: 98, suffix: "%", label: "Happy authors" },
];

function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, { duration: 1.6, ease, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/*
  imageMain  → large photo (team, office, author signing…)
  imageSmall → smaller photo that overlaps the corner
*/
function WhoWeAre({ imageMain = "images/about/team.jpg", imageSmall = "images/about/books.jpg" }) {
  return (
    <section id="who-we-are" className="overflow-hidden bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* ---------- Images ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto w-full max-w-xl pb-16 pr-10 sm:pr-16"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img src={imageMain} alt="Our publishing team at work" className="aspect-[4/5] w-full object-cover" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="absolute bottom-0 right-0 w-[48%] overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl"
          >
            <img src={imageSmall} alt="Books we've published" className="aspect-square w-full object-cover" />
          </motion.div>

          {/* Floating experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease, delay: 0.45 }}
            className="absolute -left-2 top-10 rounded-2xl px-5 py-4 text-white shadow-[0_15px_35px_rgba(239,26,7,0.35)] sm:-left-6"
            style={{ background: GRADIENT }}
          >
            <p className="font-heading text-4xl font-semibold leading-none">10+</p>
            <p className="mt-1 text-xs text-white/85">Years of crafting
              <br />published books</p>
          </motion.div>
        </motion.div>

        {/* ---------- Content ---------- */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-[#EF1A07]">
            + Who We Are
          </motion.p>

          <motion.h2 variants={fadeUp} className="mt-4 font-heading text-4xl leading-[1.1] text-[#151515] md:text-5xl">
            <span className="font-light">A team of storytellers, </span>
            <span className="font-semibold">built for authors.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-base leading-7 text-neutral-500">
            We're a full-service publishing house made up of writers, editors, designers and marketers.
            Whether it's your first manuscript or your fifth bestseller, we guide every step so your
            book reaches readers looking exactly the way you imagined.
          </motion.p>

          <motion.ul variants={container} className="mt-10 grid gap-6 sm:grid-cols-2">
            {POINTS.map(({ icon: Icon, title, text }) => (
              <motion.li key={title} variants={fadeUp} className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EF1A07]/10 text-[#EF1A07] transition-colors duration-300 group-hover:bg-[#EF1A07] group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#151515]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-500">{text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.dl
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 divide-x divide-neutral-200 border-t border-neutral-200 pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-3xl font-semibold text-[#151515] sm:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dd className="mt-1 text-xs text-neutral-500 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.a
            variants={fadeUp}
            href="#process"
            className={`group mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(239,26,7,0.35)] ${GRADIENT_BG}`}
          >
            See how we work
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}

export default WhoWeAre;