import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  PenLine,
  BookOpen,
  FileText,
  Search,
  Palette,
  Printer,
  Globe,
  Rocket,
  Megaphone,
  MessageCircle,
  CheckCircle,
  Video,
  Mic,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import Container from "../ui/Container";
import RichTitle from "../ui/Richtitle";

/* ==================================================================
   Expected data shape (add this to a service in data.js later):

   process: {
     title: "From Idea to *Published Book* Step by Step",
     description: "Short intro line under the heading.",
     steps: [
       { icon: "lightbulb", title: "Share Your Idea", text: "..." },
       { icon: "pen",       title: "We Write",        text: "..." },
       { icon: "rocket",    title: "You Publish",     text: "..." },
     ],
   }

   `icon` can be:
   - a name from ICONS below ("lightbulb", "pen", "rocket"...)
   - an image path ("/images/icons/idea.svg")
   - a lucide component (Lightbulb)

   Usage: <ProcessSteps data={service.process} />
   Anything missing falls back to DEFAULT_DATA.
   ================================================================== */

const ICONS = {
  lightbulb: Lightbulb,
  pen: PenLine,
  book: BookOpen,
  file: FileText,
  search: Search,
  palette: Palette,
  printer: Printer,
  globe: Globe,
  rocket: Rocket,
  megaphone: Megaphone,
  message: MessageCircle,
  check: CheckCircle,
  video: Video,
  mic: Mic,
  sparkles: Sparkles,
  clipboard: ClipboardList,
};

const DEFAULT_DATA = {
  title: "From Idea to *Published Book* Step by Step",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  steps: [
    {
      icon: "lightbulb",
      title: "Heading Here",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      icon: "lightbulb",
      title: "Heading Here",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      icon: "lightbulb",
      title: "Heading Here",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
  ],
};

/* Grid columns by step count. Arrows only show when all steps sit in one row. */
const GRID = {
  2: { cols: "md:grid-cols-2", arrow: "md:block" },
  3: { cols: "md:grid-cols-3", arrow: "md:block" },
  4: { cols: "md:grid-cols-2 lg:grid-cols-4", arrow: "lg:block" },
};

const ease = [0.22, 1, 0.36, 1];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/* Unique, CSS-safe id so several SVG gradients on one page don't clash */
function useSvgId(prefix) {
  return `${prefix}-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
}

/* Two faded red arcs around the icon, slowly turning */
function IconRings() {
  const reduceMotion = useReducedMotion();
  const gradId = useSvgId("ringFade");

  return (
    <motion.svg
      viewBox="0 0 120 120"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EF1A07" stopOpacity="1" />
          <stop offset="100%" stopColor="#EF1A07" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* outer arcs */}
      <circle cx="60" cy="60" r="56" fill="none" stroke={`url(#${gradId})`} strokeWidth="2.5"
        strokeLinecap="round" strokeDasharray="120 400" transform="rotate(-60 60 60)" />
      <circle cx="60" cy="60" r="56" fill="none" stroke={`url(#${gradId})`} strokeWidth="2.5"
        strokeLinecap="round" strokeDasharray="90 400" transform="rotate(120 60 60)" />
      {/* inner arcs */}
      <circle cx="60" cy="60" r="46" fill="none" stroke={`url(#${gradId})`} strokeWidth="2"
        strokeLinecap="round" strokeDasharray="80 400" transform="rotate(10 60 60)" opacity="0.7" />
      <circle cx="60" cy="60" r="46" fill="none" stroke={`url(#${gradId})`} strokeWidth="2"
        strokeLinecap="round" strokeDasharray="60 400" transform="rotate(190 60 60)" opacity="0.7" />
    </motion.svg>
  );
}

/* Renders a named lucide icon, an image path or a component */
function StepIcon({ icon }) {
  const isImage = typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http"));

  if (isImage) {
    return <img src={icon} alt="" aria-hidden="true" className="absolute z-10 h-10 w-10 object-contain" />;
  }

  const Icon = (typeof icon === "string" ? ICONS[icon] : icon) || Lightbulb;
  return <Icon size={32} strokeWidth={1.7} aria-hidden="true" className="absolute z-10 text-[#EF1A07]" />;
}

/* Curved arrow between steps, drawn in when it scrolls into view */
function CurvedArrow({ delay = 0 }) {
  const gradId = useSvgId("arrowGrad");

  return (
    <svg viewBox="0 0 160 40" className="h-10 w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E2770B" />
          <stop offset="100%" stopColor="#EF1A07" />
        </linearGradient>
      </defs>
      <motion.path
        d="M4 14 C 50 30, 105 30, 148 18"
        stroke={`url(#${gradId})`}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.9, delay, ease }}
      />
      <motion.path
        d="M138 10 L150 17 L139 26"
        stroke="#EF1A07"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.3, delay: delay + 0.8 }}
      />
    </svg>
  );
}

function ProcessSteps({ data, id = "process" }) {
  const title = data?.title ?? DEFAULT_DATA.title;
  const description = data?.description ?? DEFAULT_DATA.description;
  const steps = data?.steps?.length ? data.steps : DEFAULT_DATA.steps;

  const grid = GRID[steps.length] || GRID[3];

  return (
    <section id={id} className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl text-[#000] md:text-4xl lg:text-5xl">
            <RichTitle text={title} />
          </h2>
          {description && (
            <p className="mt-4 text-sm font-light leading-6 text-[#555] md:text-base">{description}</p>
          )}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={`relative mt-16 grid gap-14 md:gap-8 ${grid.cols}`}
        >
          {steps.map((step, i) => (
            <motion.article key={`${step.title}-${i}`} variants={item} className="group relative text-center">
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                <IconRings />
                <StepIcon icon={step.icon} />
              </div>

              <h3 className="mt-6 font-heading text-2xl text-[#000]">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm font-light leading-6 text-[#555]">{step.text}</p>

              {/* Arrow to the next step (only when steps sit in one row) */}
              {i < steps.length - 1 && (
                <div
                  className={`pointer-events-none absolute left-[calc(100%-22%)] top-[72px] hidden w-[44%] ${grid.arrow}`}
                >
                  <CurvedArrow delay={0.4 + i * 0.4} />
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default ProcessSteps;