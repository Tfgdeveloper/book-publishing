import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookUser, Phone } from "lucide-react";
import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import Heading from "../ui/Heading";

/*
  One CTA component, three looks:

  <SupportCTA />                     → "Follow Us / Still You Need Our Support?" (default)
  <SupportCTA variant="publish" />   → full-width "Publish Your Book Journey With Us" banner
  <SupportCTA variant="stats" />     → "We are growing like crazy" card with counting stats

  Every text, link, image and number can be passed as a prop (see each variant's defaults).
*/

const GRADIENT = "linear-gradient(100deg, #E2770B 0%, #EF1A07 40%, #EF1A07 100%)";
const SKEW = 8; // how far the support card's left edge slants in toward the bottom (degrees)
const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease },
};

const telHref = (phone) => `tel:${phone.replace(/\D/g, "")}`;

/* Halftone dots rising from the bottom, shared by the support and stats cards */
const Halftone = ({ at = "58% 105%", size = "22% 75%" }) => (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1.2px, transparent 1.6px)",
      backgroundSize: "11px 11px",
      maskImage: `radial-gradient(ellipse ${size} at ${at}, black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)`,
      WebkitMaskImage: `radial-gradient(ellipse ${size} at ${at}, black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)`,
    }}
  />
);

/* Brand icons as inline SVG, so they don't depend on a lucide version */
const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    path: "M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V9c0-.6.4-1 1-1z",
  },
  {
    name: "Twitter",
    href: "#",
    path: "M22 5.9c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.5 11.7 11.7 0 0 0 8.3 20.3c7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M4.5 8.5h3.6V20H4.5zM6.3 3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2zM10.3 8.5h3.4v1.6c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.3 2.4 4.3 5.6V20h-3.6v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3.7z",
  },
  {
    name: "Pinterest",
    href: "#",
    path: "M12.2 2C6.7 2 4 5.9 4 9.2c0 2 .8 3.8 2.4 4.4.3.1.5 0 .6-.3l.2-1c.1-.3 0-.4-.2-.7-.5-.6-.8-1.3-.8-2.4 0-3.1 2.3-5.8 6-5.8 3.3 0 5.1 2 5.1 4.7 0 3.5-1.6 6.5-3.9 6.5-1.3 0-2.2-1-1.9-2.3.4-1.5 1.1-3.2 1.1-4.3 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.5 6.5c-.4 1.9-.1 4.3 0 4.5 0 .1.2.2.3.1.1-.2 1.7-2.1 2.2-4l.9-3.4c.4.8 1.7 1.6 3.1 1.6 4 0 6.8-3.7 6.8-8.6C20.1 5.6 16.9 2 12.2 2z",
  },
];

