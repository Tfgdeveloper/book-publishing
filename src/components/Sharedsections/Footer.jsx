import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import PrimaryButton from "../ui/PrimaryButton";
import Heading from "../ui/Heading";

const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const GLOW = "0 10px 25px rgba(239,26,7,0.3), 0 4px 12px rgba(226,119,11,0.25)";

const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.15 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blogs", href: "#blogs" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact Us", href: "#contact" },
];

// `external: true` uses a normal <a>, needed for #hash links so the browser scrolls
const usefulLinks = [
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "FAQ's", href: "#faq", external: true },
];

/* Brand icons as inline SVG, so they don't depend on a lucide version */
const socials = [
  {
    name: "Facebook",
    href: "#",
    path: "M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V9c0-.6.4-1 1-1z",
  },
  {
    name: "Pinterest",
    href: "#",
    path: "M12.2 2C6.7 2 4 5.9 4 9.2c0 2 .8 3.8 2.4 4.4.3.1.5 0 .6-.3l.2-1c.1-.3 0-.4-.2-.7-.5-.6-.8-1.3-.8-2.4 0-3.1 2.3-5.8 6-5.8 3.3 0 5.1 2 5.1 4.7 0 3.5-1.6 6.5-3.9 6.5-1.3 0-2.2-1-1.9-2.3.4-1.5 1.1-3.2 1.1-4.3 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.5 6.5c-.4 1.9-.1 4.3 0 4.5 0 .1.2.2.3.1.1-.2 1.7-2.1 2.2-4l.9-3.4c.4.8 1.7 1.6 3.1 1.6 4 0 6.8-3.7 6.8-8.6C20.1 5.6 16.9 2 12.2 2z",
  },
  {
    name: "Twitter",
    href: "#",
    path: "M22 5.9c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.5 11.7 11.7 0 0 0 8.3 20.3c7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z",
  },
  {
    name: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z",
  },
];

const linkClass =
  "text-sm text-white/60 font-light transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline";

function ColumnHeading({ children }) {
  return <h3 className="mb-5 font-heading text-lg text-white tracking-[1px]">{children}</h3>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white">
      {/* Subscribe strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease }}
        className="mx-auto flex max-w-6xl flex-col gap-6 border-b border-white/10 px-6 py-12 md:flex-row md:items-center md:justify-between lg:py-14"
      >
        <div>
          <Heading className="font-heading text-3xl leading-tight md:text-4xl">
            <span className="medium">Subscribe</span>
            <span className="regular"> to our list</span>
          </Heading>
          <p className="mt-3 text-sm font-light text-white/60">
            Don't wait, make a smart &amp; logical quote here. It's pretty easy.
          </p>
        </div>
        <PrimaryButton openModal>Get Quote Now <ArrowRight/></PrimaryButton>
        
      </motion.div>

      {/* Columns */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.9fr_1.3fr] lg:gap-12"
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <Link
            to="/"
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07] font-heading text-[30px]"
          >
            LOGO HERE
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed font-light text-[#fff]/60">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since 1966.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.nav variants={fadeUp} aria-label="Quick links">
          <ColumnHeading>Quick Links</ColumnHeading>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Useful links */}
        <motion.nav variants={fadeUp} aria-label="Useful links">
          <ColumnHeading>Useful Links</ColumnHeading>
          <ul className="space-y-3">
            {usefulLinks.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                ) : (
                  <Link to={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* About */}
        <motion.div variants={fadeUp}>
          <ColumnHeading>About Us</ColumnHeading>
          <p className="text-sm leading-relaxed text-neutral-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since 1966.
          </p>
        </motion.div>
      </motion.div>

      {/* Disclaimer (kept from your old footer; delete this block if you don't need it) */}
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <p className="text-xs leading-relaxed text-neutral-500">
          Disclaimer: We operate as an independent entity that specializes in book writing and
          publishing services. We have no affiliation, endorsement, or connection with the brand Amazon
          or any of its affiliated companies or subsidiaries.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1c1c1c]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-6 sm:flex-row sm:justify-between"
        >
          <p className="text-sm text-neutral-300">Copyright © {year}. All Rights Reserved.</p>

          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-all duration-300 hover:-translate-y-0.5 hover:[box-shadow:var(--glow)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  style={{ background: GRADIENT, "--glow": GLOW }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d={s.path} fillRule="evenodd" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}