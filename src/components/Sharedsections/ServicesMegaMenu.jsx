import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  // tabs
  PenLine,
  BookOpen,
  Palette,
  Megaphone,
  MonitorPlay,
  // writing
  Feather,
  Users,
  BookOpenCheck,
  FileText,
  AlignLeft,
  ClipboardCheck,
  // publishing
  TabletSmartphone,
  Printer,
  Barcode,
  Copyright,
  // design
  Brush,
  Smile,
  LayoutTemplate,
  PieChart,
  Puzzle,
  // marketing
  ShoppingCart,
  Rocket,
  Share2,
  BadgeCheck,
  Mic,
  Newspaper,
  // animation
  Sparkles,
  Shapes,
  Video,
  Scissors,
  Headphones,
} from "lucide-react";
import { Link, useLocation } from "react-router";

/* ------------------------------------------------------------------ */
/*  Shared look                                                        */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];
const GRADIENT_BG = "bg-[linear-gradient(135deg,#B0197E_0%,#310D89_100%)]";

const layeredShadow = [
  "0 2.2px 1.76px 0 rgba(0, 0, 0, 0.02)",
  "0 5.29px 4.23px 0 rgba(0, 0, 0, 0.028)",
  "0 9.96px 7.96px 0 rgba(0, 0, 0, 0.035)",
  "0 17.78px 14.21px 0 rgba(0, 0, 0, 0.042)",
  "0 33.22px 26.57px 0 rgba(0, 0, 0, 0.05)",
  "0 79.51px 63.61px 0 rgba(0, 0, 0, 0.07)",
].join(", ");

// Icon colours for the small cards, used in order. Keep class strings whole for Tailwind.
const PALETTE = [
  { box: "bg-[#FFF1EA] text-[#EF5A1F] group-hover:bg-[#EF5A1F]" },
  { box: "bg-[#F3EEFF] text-[#7C5CFC] group-hover:bg-[#7C5CFC]" },
  { box: "bg-[#E8F7F0] text-[#16A36B] group-hover:bg-[#16A36B]" },
  { box: "bg-[#EAF2FF] text-[#3B82F6] group-hover:bg-[#3B82F6]" },
  { box: "bg-[#FFEDF2] text-[#E8476F] group-hover:bg-[#E8476F]" },
  { box: "bg-[#FFF5E3] text-[#E99A0C] group-hover:bg-[#E99A0C]" },
];

