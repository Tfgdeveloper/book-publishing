import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BookCheck, FileSearch, Megaphone, Palette, PenTool, Send } from "lucide-react";
import Container from "../ui/Container";


const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const ease = [0.22, 1, 0.36, 1];

const STEPS = [
  { icon: FileSearch, title: "Manuscript Review", time: "Week 1", text: "We read your manuscript, discuss your goals and recommend the right package and timeline." },
  { icon: PenTool, title: "Editing & Proofreading", time: "Weeks 2–5", text: "Developmental edits, line edits and a final proofread so every page reads cleanly." },
  { icon: Palette, title: "Cover Design", time: "Weeks 4–6", text: "Custom cover concepts designed for your genre, with revisions until you love it." },
  { icon: BookCheck, title: "Formatting & Typesetting", time: "Week 6", text: "Interior layout for print and ebook, ISBN and copyright set up for you." },
  { icon: Send, title: "Publishing & Distribution", time: "Week 7", text: "Your book goes live on Amazon, Barnes & Noble, Apple Books, Kobo and more." },
  { icon: Megaphone, title: "Marketing & Launch", time: "Ongoing", text: "Launch campaign, author website and promotion to get your book in front of readers." },
];

function PublishingProcess({ steps = STEPS }) {
  const ref = useRef(null);
  // Fill the centre line as the timeline scrolls through the viewport
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="process" className="overflow-hidden bg-[#F7F7F9] py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#EF1A07]">+ Publishing Process</p>
          <h2 className="mt-4 font-heading text-4xl leading-[1.1] text-[#151515] md:text-5xl">
            <span className="font-light">From manuscript to </span>
            <span className="font-semibold">bookshelf</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-500">
            Six clear stages, one dedicated team. You always know what's happening and what comes next.
          </p>
        </motion.div>

        <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
          {/* Track + animated fill (left on mobile, centre on desktop) */}
          <span aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px bg-neutral-300 md:left-1/2" />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-6 top-0 w-[3px] origin-top -translate-x-px rounded-full md:left-1/2"
            style={{ scaleY: progress, background: GRADIENT }}
          />

          <ol className="space-y-10 md:space-y-14">
            {steps.map(({ icon: Icon, title, time, text }, i) => {
              const right = i % 2 === 1;
              return (
                <li key={title} className="relative grid md:grid-cols-2 md:gap-16">
                  {/* Number node */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="absolute left-6 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#F7F7F9] font-heading text-sm font-semibold text-white shadow-[0_8px_20px_rgba(239,26,7,0.35)] md:left-1/2"
                    style={{ background: GRADIENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  <motion.article
                    initial={{ opacity: 0, x: right ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease }}
                    className={`group ml-16 rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(239,26,7,0.12)] md:ml-0 ${
                      right ? "md:col-start-2" : "md:text-right"
                    }`}
                  >
                    <div className={`flex items-center gap-3 ${right ? "" : "md:flex-row-reverse"}`}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EF1A07]/10 text-[#EF1A07] transition-colors duration-300 group-hover:bg-[#EF1A07] group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                        {time}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-[#151515]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export default PublishingProcess;