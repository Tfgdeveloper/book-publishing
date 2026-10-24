import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router";
import PrimaryButton from "../ui/PrimaryButton";
import Heading from "../ui/Heading";

const GRADIENT = "linear-gradient(135deg, #B0197E 0%, #310D89 100%)";
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
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/contact" },
];

// `external: true` uses a normal <a>, needed for #hash links so the browser scrolls
// Update labels/routes to match your actual service pages
const services = [
  { label: "Ghostwriting", href: "/services/ghostwriting" },
  { label: "Book Editing", href: "/services/book-editing" },
  { label: "Book Publishing", href: "/services/book-publishing" },
  { label: "Cover Design", href: "/services/cover-design" },
  { label: "Book Marketing", href: "/services/book-marketing" },
  { label: "Audiobook Production", href: "/services/audiobook" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

// Replace with your real details
const contactInfo = [
  {
    icon: MapPin,
    label: "1548 S Missouri Ave, Clearwater, FL 33756",
  },
  {
    icon: Phone,
    label: "(727) 618-7790",
    href: "tel:+17276187790",
  },
  {
    icon: Mail,
    label: "support@authorhouseinc.com",
    href: "mailto:support@authorhouseinc.com",
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
            <span className="medium">Ready to Publish </span>
            <span className="regular"> Your Book?</span>
          </Heading>
          <p className="mt-3 max-w-xl text-sm font-light text-white/60">
            Turn your publishing dreams into reality with expert book publishing services, professional guidance, and everything you need to bring your story to life.
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
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0197E] font-heading text-[30px]"
          >
            LOGO HERE
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed font-light text-[#fff]/60">
            Author House Inc is a premier book publishing agency dedicated to empowering authors worldwide. From professional editing and custom cover design to global distribution and targeted marketing, we provide end-to-end solutions to bring your story to life. 
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

       {/* Services */}
        <motion.nav variants={fadeUp} aria-label="Services" >
          <ColumnHeading>Services</ColumnHeading>
          <ul className="space-y-4">
            {services.map((s) => (
              <li key={s.label}>
                <Link to={s.href} className={linkClass}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* About */}
        {/* Contact */}
          <motion.div variants={fadeUp}>
            <ColumnHeading>Get In Touch</ColumnHeading>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#B0197E] to-[#310D89]">
                    <Icon className="h-4 w-4 text-white" />
                  </span>
                  {href ? (
                    <a href={href} className={`${linkClass} pt-1.5`}>
                      {label}
                    </a>
                  ) : (
                    <span className="pt-1.5 text-sm font-light leading-relaxed text-white/60">{label}</span>
                  )}
                </li>
              ))}
            </ul>
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

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm text-neutral-300 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}