import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Baby,
  ChevronDown,
  Clapperboard,
  ClipboardCheck,
  Copyright,
  Ghost,
  Globe,
  Headphones,
  Image,
  LayoutTemplate,
  Library,
  Megaphone,
  Newspaper,
  Palette,
  PenLine,
  Printer,
  Puzzle,
  Radio,
  Rocket,
  ScanBarcode,
  Scissors,
  Shapes,
  Share2,
  ShoppingCart,
  Smile,
  Sparkles,
  SpellCheck,
  Tablet,
  Type,
  Video,
  Wand,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import PrimaryButton from "../ui/PrimaryButton";

const GRADIENT_BG = "bg-[linear-gradient(135deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]";
const ease = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  Menu data                                                          */
/*  Each category: a list of links + one featured card on the right.   */
/*  Add or remove links freely; the list wraps into two columns.       */
/* ------------------------------------------------------------------ */
export const ServicesMenu = [
  {
    id: "writing",
    label: "Writing & Editing",
    icon: PenLine,
    blurb: "Turn your idea into a polished, ready-to-publish manuscript.",
    featured: {
      title: "Not sure where to start?",
      desc: "Get a free manuscript assessment with honest notes from a senior editor.",
      href: "/services/manuscript-assessment",
      image: "/images/menu/writing.jpg",
      tag: "Free assessment",
    },
    links: [
      { title: "Book Writing", desc: "Fiction and non-fiction, written with you.", href: "/services/book-writing", icon: BookOpen },
      { title: "Ghostwriting", desc: "Your story, your name, our writers.", href: "/services/ghostwriting", icon: Ghost },
      { title: "Children's Book Writing", desc: "Age-right stories kids love to read.", href: "/services/childrens-book-writing", icon: Baby },
      { title: "Book Editing", desc: "Developmental and line edits.", href: "/services/book-editing", icon: PenLine },
      { title: "Proofreading & Copy Editing", desc: "Every typo and slip caught before print.", href: "/services/proofreading-copy-editing", icon: SpellCheck },
      { title: "Formatting & Typesetting", desc: "Clean interiors for print and ebook.", href: "/services/formatting-typesetting", icon: Type },
      { title: "Manuscript Assessment", desc: "Expert feedback on what to fix next.", href: "/services/manuscript-assessment", icon: ClipboardCheck },
    ],
  },
  {
    id: "publishing",
    label: "Publishing & Rights",
    icon: Library,
    blurb: "Get your book published, protected and on sale worldwide.",
    featured: {
      title: "Sell in 40,000+ stores",
      desc: "Amazon, Barnes & Noble, Apple Books, Kobo, libraries and more.",
      href: "/services/global-distribution",
      image: "/images/menu/publishing.jpg",
      tag: "Global reach",
    },
    links: [
      { title: "Ebook Publishing", desc: "Kindle, Apple Books, Kobo and more.", href: "/services/ebook-publishing", icon: Tablet },
      { title: "Print Book Publishing", desc: "Paperback and hardcover editions.", href: "/services/print-book-publishing", icon: Printer },
      { title: "ISBN & Barcode", desc: "Registered ISBNs and retail barcodes.", href: "/services/isbn-barcode", icon: ScanBarcode },
      { title: "Copyright Assistance", desc: "Protect your work the right way.", href: "/services/copyright-assistance", icon: Copyright },
      { title: "Global Distribution", desc: "Online stores, bookshops and libraries.", href: "/services/global-distribution", icon: Globe },
    ],
  },
  {
    id: "design",
    label: "Design & Illustration",
    icon: Palette,
    blurb: "Covers, characters and pages that make readers pick it up.",
    featured: {
      title: "Covers that sell",
      desc: "Custom, genre-smart cover concepts with revisions until you love it.",
      href: "/services/book-cover-design",
      image: "/images/menu/design.jpg",
      tag: "Most popular",
    },
    links: [
      { title: "Book Cover Design", desc: "Eye-catching, genre-right covers.", href: "/services/book-cover-design", icon: Image },
      { title: "Children's Book Illustration", desc: "Hand-drawn or digital artwork.", href: "/services/childrens-book-illustration", icon: Palette },
      { title: "Character Design", desc: "Memorable characters, page after page.", href: "/services/character-design", icon: Smile },
      { title: "Interior Design", desc: "Layouts that are easy on the eye.", href: "/services/interior-design", icon: LayoutTemplate },
      { title: "Graphics & Infographics", desc: "Charts, maps and visuals for your book.", href: "/services/graphics-infographics", icon: Shapes },
      { title: "Activity Book Design", desc: "Puzzles, colouring and workbook pages.", href: "/services/activity-book-design", icon: Puzzle },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Branding",
    icon: Megaphone,
    blurb: "Put your book in front of the readers who'll love it.",
    featured: {
      title: "Launch like a bestseller",
      desc: "Pre-orders, early reviews and launch-week buzz, planned for you.",
      href: "/services/book-launch",
      image: "/images/menu/marketing.jpg",
      tag: "Launch plan",
    },
    links: [
      { title: "Book Marketing", desc: "A full plan to grow your sales.", href: "/services/book-marketing", icon: Megaphone },
      { title: "Amazon Marketing", desc: "Listings, keywords and ads that rank.", href: "/services/amazon-marketing", icon: ShoppingCart },
      { title: "Book Launch", desc: "A launch week readers notice.", href: "/services/book-launch", icon: Rocket },
      { title: "Social Media Marketing", desc: "Posts and reels that build fans.", href: "/services/social-media-marketing", icon: Share2 },
      { title: "Author Branding", desc: "A look and voice readers remember.", href: "/services/author-branding", icon: BadgeCheck },
      { title: "Book Publicity", desc: "Podcasts, interviews and features.", href: "/services/book-publicity", icon: Radio },
      { title: "Press Releases", desc: "News-ready announcements, distributed.", href: "/services/press-releases", icon: Newspaper },
    ],
  },
  {
    id: "animation",
    label: "Animation & Multimedia",
    icon: Clapperboard,
    blurb: "Bring your book to life on screen and in sound.",
    featured: {
      title: "Hear your book",
      desc: "Professional narrators and studio-quality audiobook production.",
      href: "/services/audiobook-production",
      image: "/images/menu/audiobook.jpg",
      tag: "Audiobooks",
    },
    links: [
      { title: "Book Trailers", desc: "Short videos that tease your story.", href: "/services/book-trailers", icon: Clapperboard },
      { title: "2D Animation", desc: "Your characters in smooth motion.", href: "/services/2d-animation", icon: Sparkles },
      { title: "Motion Graphics", desc: "Animated text, ads and explainers.", href: "/services/motion-graphics", icon: Wand },
      { title: "Promotional Videos", desc: "Ads for social, Amazon and YouTube.", href: "/services/promotional-videos", icon: Video },
      { title: "Video Editing", desc: "Polished cuts of your footage.", href: "/services/video-editing", icon: Scissors },
      { title: "Audiobook Production", desc: "Narration, editing and mastering.", href: "/services/audiobook-production", icon: Headphones },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Pieces                                                             */
/* ------------------------------------------------------------------ */
function ServiceLink({ link, onNavigate }) {
  const Icon = link.icon;
  return (
    <Link
      to={link.href}
      onClick={onNavigate}
      className="group flex items-start gap-3 rounded-xl p-2.5 outline-none transition-colors duration-200 hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:ring-1 focus-visible:ring-[#EF1A07]"
    >
      <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-[#E2770B] transition-colors duration-300 group-hover:border-transparent group-hover:text-white">
        <span
          aria-hidden="true"
          className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${GRADIENT_BG}`}
        />
        {Icon && <Icon size={16} className="relative" aria-hidden="true" />}
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 text-sm font-medium text-white">
          {link.title}
          <ArrowUpRight
            size={14}
            aria-hidden="true"
            className="-translate-x-1 text-white/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-white/70"
          />
        </span>
        <span className="mt-0.5 block text-xs leading-5 text-white/50">{link.desc}</span>
      </span>
    </Link>
  );
}

function FeaturedCard({ item, onNavigate }) {
  return (
    <Link
      to={item.href}
      onClick={onNavigate}
      className="group relative isolate flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl bg-[#1a1a1a] p-5 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07]"
    >
      {item.image && (
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/10" />

      {item.tag && (
        <span className={`mb-auto self-start rounded-full px-3 py-1 text-[11px] font-semibold text-white ${GRADIENT_BG}`}>
          {item.tag}
        </span>
      )}

      <h3 className="mt-4 font-heading text-xl font-medium leading-tight">{item.title}</h3>
      <p className="mt-1.5 text-[13px] leading-5 text-white/75">{item.desc}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white">
        Learn more
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Mega menu                                                          */
/*  Put it inside your desktop nav. The panel spans the header width,  */
/*  so give your <header> `relative` and no overflow-hidden.           */
/* ------------------------------------------------------------------ */
export default function ServicesMegaMenu({
  label = "Services",
  categories = ServicesMenu,
  allServicesHref = "/services",
  triggerClassName = "",
}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const tabRefs = useRef([]);
  const closeTimer = useRef();
  const reduce = useReducedMotion();
  const uid = useId();
  const panelId = `${uid}-panel`;

  const current = categories.find((c) => c.id === activeId) ?? categories[0];

  // Highlight "Services" like an active NavLink on /services or any service page
  const { pathname } = useLocation();
  const isActive = pathname === allServicesHref || pathname.startsWith(`${allServicesHref}/`);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };
  const closeNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(false);
  };

  // Escape closes, click outside closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeNow();
        triggerRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) closeNow();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Up/Down arrows move between categories in the side rail
  const onTabKeyDown = (e, index) => {
    const last = categories.length - 1;
    let next = null;
    if (e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActiveId(categories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      ref={rootRef}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget)) closeSoon();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? closeNow() : openNow())}
        className={`inline-flex items-center gap-1 font-body text-sm font-medium text-white transition-colors duration-200 focus:outline-none focus-visible:underline ${
          isActive ? "font-semibold" : ""
        } ${triggerClassName}`}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180 text-[#E2770B]" : ""}`}
        />
      </button>

      {/* The panel stays mounted (only hidden when closed) so the
          "Get a Free Consultation" popup isn't removed when the cursor leaves. */}
      <motion.div
        id={panelId}
        aria-hidden={!open}
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, visibility: "visible" },
          closed: { opacity: 0, y: reduce ? 0 : -10, transitionEnd: { visibility: "hidden" } },
        }}
        transition={{ duration: 0.25, ease }}
        // pt-3 is an invisible bridge so the menu doesn't close on the way down
        className={`absolute inset-x-0 top-full z-50 hidden pt-3 lg:block ${open ? "" : "pointer-events-none"}`}
      >
        <div className="mx-auto w-full max-w-[1120px] px-6">
          {/* Solid dark panel: stands apart from the dark hero with a lighter surface,
              a thin border, a gradient top edge and a deep shadow */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#fff] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(0,0,0,0.8)]">
            {/* Gradient line along the top edge */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,#E2770B_30%,#EF1A07_70%,transparent)]"
            />
            {/* Soft red glow in the top-right corner */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#EF1A07]/15 blur-[90px]"
            />

            <div className="relative grid grid-cols-[230px_1fr_250px]">
              {/* ---------- Category rail ---------- */}
              <div className="flex flex-col border-r border-white/[0.08] bg-black/40 p-3">
                <p className="px-3 pb-2 pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Our services
                </p>

                <div role="tablist" aria-orientation="vertical" aria-label="Service categories" className="flex flex-col gap-0.5">
                  {categories.map((cat, i) => {
                    const Icon = cat.icon;
                    const selected = cat.id === current.id;
                    return (
                      <button
                        key={cat.id}
                        ref={(el) => (tabRefs.current[i] = el)}
                        type="button"
                        role="tab"
                        id={`${uid}-tab-${cat.id}`}
                        aria-selected={selected}
                        aria-controls={`${uid}-tabpanel`}
                        tabIndex={selected ? 0 : -1}
                        onMouseEnter={() => setActiveId(cat.id)}
                        onClick={() => setActiveId(cat.id)}
                        onKeyDown={(e) => onTabKeyDown(e, i)}
                        className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium outline-none transition-colors focus-visible:ring-1 focus-visible:ring-[#EF1A07] ${
                          selected ? "text-white" : "text-white/55 hover:text-white"
                        }`}
                      >
                        {selected && (
                          <motion.span
                            layoutId={`${uid}-rail-bg`}
                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                            className="absolute inset-0 rounded-xl bg-white/[0.07]"
                          >
                            <span className={`absolute inset-y-2 left-0 w-[3px] rounded-full ${GRADIENT_BG}`} />
                          </motion.span>
                        )}
                        {Icon && (
                          <Icon
                            size={16}
                            aria-hidden="true"
                            className={`relative shrink-0 ${selected ? "text-[#E2770B]" : ""}`}
                          />
                        )}
                        <span className="relative">{cat.label}</span>
                        <span className="relative ml-auto text-[11px] text-white/35">{cat.links.length}</span>
                      </button>
                    );
                  })}
                </div>

                <Link
                  to={allServicesHref}
                  onClick={closeNow}
                  className="mt-auto inline-flex items-center gap-1 px-3 pb-1 pt-4 text-[13px] font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  View all services
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>

              {/* ---------- Links ---------- */}
              <div
                role="tabpanel"
                id={`${uid}-tabpanel`}
                aria-labelledby={`${uid}-tab-${current.id}`}
                className="p-5"
              >
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, ease }}
                >
                  <div className="mb-3 px-2.5">
                    <h2 className="font-heading text-lg font-medium text-white">{current.label}</h2>
                    <p className="mt-0.5 text-xs text-white/50">{current.blurb}</p>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                    {current.links.map((link) => (
                      <li key={link.href}>
                        <ServiceLink link={link} onNavigate={closeNow} />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* ---------- Featured ---------- */}
              <div className="p-3 pl-0">
                <motion.div
                  key={`${current.id}-featured`}
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease }}
                  className="h-full"
                >
                  <FeaturedCard item={current.featured} onNavigate={closeNow} />
                </motion.div>
              </div>
            </div>

            {/* ---------- Footer strip ---------- */}
            <div className="relative flex items-center justify-between gap-6 border-t border-white/[0.08] bg-black/40 px-6 py-3.5">
              <p className="text-[13px] text-white/60">
                Not sure which service you need? Tell us about your book and we'll suggest a plan.
              </p>
              <div onClick={closeNow} className="shrink-0">
                <PrimaryButton openModal className="px-5 py-2 text-sm">
                  Get a Free Consultation
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}