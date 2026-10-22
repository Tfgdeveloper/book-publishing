import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Heading from "../ui/Heading";

/* ------------------------------------------------------------------ */
/*  FAQ data                                                           */
/* ------------------------------------------------------------------ */
const FAQS = [
  {
    q: "How long does the book publishing process usually take?",
    a: "Timeline depends on the scope of services required—such as full ghostwriting versus formatting and design alone. On average, standard editing, formatting, cover design, and distribution setup take between 4 to 8 weeks.",
  },
  {
    q: "Do I retain 100% of the ownership and royalties for my book?",
    a: "Yes, absolutely! At Author House Inc, you keep 100% of your rights, copyright, and royalties. We help bring your vision to market while ensuring you maintain complete ownership of your work.",
  },
  {
    q: "What book formats can Author House Inc help me publish in?",
    a: "We handle complete creation and distribution for eBooks (Kindle, ePUB), paperbacks, hardcovers, and professionally narrated audiobooks.",
  },
  {
    q: "Can you assist with book marketing and Amazon promotion?",
    a: "Yes! We offer specialized book marketing strategies, including Amazon keyword optimization, paid ad management, press releases, social media campaigns, and author web design.",
  },
  {
    q: "What if I only have a concept or outline and haven't written the manuscript yet?",
    a: "Our professional ghostwriters and writing coaches can collaborate with you to flesh out your ideas, draft structured chapters, and complete a publishable manuscript from scratch.",
  },
  {
    q: "Where will my book be available once it is published?",
    a: "We list your book on major global distribution platforms, including Amazon, Barnes & Noble, Apple Books, Kobo, Google Play, and independent bookstore networks worldwide.",
  },
  
];

/* ------------------------------------------------------------------ */
/*  Shared look                                                        */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];
const GRADIENT_BG = "bg-[linear-gradient(135deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]";

/* ------------------------------------------------------------------ */
/*  Single FAQ item                                                    */
/* ------------------------------------------------------------------ */
function FaqItem({ item, index, open, onToggle, delay }) {
  const reduce = useReducedMotion();
  const uid = useId();
  const buttonId = `${uid}-q`;
  const panelId = `${uid}-a`;

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease, delay }}
      className={`rounded-xl bg-white transition-shadow duration-300 ${
        open
          ? "shadow-[0_14px_30px_rgba(239,26,7,0.12)] ring-1 ring-[#EF1A07]/15"
          : "shadow-[0_8px_22px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between gap-4 rounded-xl px-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07]"
        >
          <span
            className={`font-heading text-[18px] font-medium transition-colors duration-300 ${
              open ? "text-[#EF1A07]" : "text-[#1a1a1a]"
            }`}
          >
            {item.q}
          </span>
          <span
            aria-hidden="true"
            className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-white shadow-[0_6px_14px_rgba(239,26,7,0.3)] ${GRADIENT_BG}`}
          >
            <ChevronRight
              size={18}
              strokeWidth={2.5}
              className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm font-light leading-6 text-neutral-500">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function FaqSection({ faqs = FAQS }) {
  const [openIndex, setOpenIndex] = useState(null);
  const reduce = useReducedMotion();

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i));

  // Split into two independent columns, so opening one item
  // doesn't stretch the item next to it
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl leading-tight text-[#1a1a1a] md:text-[2.75rem]">
            <span className="regular">Frequently Asked </span>
            <span className="medium">Questions</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-6 text-neutral-500">
            Everything you need to know about writing, publishing and promoting your book with us.
            Can't find your answer? Our team is always happy to help.
          </p>
        </motion.div>

        {/* Questions */}
        <div className="mt-12 grid items-start gap-5 lg:grid-cols-2 lg:gap-x-8">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-5">
              {col.map((item, i) => {
                const index = colIndex * half + i;
                return (
                  <FaqItem
                    key={item.q}
                    item={item}
                    index={index}
                    open={openIndex === index}
                    onToggle={toggle}
                    delay={i * 0.08 + colIndex * 0.1}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}