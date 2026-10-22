import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Send,
  ChevronDown,
  // writing
  PenLine,
  Feather,
  Users,
  BookOpenCheck,
  FileText,
  AlignLeft,
  ClipboardCheck,
  // publishing
  Globe,
  TabletSmartphone,
  Printer,
  Barcode,
  Copyright,
  // design
  Image,
  Brush,
  Smile,
  LayoutTemplate,
  PieChart,
  Puzzle,
  // marketing
  TrendingUp,
  ShoppingCart,
  Rocket,
  Share2,
  BadgeCheck,
  Mic,
  Newspaper,
  // animation
  Film,
  Sparkles,
  Shapes,
  Video,
  Scissors,
  Headphones,
} from "lucide-react";
import { Link } from "react-router";
import Heading from "../ui/Heading";

/* ------------------------------------------------------------------ */
/*  Services data (only used by this section)                          */
/* ------------------------------------------------------------------ */
const SERVICE_CATEGORIES = [
  {
    id: "writing",
    label: "Writing & Editing",
    services: [
      {
        title: "Book Writing",
        desc: "Fiction or non-fiction, our writers work with you chapter by chapter to turn your idea into a finished, publish-ready book.",
        href: "/services/book-writing",
        icon: PenLine,
      },
      {
        title: "Ghostwriting",
        desc: "Share your story and expertise, and our ghostwriters capture your voice while you keep full credit and ownership.",
        href: "/services/ghostwriting",
        icon: Feather,
      },
      {
        title: "Children's Book Writing",
        desc: "Engaging, age-appropriate stories with the rhythm, language and heart that young readers and parents love.",
        href: "/services/childrens-book-writing",
        icon: Users,
      },
      {
        title: "Book Editing",
        desc: "Developmental, line and structural editing that strengthens your plot, pacing and prose without losing your voice.",
        href: "/services/book-editing",
        icon: BookOpenCheck,
      },
      {
        title: "Proofreading & Copy Editing",
        desc: "A careful final pass for grammar, spelling, punctuation and consistency, so your book is clean before it goes to print.",
        href: "/services/proofreading-copy-editing",
        icon: FileText,
      },
      {
        title: "Formatting & Typesetting",
        desc: "Professional interior layouts for print and ebook, formatted to meet the requirements of every major platform.",
        href: "/services/formatting-typesetting",
        icon: AlignLeft,
      },
      {
        title: "Manuscript Assessment",
        desc: "An honest, detailed review of your manuscript's strengths and weak spots, with a clear plan for what to improve next.",
        href: "/services/manuscript-assessment",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    id: "publishing",
    label: "Publishing & Rights",
    services: [
      {
        title: "Global Distribution",
        desc: "Reach readers worldwide through online retailers, bookstores and libraries, with your book listed wherever people shop.",
        href: "/services/global-distribution",
        icon: Globe,
      },
      {
        title: "Ebook Publishing",
        desc: "We convert, upload and launch your ebook on Kindle, Apple Books, Kobo, Google Play and other leading stores.",
        href: "/services/ebook-publishing",
        icon: TabletSmartphone,
      },
      {
        title: "Print Book Publishing",
        desc: "High-quality paperback and hardcover editions, printed on demand so you never have to manage inventory.",
        href: "/services/print-book-publishing",
        icon: Printer,
      },
      {
        title: "ISBN & Barcode",
        desc: "We handle ISBN registration and generate retail-ready barcodes, so your book is properly identified everywhere it's sold.",
        href: "/services/isbn-barcode",
        icon: Barcode,
      },
      {
        title: "Copyright Assistance",
        desc: "Guidance and support in registering your copyright, so your work is legally protected from day one.",
        href: "/services/copyright-assistance",
        icon: Copyright,
      },
    ],
  },
  {
    id: "design",
    label: "Design & Illustration",
    services: [
      {
        title: "Book Cover Design",
        desc: "Eye-catching, genre-smart covers designed to stand out in search results and on the bookstore shelf.",
        href: "/services/book-cover-design",
        icon: Image,
      },
      {
        title: "Children's Book Illustration",
        desc: "Colourful hand-drawn or digital illustrations that bring every page of your children's book to life.",
        href: "/services/childrens-book-illustration",
        icon: Brush,
      },
      {
        title: "Character Design",
        desc: "Distinctive, memorable characters with consistent looks and expressions across your book, series and merchandise.",
        href: "/services/character-design",
        icon: Smile,
      },
      {
        title: "Interior Design",
        desc: "Thoughtful page layouts, chapter openers and typography that make your book a pleasure to read.",
        href: "/services/interior-design",
        icon: LayoutTemplate,
      },
      {
        title: "Graphics & Infographics",
        desc: "Clear charts, maps, diagrams and visuals that explain complex ideas at a glance.",
        href: "/services/graphics-infographics",
        icon: PieChart,
      },
      {
        title: "Activity Book Design",
        desc: "Fun, printable puzzles, colouring pages, mazes and workbook layouts for kids and adults alike.",
        href: "/services/activity-book-design",
        icon: Puzzle,
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Branding",
    services: [
      {
        title: "Book Marketing",
        desc: "A complete, done-for-you marketing strategy that builds your readership and drives consistent book sales.",
        href: "/services/book-marketing",
        icon: TrendingUp,
      },
      {
        title: "Amazon Marketing",
        desc: "Optimized listings, keyword research and Amazon ads that help your book rank higher and sell more.",
        href: "/services/amazon-marketing",
        icon: ShoppingCart,
      },
      {
        title: "Book Launch",
        desc: "Pre-order campaigns, early reviews and launch-week promotion that give your book the strongest possible start.",
        href: "/services/book-launch",
        icon: Rocket,
      },
      {
        title: "Social Media Marketing",
        desc: "Scroll-stopping posts, reels and campaigns that grow a loyal fanbase around you and your books.",
        href: "/services/social-media-marketing",
        icon: Share2,
      },
      {
        title: "Author Branding",
        desc: "A professional author website, logo and visual identity that makes you instantly recognizable to readers.",
        href: "/services/author-branding",
        icon: BadgeCheck,
      },
      {
        title: "Book Publicity",
        desc: "Podcast appearances, interviews and media features that put you and your book in front of new audiences.",
        href: "/services/book-publicity",
        icon: Mic,
      },
      {
        title: "Press Releases",
        desc: "Professionally written press releases distributed to news outlets to announce your book to the world.",
        href: "/services/press-releases",
        icon: Newspaper,
      },
    ],
  },
  {
    id: "animation",
    label: "Animation & Multimedia",
    services: [
      {
        title: "Book Trailers",
        desc: "Short, cinematic trailers that tease your story and build excitement on social media, Amazon and YouTube.",
        href: "/services/book-trailers",
        icon: Film,
      },
      {
        title: "2D Animation",
        desc: "Smooth, colourful 2D animation that brings your characters and story to life on screen.",
        href: "/services/2d-animation",
        icon: Sparkles,
      },
      {
        title: "Motion Graphics",
        desc: "Animated text, logos and explainer videos that grab attention and communicate your message fast.",
        href: "/services/motion-graphics",
        icon: Shapes,
      },
      {
        title: "Promotional Videos",
        desc: "Short promotional ads crafted for social media, Amazon and YouTube to drive clicks and sales.",
        href: "/services/promotional-videos",
        icon: Video,
      },
      {
        title: "Video Editing",
        desc: "Polished, professional edits of your interviews, readings and promo footage, ready to publish.",
        href: "/services/video-editing",
        icon: Scissors,
      },
      {
        title: "Audiobook Production",
        desc: "Professional narration, editing and studio mastering, delivered ready for Audible, Apple Books and more.",
        href: "/services/audiobook-production",
        icon: Headphones,
      },
    ],
  },
];

// Flat list of every service, tagged with its category
const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((cat) =>
  cat.services.map((service) => ({ ...service, category: cat.id }))
);

const TABS = [
  { id: "all", label: "All Services" },
  ...SERVICE_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
];

/* ------------------------------------------------------------------ */
/*  Shared look & settings                                             */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];
const GRADIENT_BG = "bg-[linear-gradient(135deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]";
const INITIAL_COUNT = 8;

// Vertical offset (px) of each column, giving the staggered look
const COLUMN_OFFSETS = {
  1: [0],
  2: [40, 0],
  4: [56, 0, 88, 8],
};

function useColumnCount() {
  const get = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1024) return 4;
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

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */
function ServiceCard({ service, active, onActivate, delay }) {
  const reduce = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease, delay }}
    >
      <Link
        to={service.href}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className={`group relative isolate block overflow-hidden rounded-2xl bg-white p-6 outline-none transition-[box-shadow,transform] duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#EF1A07] focus-visible:ring-offset-2 ${
          active
            ? "shadow-none"
            : "shadow-[0px_3px_5px_rgba(0,0,0,0.25)]"
        }`}
      >
        {/* Gradient layer, fades in on the active card */}
        <span
          aria-hidden="true"
          className={`absolute inset-0 -z-10 ${GRADIENT_BG} transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Paper plane in the corner of the active card */}
        <Send
          aria-hidden="true"
          className={`absolute right-5 top-5 h-4 w-4 text-white transition-all duration-500 ${
            active ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-1 translate-y-1 opacity-0"
          }`}
        />

        {Icon && (
          <Icon
            aria-hidden="true"
            strokeWidth={1.75}
            className={`h-8 w-8 transition-colors duration-500 ${active ? "text-white" : "text-[#EF1A07]"}`}
          />
        )}

        <h3
          className={`mt-6 font-heading text-lg font-medium leading-snug transition-colors duration-500 ${
            active ? "text-white" : "text-[#1a1a1a]"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`mt-3 text-sm font-light leading-6 transition-colors duration-500 ${
            active ? "text-white/85" : "text-neutral-500"
          }`}
        >
          {service.desc}
        </p>

        <span
          className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-500 ${
            active ? "text-white" : "text-[#EF1A07]"
          }`}
        >
          <span className="underline decoration-1 underline-offset-4">Learn More</span>
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function ServicesSection() {
  const [tab, setTab] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [activeHref, setActiveHref] = useState(ALL_SERVICES[0]?.href);
  const columnCount = useColumnCount();
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (tab === "all" ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.category === tab)),
    [tab]
  );
  const visible = tab === "all" && !showAll ? filtered.slice(0, INITIAL_COUNT) : filtered;
  const hasMore = tab === "all" && filtered.length > INITIAL_COUNT;

  const changeTab = (id) => {
    setTab(id);
    setShowAll(false);
    const first = id === "all" ? ALL_SERVICES[0] : ALL_SERVICES.find((s) => s.category === id);
    setActiveHref(first?.href);
  };

  // Spread cards across columns left-to-right, row by row
  const columns = Array.from({ length: columnCount }, () => []);
  visible.forEach((service, i) =>
    columns[i % columnCount].push({ service, row: Math.floor(i / columnCount) })
  );
  const offsets = COLUMN_OFFSETS[columnCount] ?? [];

  return (
    <section id="services" className="bg-white py-20 lg:py-28">
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
            <span className="regular block">Your Complete</span>
            <span className="medium block">Publishing Solution</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-6 text-neutral-500">
            Explore our full spectrum of professional publishing solutions tailored to guide authors through every phase of book creation. At Author House Inc, we empower writers with end-to-end expertise—from initial concept development to worldwide distribution and audience growth. 
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          role="tablist"
          aria-label="Service categories"
          className="mx-auto mt-10 flex max-w-full gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-wrap lg:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {TABS.map((t) => {
            const selected = t.id === tab;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => changeTab(t.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#EF1A07] ${
                  selected ? "text-white" : "bg-neutral-100 text-neutral-600 hover:text-[#1a1a1a]"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="services-tab-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className={`absolute inset-0 rounded-full ${GRADIENT_BG}`}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Staggered card columns — re-mounts on tab change so cards animate in again */}
        <div key={tab} className="mt-12 flex items-start gap-6">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="flex flex-1 flex-col gap-6"
              style={{ marginTop: offsets[colIndex] ?? 0 }}
            >
              {col.map(({ service, row }) => (
                <ServiceCard
                  key={service.href}
                  service={service}
                  active={service.href === activeHref}
                  onActivate={() => setActiveHref(service.href)}
                  delay={(row < 2 ? row : 0) * 0.08 + colIndex * 0.1}
                />
              ))}
            </div>
          ))}
        </div>

        {/* View all */}
        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(239,26,7,0.3)] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07] focus-visible:ring-offset-2 ${GRADIENT_BG}`}
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Services`}
              <ChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}