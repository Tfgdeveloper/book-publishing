import { ChevronRight, ArrowUpRight, Phone, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import ContactForm from "./ContactForm";
import LightRays from "../ui/LightRays";
import Heading from "../ui/Heading";
import { useState } from "react";
const items = [
  {
    title: "Book Writing",
    image: "/images/audiobook.jpg",
  },
  {
    title: "Book Publishing",
    image: "https://picsum.photos/id/1015/900/1200",
  },
  {
    title: "Book Marketing",
    image: "https://picsum.photos/id/1015/900/1200",
  },
];


const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const GRADIENT_BG = "bg-[linear-gradient(135deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]";
const PHONE = "+123 - 234 - 1234";

/* ------------------------------------------------------------------ */
/*  Shared animation settings — every entrance runs once, in view      */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */
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
 
function StarIcon() {
  return (
    <svg width="7" height="9" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 5.19629L4.64275e-07 10.3924L9.18537e-07 0.000136459L9 5.19629Z" fill="url(#paint0_linear_34_1086)"/>
      <defs>
      <linearGradient id="paint0_linear_34_1086" x1="-5.47619" y1="-0.803712" x2="-4.05902" y2="14.8348" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2770B"/>
      <stop offset="0.376384" stop-color="#EF1A07"/>
      <stop offset="0.651981" stop-color="#EF1A07"/>
      <stop offset="1" stop-color="#EF1A07"/>
      </linearGradient>
      </defs>
    </svg>
  );
}

function Rating({ score = "4.8/5.0", reviews = "2000", className = "" }) {
  return (
    <motion.p
      variants={fadeUp}
      className={`flex items-center gap-2 text-[15px] font-medium text-white ${className}`}
    >
      {score}
      <span className="flex gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span className="text-white/70">based on {reviews} reviews</span>
    </motion.p>
  );
}

function Badge({ children }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/80 backdrop-blur"
    >
      <span className={`h-2 w-2 rounded-full ${GRADIENT_BG}`} aria-hidden="true" />
      {children}
    </motion.span>
  );
}

function Breadcrumbs({ items = [], className = "" }) {
  if (!items.length) return null;
  return (
    <motion.nav variants={fadeUp} aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/55">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} className="font-medium text-white">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="transition-colors hover:text-[#EF1A07]">
                  {item.label}
                </a>
              )}
              {!last && <ChevronRight size={14} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}


function ExpandableCards() {
  const [active, setActive] = useState(0);

  return (
    <section className="flex h-full w-full gap-3 overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.title}
          onMouseEnter={() => setActive(index)}
          className={`relative overflow-hidden rounded-2xl cursor-pointer
            transition-all duration-700 ease-in-out
            ${
              active === index
                ? "flex-[3]"
                : "flex-1"
            }`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 transition-colors duration-500 hover:bg-black/10" />

          {/* Title */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <h2 className="text-xl md:text-2xl font-bold">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
}


function HomeHero() {
  return (
    <div className="relative overflow-clip rounded-b-[30px] bg-black h-screen">
      <section id="home" className="relative z-10 flex items-start h-screen pt-15">
        <Rays />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-start px-5 sm:px-6 lg:px-16">
          
        </div>
      </section>
    </div>
  );
}

export default HomeHero;