/* ================================================================
   Variant 1: SUPPORT (original)
================================================================ */
function SupportVariant({
  phone = "+123 - 234 - 1234",
  socials = SOCIALS,
  arrowHref = "#contact",
}) {
  return (
    <section className="mb-10 py-7 lg:py-5">
      <Container>
        <motion.div
          {...fadeUp}
          className="relative flex flex-col overflow-hidden rounded-2xl bg-[#F4F4F6] lg:flex-row"
        >
          {/* Left: Follow us */}
          <div className="flex flex-col justify-center gap-5 px-8 py-8 lg:w-[34%] lg:py-10 lg:pr-20">
            <div className="flex items-center gap-3">
              <BookUser className="h-6 w-6 text-[#EF1A07]" strokeWidth={2} />
              <span className="font-heading text-lg font-semibold text-[#151515]">Follow Us</span>
            </div>

            <ul className="flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#EF1A07] shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EF1A07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07] focus-visible:ring-offset-2"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: gradient card. Rounded corners, left edge slants in toward the bottom */}
          <div className="relative flex-1 lg:-ml-14">
            <div className="relative h-full overflow-hidden rounded-[20px]">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 -right-24 overflow-hidden rounded-[20px]"
                style={{ transform: `skewX(${SKEW}deg)`, transformOrigin: "top left" }}
              >
                <div
                  className="absolute inset-y-0 -left-24 -right-24"
                  style={{ transform: `skewX(${-SKEW}deg)`, transformOrigin: "top left", background: GRADIENT }}
                >
                  <Halftone />
                </div>
              </div>

              <div className="relative flex h-full flex-col justify-center gap-5 px-8 py-10 pl-12 text-white lg:flex-row lg:items-center lg:justify-between lg:py-12 lg:pl-28 lg:pr-10">
                <div>
                  <h2 className="font-heading text-2xl leading-tight md:text-3xl">
                    <span className="font-regular">Still You Need </span>
                    <span className="font-medium">Our Support?</span>
                  </h2>
                  <p className="mt-2 text-sm text-white/85">
                    Don't wait, make a smart &amp; logical quote here. It's pretty easy.
                  </p>
                </div>

                <a
                  href={telHref(phone)}
                  className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-medium transition-opacity hover:opacity-80 lg:self-center lg:text-base mr-5"
                >
                  <Phone className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  {phone}
                </a>
              </div>
            </div>

            <a
              href={arrowHref}
              aria-label="Contact us"
              className="group absolute left-4 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(239,26,7,0.3),0_4px_12px_rgba(226,119,11,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:flex"
            >
              <ArrowUpRight
                className="h-6 w-6 text-[#EF1A07] transition-transform duration-300 group-hover:rotate-45"
                strokeWidth={2}
              />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* ================================================================
   Variant 2: PUBLISH (full-width banner with book collage)
================================================================ */
function PublishVariant({
  phone = "(000) 123 4567",
  buttonText = "Get a Quote",
  buttonHref = "#contact",
  image = "image/cta-books.png", // transparent PNG of the book collage
  imageAlt = "A collection of published books",
}) {
  return (
    // pt leaves room for the books that rise above the banner
    <section className="relative mt-24 lg:mt-32">
      <div className="relative">
        {/* Faint diagonal bands, like the design */}
        <img src="/image/cta.png"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden w-full h-full"
          
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden w-full h-full bg-[linear-gradient(90deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)] opacity-80"></div>

        <Container className="relative grid items-center gap-10 py-8 lg:grid-cols-[2fr_1fr] lg:py-13">
          <motion.div {...fadeUp} className="text-white">
            <h2 className="font-heading text-3xl leading-tight md:text-4xl">
              <span className="medium">Publish Your Book </span>
              <span className="regular">Journey With Us</span>
            </h2>
            <p className="mt-4  text-sm leading-6 text-white/85 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-0">
              <PrimaryButton openModal variant="glass" className="px-[32px] py-[12px]">{buttonText}</PrimaryButton>
              <SecondaryButton variant="glassIcon" href="tel:+123 - 234 - 1234">+123 - 234 - 1234</SecondaryButton>
            </div>
          </motion.div>

          {/* Spacer keeps the text column from running under the image on desktop */}
          <div className="hidden lg:block" />
          <motion.img
          src={image}
          alt={imageAlt}
          initial={{ opacity: 0, y: 60, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="pointer-events-none absolute bottom-0 right-[4%] hidden  lg:block"
        />
        </Container>


        {/* Book collage: sits on the right and pokes above the banner */}
        
      </div>
    </section>
  );
}

/* ================================================================
   Variant 3: STATS ("We are growing like crazy")
================================================================ */
const STATS = [
  { prefix: "$", value: 28, suffix: "M", label: "raised by startups" },
  { prefix: "$", value: 28, suffix: "M", label: "raised by startups" },
  { prefix: "$", value: 28, suffix: "M", label: "raised by startups" },
];

/* Counts up from 0 the first time it scrolls into view */
function CountUp({ prefix = "", value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function StatsVariant({ stats = STATS }) {
  return (
    <section className="py-5 lg:py-5">
      <Container>
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl px-8 py-5 text-white lg:px-12 lg:py-6"
          style={{ background: GRADIENT }}
        >
          <Halftone at="68% 110%" size="30% 70%" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="font-heading text-3xl leading-tight md:text-4xl">
                <span className="regular">We are </span>
                <span className="medium">growing </span>
                <span className="block regular">like crazy</span>
              </h2>
              <p className="mt-3 max-w-xs text-sm font-light leading-6 text-white/85">
                Lorem ipsum dolor, consectetur elit. Praesent porta metus.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              {stats.map((s, i) => (
                <li key={i}>
                  <p className="font-heading text-4xl  md:text-5xl">
                    <CountUp prefix={s.prefix} value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="mt-2 text-sm font-light text-white">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* ================================================================
   Wrapper
================================================================ */
function SupportCTA({ variant = "support", ...props }) {
  if (variant === "publish") return <PublishVariant {...props} />;
  if (variant === "stats") return <StatsVariant {...props} />;
  return <SupportVariant {...props} />;
}

export default SupportCTA;