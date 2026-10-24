import { ChevronRight, ArrowUpRight, Phone, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import LightRays from "../ui/LightRays";
import Heading from "../ui/Heading";
import ModalForm from "../../forms/ModalForm";
import HeroForm from "../../forms/HeroForm";

const GRADIENT = "linear-gradient(135deg, #B0197E 0%, #310D89 100%)";
const GRADIENT_BG = "bg-[linear-gradient(135deg,#B0197E_0%,#310D89_100%)]";
const PHONE = "(727) 618-7790";

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
    <svg width="18" height="17" viewBox="0 0 19 18" fill="none" aria-hidden="true">
      <path
        d="M18.7326 6.65886C18.6944 6.5441 18.5985 6.45658 18.4788 6.42776L12.7785 5.04847L9.67782 0.164725C9.61273 0.0621866 9.49823 0 9.375 0C9.25177 0 9.13727 0.0621866 9.07218 0.164725L5.97152 5.04847L0.271174 6.42776C0.151507 6.45658 0.0555585 6.5441 0.0173933 6.65886C-0.0205936 6.77363 0.00455266 6.89975 0.0839149 6.99198L3.86798 11.3896L3.44566 17.1256C3.43675 17.246 3.49221 17.3623 3.59172 17.4334C3.69195 17.5043 3.82196 17.5197 3.93575 17.4743L9.375 15.3084L14.8143 17.4743C14.8574 17.4916 14.9031 17.5 14.9485 17.5C15.0227 17.5 15.0962 17.4772 15.1583 17.4332C15.258 17.3623 15.3133 17.246 15.3043 17.1254L14.882 11.3894L18.6661 6.99181C18.7454 6.89975 18.7706 6.7738 18.7326 6.65886Z"
        fill="#FFB342"
      />
    </svg>
  );
}

function Rating({ score = "4.8/5.0", reviews = "2000+", className = "" }) {
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
      <span className="text-white/70">based on {reviews} Satsisfied Authors</span>
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
    <motion.nav variants={fadeUp} aria-label="Breadcrumb" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/80 backdrop-blur">
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
                <a href={item.href} className="transition-colors hover:text-[#B0197E]">
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

/* ------------------------------------------------------------------ */
/*  1. HOME — your original hero (theme colours, tidied)               */
/* ------------------------------------------------------------------ */
function HomeHero() {
  return (
    <div className="relative overflow-clip rounded-b-[30px] bg-black">
      <section id="home" className="relative z-10 flex items-center pt-20 sm:pt-24 lg:pt-40">
        <Rays />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center px-5 sm:px-6 lg:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative z-10 text-center"
          >
            <Heading 
              as="h1"
              title={<>Transforming Your Concepts into  <br/> <span className="font-medium md:text-[72px]">Literary Masterpieces.</span> </>}
              className="regular mt-5 text-[32px] leading-[1.1] text-white md:text-[48px]">
            </Heading>

            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-4xl text-center text-[16px] font-thin text-white">
              Bring your manuscript to life with industry-leading publishing solutions. At Author House Inc, we empower writers by turning ideas into professionally edited, beautifully designed, and globally distributed books. From initial draft refinement to full-scale promotion, we handle every detail so your story makes a lasting impact. 
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
            >
              <PrimaryButton openModal className="px-[32px] py-[16px]">Claim Your Free Quote</PrimaryButton>
              <SecondaryButton className="px-[20px] py-[8px]" href="tel:+17276187790">Speak With a Publishing Expert</SecondaryButton>
            </motion.div>

            <Rating className="mt-8 justify-center" />
          </motion.div>

          <div className="relative z-0">
            <img src="image/hero.png" alt="A collection of published books" className="-mt-25 h-auto w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  2. PAGE — About, Services, etc. Content left, form card right      */
/* ------------------------------------------------------------------ */
const DEFAULT_HIGHLIGHTS = [
  { value: "500+", label: "Books published" },
  { value: "4.8/5", label: "Author rating" },
  { value: "24h", label: "Response time" },
];

/*
  badge           → small pill above the title
  title           → main heading (white)
  titleHighlight  → optional words shown on a new line in the orange-red gradient
  description     → short paragraph
  breadcrumbs     → [{ label, href }]
  highlights      → three small stats under the text
*/
function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs = [],
  phone = PHONE,
  formTitle = "Get a Free Consultation",
  formDescription = "Share a few details and we'll get back to you within 24 hours.",
}) {
  return (
    <div className="relative overflow-clip rounded-b-[30px] bg-black">
      <Rays dotCount={40} />
      

      <section className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-14 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-16 lg:pb-28 lg:pt-40">
        {/* ---------- Content ---------- */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={viewport}>
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-3xl font-heading text-[2.5rem] light leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-6xl"
          >
            {title}
            {titleHighlight && (
              <span className="block bg-clip-text  text-transparent" style={{ backgroundImage: GRADIENT }}>
                {titleHighlight}
              </span>
            )}
          </motion.h1>

          {description && (
            <motion.p variants={fadeUp} className="mt-6 max-w-xl font-light text-base leading-7 text-white/70 md:text-lg">
              {description}
            </motion.p>
          )}

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryButton openModal className="px-[32px] py-[16px]">
              Start Your Story
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
            <SecondaryButton className="px-[20px] py-[8px]">
              {phone}
            </SecondaryButton>
          </motion.div>

          
        </motion.div>

        {/* ---------- Form card ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Gradient glow behind the card */}


          <div className="relative overflow-hidden rounded-3xl glass3   p-6 shadow-2xl sm:p-8">
            {/* Gradient top accent */}
           

            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl leading-tight text-[#fff]">{formTitle}</h2>
                <p className="mt-1.5 text-sm text-white mb-6">{formDescription}</p>
                <HeroForm
                  buttonText="Get Started Now"
                  onSuccess={() => onOpenChange?.(false)}
                />
              </div>
            </div>

            <div className="mt-6">
              
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3. LEGAL — Terms, Privacy. Simple dark header, content only        */
/* ------------------------------------------------------------------ */
function LegalHero({ badge, title, description, breadcrumbs = [], lastUpdated }) {
  return (
     <div className="relative overflow-clip rounded-b-[30px] bg-black">
      <Rays dotCount={40} />
      

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-32 sm:px-6 md:px-12 lg:px-16 lg:pb-20 lg:pt-40"
      >
        
        <div className="flex flex-col justify center items-center text-center">
          
        
       <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <motion.h1
          variants={fadeUp}
          className="mt-6 max-w-4xl text-balance font-heading text-[2.25rem] font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            {description}
          </motion.p>
        )}
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryButton openModal className="px-[32px] py-[16px]">
              Start Your Story
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </PrimaryButton>
          
          </motion.div>
          
        </div>
        

      </motion.section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */
function Hero({ variant = "home", ...props }) {
  if (variant === "page") return <PageHero {...props} />;
  if (variant === "legal") return <LegalHero {...props} />;
  return <HomeHero {...props} />;
}

export default Hero;