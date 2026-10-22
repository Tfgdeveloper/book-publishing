import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Feather, SpellCheck, Palette, Globe } from "lucide-react";
import { Link } from "react-router";
import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";

const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";

const SERVICES = [
  {
    title: "Ghostwriting & Book Writing",
    description:
      "Collaborate with elite ghostwriters who turn your vision, stories, and ideas into compelling, professionally crafted manuscripts.",
    icon: Feather,
    href: "/services/ghostwriting",
  },
  {
    title: "Book Editing & Proofreading",
    description:
      "Refine your manuscript with comprehensive line editing, copy editing, and proofreading to ensure error-free, publication-ready prose.",
    icon: SpellCheck,
    href: "/services/book-editing",
  },
  {
    title: "Cover Design & Illustration",
    description:
      "Captivate readers with eye-catching book covers, custom interior layouts, and vibrant illustrations tailored to your genre.",
    icon: Palette,
    href: "/services/book-cover-design",
  },
  {
    title: "Global Publishing & Distribution",
    description:
      "Publish across major worldwide platforms with print-on-demand setup, eBook formatting, ISBN assignment, and copyright registration.",
    icon: Globe,
    href: "/services/global-distribution",
  },
];

const POINTS = [
  "End-to-End Ghostwriting & Professional Editing",
  "Custom Book Cover Design & Creative Illustration",
  "Global Print & eBook Distribution Channels",
  "Targeted Amazon & Social Media Marketing Campaigns",
];

const ease = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
};

/* Gradient check mark used in the points list */
function CheckIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M17.6857 3.65833C16.2452 4.97253 14.8425 6.50155 13.4777 8.2454C12.2899 9.74915 11.2221 11.2908 10.2744 12.8704C9.41509 14.2857 8.78958 15.4988 8.39785 16.5097C8.38521 16.5476 8.35994 16.5824 8.32203 16.614C8.28412 16.6456 8.23989 16.6613 8.18935 16.6613C8.17671 16.674 8.16407 16.6803 8.15144 16.6803C8.06298 16.6803 7.9998 16.655 7.96189 16.6045L1.19501 9.72388C1.18238 9.71124 1.34665 9.54381 1.68784 9.22157C2.02903 8.89934 2.36389 8.60554 2.69244 8.34017C3.05891 8.0369 3.25477 7.89789 3.28004 7.92317L6.99519 10.8422C8.08194 9.56592 9.30136 8.30226 10.6535 7.05124C12.688 5.18104 14.7856 3.58883 16.9465 2.27463C16.9844 2.27463 17.1297 2.45154 17.3824 2.80536L17.7615 3.35505C17.7742 3.4056 17.7742 3.4593 17.7615 3.51617C17.7489 3.57303 17.7236 3.62042 17.6857 3.65833Z"
        fill="url(#servicesCheckGrad)"
      />
      <defs>
        <linearGradient id="servicesCheckGrad" x1="1.19434" y1="-0.697973" x2="22.7404" y2="1.54878" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E2770B" />
          <stop offset="0.376384" stopColor="#EF1A07" />
          <stop offset="1" stopColor="#EF1A07" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------------- Card ---------------- */
function ServiceCard({ service, active, onActivate }) {
  const Icon = service.icon;

  return (
    <motion.a
      href={service.href}
      variants={itemVariants}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="relative block overflow-hidden rounded-xl bg-white px-7 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] outline-none transition-shadow duration-500 focus-visible:ring-2 focus-visible:ring-[#EF1A07] focus-visible:ring-offset-2"
      style={{
        boxShadow: active ? "0 10px 25px rgba(239,26,7,0.3), 0 4px 12px rgba(226,119,11,0.25)" : undefined,
      }}
    >
      {/* Gradient that sweeps in from the top-left corner to the bottom-right */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: GRADIENT }}
        initial={false}
        animate={{ clipPath: active ? "circle(150% at 0% 0%)" : "circle(0% at 0% 0%)" }}
        transition={{ duration: 0.6, ease }}
      />

      {/* Corner icon, only on the active card */}
      <Play
        aria-hidden="true"
        className={`absolute right-6 top-6 z-10 h-5 w-5 rotate-[165deg] text-white transition-opacity duration-300 ${
          active ? "opacity-60 delay-200" : "opacity-0"
        }`}
        strokeWidth={2}
      />

      <div className="relative z-10">
        {/* Icon in a soft circle that turns white-on-glass when active */}
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-500 ${
            active ? "bg-white/20" : "bg-[#EF1A07]/10"
          }`}
        >
          <Icon
            aria-hidden="true"
            strokeWidth={1.75}
            className={`h-7 w-7 transition-colors duration-500 ${active ? "text-white" : "text-[#EF1A07]"}`}
          />
        </span>

        <h3
          className={`mt-6 font-heading text-[24px] leading-tight transition-colors duration-300 ${
            active ? "text-white" : "text-[#000]"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`mt-4 text-[16px] font-thin leading-6 transition-colors duration-300 ${
            active ? "text-white" : "text-[#555555]"
          }`}
        >
          {service.description}
        </p>

        <span
          className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 transition-colors duration-300 ${
            active ? "text-white" : "text-[#EF1A07]"
          }`}
        >
          Learn More
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
}

/* ---------------- Section ---------------- */
function Services() {
  // The first card starts highlighted; hovering another card moves the gradient to it
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCard = (service, index) => (
    <ServiceCard
      key={service.title}
      service={service}
      active={activeIndex === index}
      onActivate={() => setActiveIndex(index)}
    />
  );

  // Cards 1 & 3 in the left column, 2 & 4 in the offset right column
  const leftColumn = [0, 2].map((i) => renderCard(SERVICES[i], i));
  const rightColumn = [1, 3].map((i) => renderCard(SERVICES[i], i));

  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Container className="grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Left: heading, text, checklist, button */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:sticky lg:top-24"
        >
          <motion.h2 variants={itemVariants} className="regular font-heading text-4xl leading-tight text-[#000] md:text-5xl">
            Your Complete <span className="medium block">Publishing Solution</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-sm font-light leading-7 text-[#445658] md:text-base"
          >
            Turning a great idea into a bestselling book requires expert care at every step. At Author House Inc, we
            offer an all-inclusive suite of publishing solutions designed to help authors write, polish, design, and
            market their work seamlessly. Whether you are a first-time writer or an established author, our team
            provides personalized guidance to turn your literary vision into reality.
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-7 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-[#000] md:text-base">
                <CheckIcon />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-8">
            <Link to="/services">
              <PrimaryButton className="px-[32px] py-[16px]">View All Services</PrimaryButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: staggered 2 × 2 cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-8">{leftColumn}</div>
          <div className="flex flex-col gap-8 sm:mt-14">{rightColumn}</div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;