/* ------------------------------------------------------------------ */
/*  Menu data                                                          */
/*  - `featured: true` : the big card on the left of that tab          */
/*  - `image`          : picture in the featured card's bottom right   */
/*                       (files go in /public/images/mega-menu/)       */
/*  Also exported for the mobile menu and footer.                      */
/* ------------------------------------------------------------------ */
export const ServicesMenu = [
  {
    id: "writing",
    label: "Writing & Editing",
    icon: PenLine,
    links: [
      { title: "Book Writing", desc: "Fiction and non-fiction, written with you from first idea to final chapter.", href: "/services/book-writing", featured: true, image: "/image/mega-menu/book-writing.png" },
      { title: "Ghostwriting", desc: "Your story, your name, our expert writers.", href: "/services/ghostwriting", icon: Feather },
      { title: "Children's Book Writing", desc: "Age-right stories kids love to read.", href: "/services/childrens-book-writing", icon: Users },
      { title: "Book Editing", desc: "Developmental and line edits that lift every chapter.", href: "/services/book-editing", icon: BookOpenCheck },
      { title: "Proofreading & Copy Editing", desc: "Every typo and slip caught before print.", href: "/services/proofreading-copy-editing", icon: FileText },
      { title: "Formatting & Typesetting", desc: "Clean, professional interiors for print and ebook.", href: "/services/formatting-typesetting", icon: AlignLeft },
      { title: "Manuscript Assessment", desc: "Honest expert feedback on what to fix next.", href: "/services/manuscript-assessment", icon: ClipboardCheck },
    ],
  },
  {
    id: "publishing",
    label: "Publishing & Rights",
    icon: BookOpen,
    links: [
      { title: "Global Distribution", desc: "Get your book into online stores, bookshops and libraries around the world.", href: "/services/global-distribution", featured: true, image: "/image/mega-menu/global-distribution.png" },
      { title: "Ebook Publishing", desc: "Live on Kindle, Apple Books, Kobo and more.", href: "/services/ebook-publishing", icon: TabletSmartphone },
      { title: "Print Book Publishing", desc: "Paperback and hardcover editions, printed on demand.", href: "/services/print-book-publishing", icon: Printer },
      { title: "ISBN & Barcode", desc: "Registered ISBNs and retail-ready barcodes.", href: "/services/isbn-barcode", icon: Barcode },
      { title: "Copyright Assistance", desc: "Protect your work the right way.", href: "/services/copyright-assistance", icon: Copyright },
    ],
  },
  {
    id: "design",
    label: "Design & Illustration",
    icon: Palette,
    links: [
      { title: "Book Cover Design", desc: "Genre-smart covers that make readers stop scrolling and pick your book up.", href: "/services/book-cover-design", featured: true, image: "/image/mega-menu/book-cover-design.png" },
      { title: "Children's Book Illustration", desc: "Hand-drawn or digital artwork for every page.", href: "/services/childrens-book-illustration", icon: Brush },
      { title: "Character Design", desc: "Memorable characters that stay consistent.", href: "/services/character-design", icon: Smile },
      { title: "Interior Design", desc: "Page layouts that are a pleasure to read.", href: "/services/interior-design", icon: LayoutTemplate },
      { title: "Graphics & Infographics", desc: "Charts, maps, diagrams and visuals that explain your ideas at a glance.", href: "/services/graphics-infographics", icon: PieChart },
      { title: "Activity Book Design", desc: "Puzzles, colouring and workbook pages.", href: "/services/activity-book-design", icon: Puzzle },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Branding",
    icon: Megaphone,
    links: [
      { title: "Book Marketing", desc: "A complete, done-for-you plan to grow your readership and your sales.", href: "/services/book-marketing", featured: true, image: "/image/mega-menu/book-marketing.png" },
      { title: "Amazon Marketing", desc: "Listings, keywords and ads that rank.", href: "/services/amazon-marketing", icon: ShoppingCart },
      { title: "Book Launch", desc: "Pre-orders, reviews and launch-week buzz.", href: "/services/book-launch", icon: Rocket },
      { title: "Social Media Marketing", desc: "Posts and reels that build a fanbase.", href: "/services/social-media-marketing", icon: Share2 },
      { title: "Author Branding", desc: "A look and voice readers remember.", href: "/services/author-branding", icon: BadgeCheck },
      { title: "Book Publicity", desc: "Podcasts, interviews and media features.", href: "/services/book-publicity", icon: Mic },
      { title: "Press Releases", desc: "News-ready announcements, distributed.", href: "/services/press-releases", icon: Newspaper },
    ],
  },
  {
    id: "animation",
    label: "Animation & Multimedia",
    icon: MonitorPlay,
    links: [
      { title: "Book Trailers", desc: "Short, cinematic videos that tease your story on social media, Amazon and YouTube.", href: "/services/book-trailers", featured: true, image: "/image/mega-menu/book-trailers.png" },
      { title: "2D Animation", desc: "Your characters in smooth, colourful motion.", href: "/services/2d-animation", icon: Sparkles },
      { title: "Motion Graphics", desc: "Animated text, ads and explainers.", href: "/services/motion-graphics", icon: Shapes },
      { title: "Promotional Videos", desc: "Ads for social media, Amazon and YouTube.", href: "/services/promotional-videos", icon: Video },
      { title: "Video Editing", desc: "Polished, professional cuts of your footage.", href: "/services/video-editing", icon: Scissors },
      { title: "Audiobook Production", desc: "Professional narrators, editing and studio mastering for every platform.", href: "/services/audiobook-production", icon: Headphones },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Featured card (left)                                               */
/* ------------------------------------------------------------------ */
function FeaturedCard({ link, onNavigate }) {
  return (
    <Link
      to={link.href}
      onClick={onNavigate}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#FFF7F2_0%,#FFE9DD_55%,#FFDCCB_100%)] p-6 outline-none transition-shadow duration-500 hover:shadow-[0_14px_30px_rgba(239,26,7,0.12)] focus-visible:ring-2 focus-visible:ring-[#B0197E] focus-visible:ring-offset-2"
    >
      {/* soft light circle behind the image */}
      <span
        aria-hidden="true"
        className="absolute -bottom-20 -right-16 -z-10 size-60 rounded-full bg-white/50 transition-transform duration-700 group-hover:scale-110"
      />

      <span className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EF5A1F]">
        Featured Service
      </span>
      <span className="mt-2 block font-heading text-[26px] leading-tight text-[#1a1a1a]">
        {link.title}
      </span>
      <span className="mt-3 block max-w-[210px] font-body text-[13px] leading-5 text-neutral-600">
        {link.desc}
      </span>

      <span className="relative z-10 mt-auto inline-flex items-center gap-2.5 font-body text-[13px] font-semibold text-[#B0197E]">
        <span className="flex size-8 items-center justify-center rounded-full border border-[#B0197E]/40 transition-all duration-300 group-hover:border-[#B0197E] group-hover:bg-[#B0197E] group-hover:text-white">
          <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
        Learn More
      </span>

      {link.image && (
        <img
          src={link.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="pointer-events-none absolute -bottom-0 -right-0 -z-10 w-[50%] max-w-[500px] object-contain drop-shadow-[0_18px_22px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out group-hover:-rotate-2 group-hover:scale-105"
        />
      )}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Small service card (right)                                         */
/* ------------------------------------------------------------------ */
function ServiceCard({ link, index, wide, onNavigate }) {
  const Icon = link.icon ?? FileText;
  const colors = PALETTE[index % PALETTE.length];

  return (
    <Link
      to={link.href}
      onClick={onNavigate}
      className={`group flex min-h-0 flex-col rounded-2xl border border-black/[0.06] bg-white p-4 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B0197E]/20 hover:shadow-[0_12px_28px_rgba(239,26,7,0.10)] focus-visible:ring-2 focus-visible:ring-[#B0197E] ${
        wide ? "col-span-2" : ""
      }`}
    >
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:text-white ${colors.box}`}
      >
        <Icon size={17} aria-hidden="true" />
      </span>

      <span className="mt-3 flex items-center justify-between gap-2">
        <span className="font-heading text-md font-medium leading-tight text-[#1a1a1a]">
          {link.title}
        </span>
        <ArrowRight
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[#B0197E] transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>

      <span className="mt-1.5 line-clamp-2 font-body text-xs leading-[1.1rem] text-neutral-500">
        {link.desc}
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
  const [caretX, setCaretX] = useState(null);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const boxRef = useRef(null);
  const tabRefs = useRef([]);
  const closeTimer = useRef();
  const reduce = useReducedMotion();
  const uid = useId();
  const panelId = `${uid}-panel`;

  const current = categories.find((c) => c.id === activeId) ?? categories[0];
  const featured = current.links.find((l) => l.featured) ?? current.links[0];
  const others = current.links.filter((l) => l !== featured);

  // 4 cards → 2 columns, otherwise 3; with 5 cards the last one goes wide
  const cols = others.length <= 4 ? 2 : 3;
  const lastWide = cols === 3 && others.length % 3 === 2;

  // Highlight "Services" like an active NavLink when on /services or any service page
  const { pathname } = useLocation();
  const isActive = pathname === allServicesHref || pathname.startsWith(`${allServicesHref}/`);

  // Close the panel after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Point the little caret at the trigger button
  const positionCaret = () => {
    const t = triggerRef.current?.getBoundingClientRect();
    const b = boxRef.current?.getBoundingClientRect();
    if (t && b) setCaretX(t.left + t.width / 2 - b.left);
  };

  const openNow = () => {
    clearTimeout(closeTimer.current);
    positionCaret();
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

  // Escape closes, click outside closes, resize re-aims the caret
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
    window.addEventListener("resize", positionCaret);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      window.removeEventListener("resize", positionCaret);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Arrow keys move between category tabs
  const onTabKeyDown = (e, index) => {
    const last = categories.length - 1;
    let next = null;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
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
      <Link to={label}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? closeNow() : openNow())}
        className={`inline-flex items-center gap-1 font-body text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:underline ${
          isActive
            ? "italic font-semibold text-[#fff]"
            : open
            ? "text-[#B0197E]"
            : "text-white hover:text-[#B0197E]"
        } ${triggerClassName}`}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      </Link>

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
        <div ref={boxRef} className="relative mx-auto w-full max-w-[1080px] px-6">
          <div
            className="relative rounded-[24px] border-[0.8px] border-black/10 bg-white p-3"
            style={{ boxShadow: layeredShadow }}
          >
            {/* Caret pointing at the trigger */}
            {caretX !== null && (
              <span
                aria-hidden="true"
                style={{ left: caretX - 24 }} // 24 = px-6 of the wrapper
                className="absolute -top-[7px] size-3.5 -translate-x-1/2 rotate-45 rounded-tl-[3px] border-l-[0.8px] border-t-[0.8px] border-black/10 bg-white"
              />
            )}

            {/* Category tabs */}
            <div
              role="tablist"
              aria-label="Service categories"
              className="flex items-center justify-between gap-1 border-b border-black/[0.06] px-1 pb-3"
            >
              {categories.map((cat, i) => {
                const selected = cat.id === current.id;
                const TabIcon = cat.icon;
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
                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 font-body text-[13px] font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#B0197E] ${
                      selected ? "text-[#B0197E]" : "text-neutral-600 hover:text-[#1a1a1a]"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId={`${uid}-tab-pill`}
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        className="absolute inset-0 rounded-xl bg-[#FFF1EA]"
                      >
                        <span className={`absolute inset-x-4 bottom-1 h-[2px] rounded-full ${GRADIENT_BG}`} />
                      </motion.span>
                    )}
                    {TabIcon && <TabIcon size={16} aria-hidden="true" className="relative z-10" />}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active category — re-mounts per tab for a quick fade */}
            <div
              role="tabpanel"
              id={`${uid}-tabpanel`}
              aria-labelledby={`${uid}-tab-${current.id}`}
              className="pt-3"
            >
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease }}
                className="grid min-h-[290px] grid-cols-[0.95fr_2fr] gap-3"
              >
                <FeaturedCard link={featured} onNavigate={closeNow} />

                <div className={`grid auto-rows-fr gap-3 ${cols === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                  {others.map((link, i) => (
                    <ServiceCard
                      key={link.href}
                      link={link}
                      index={i}
                      wide={lastWide && i === others.length - 1}
                      onNavigate={closeNow}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}