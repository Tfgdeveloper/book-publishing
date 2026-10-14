import { motion } from "framer-motion";
import { ChevronRight, Star, StarCheck, StarIcon, StarsIcon } from "lucide-react";

import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import ContactForm from "./ContactForm";
import LightRays from "../ui/LightRays";
import Particles from "../ui/Particles";

/* ------------------------------------------------------------------ */
/*  Shared animation settings — every entrance runs once, in view      */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const layeredShadow = [
    "inset 0 -2.39px 0 0 #DEEEFB",
    "inset 0 0.8px 0 0 #FFFFFF",
    "0 2.2px 1.76px 0 rgba(0, 88, 108, 0.0197)",
    "0 5.29px 4.23px 0 rgba(0, 88, 108, 0.0283)",
    "0 9.96px 7.96px 0 rgba(0, 88, 108, 0.0350)",
    "0 17.78px 14.21px 0 rgba(0, 88, 108, 0.0417)",
    "0 33.22px 26.57px 0 rgba(0, 88, 108, 0.0503)",
    "0 79.51px 63.61px 0 rgba(0, 88, 108, 0.05)",
    "0 2.39px 2.39px 0 rgba(0, 0, 0, 0.04)",
].join(", ");

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */
function Badge({ children }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-block rounded-[10px] bg-[#F29013] px-3 py-2 font-['Montaga'] text-[10px] font-semibold tracking-[0.12em] text-black sm:text-[12px] sm:tracking-[0.2em]"
    >
      {children}
    </motion.span>
  );
}

function Breadcrumbs({ items = [], center = false }) {
  if (!items.length) return null;
  return (
    <motion.nav
      variants={fadeUp}
      aria-label="Breadcrumb"
      className={`mb-5 flex ${center ? "justify-center" : "justify-center lg:justify-start"}`}
    >
      <ol className="flex flex-wrap items-center gap-1 font-body text-sm text-neutral-600">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} className="font-semibold text-black">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="transition-colors hover:text-[#00415A]">
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
/*  1. HOME — your original hero                                       */
/* ------------------------------------------------------------------ */
function HomeHero() {
  return (
    <div className="relative overflow-clip bg-black rounded-b-[30px]">
      <section id="home" className="relative  z-10 flex items-center pt-20 sm:pt-24 lg:pt-40">
        <div style={{ width: '100%', height: '100%', position: 'absolute' , top: "0", zIndex: "0" }}>
          <LightRays
              raysOrigin="top-center"
              raysColor="#9aae39"
              raysSpeed={1}
              lightSpread={2}
              rayLength={2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={2}
              saturation={2}
              dotCount={60}
              dotSize={[1, 4]}
              dotColor={["#ffffff"]}
              dotOpacity={[0.1, 0.6]}
              dotSpeed={25}
              dotDirection="up"
              dotSpread={40}
              dotWobble={8}
              dotGlow={5}
          />
          <Particles
            particleColors={["#f4ff8a","#c6ff6b","#ffe28a"]}
            particleCount={260}
            particleSpread={10}
            speed={0.25}
            particleBaseSize={170}
            glow={1.6}
            twinkle={0.9}
            moveParticlesOnHover={false}
            hoverEffect="parallax"
            sizeRandomness={0.8}
            shape="circle"
            depthOfField={0}
            connections={false}
            connectionDistance={110}
            particleHoverFactor={1}
            hoverRadius={140}
            drift="up"
            driftSpeed={0.6}
            alphaParticles={false}
            disableRotation={false}
            cameraDistance={20}
            variation={0}
            opacity={1}
            clickBurst
            intro
            lightMode={false}
        />
          </div>
          
        <div className="mx-auto grid w-full max-w-[1600px] items-center  px-5 sm:px-6 lg:grid-cols-1 lg:px-16 z-50">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center z-50"
          >
            

            <motion.h1
              variants={fadeUp}
              className="mt-5 medium leading-[1.1] text-[32px] md:text-[64px] text-white "
            >
              <span className="regular text-[32px] md:text-[48px]">Turning Your Words Into</span><br/>
               Published Masterpieces.
            </motion.h1>
            <motion.p
            variants={fadeUp}
            className="mx-auto text-white font-thin text-[16px] text-center max-w-4xl mt-4"
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the make a type specimen book. 
            </motion.p>
            

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap items-center justify-center "
            >
              <PrimaryButton openModal className="px-[32px] py-[16px]">Start Your Story</PrimaryButton>
              <SecondaryButton>+123 - 234 - 1234</SecondaryButton>
            </motion.div>
            <motion.p
            variants={fadeUp}
            className=" mt-8 mx-auto text-white font-medium text-[16px] text-center max-w-4xl flex justify-center items-center gap-2"
            >
            4.8/5.0
            <span className="flex gap-1">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7326 6.65886C18.6944 6.5441 18.5985 6.45658 18.4788 6.42776L12.7785 5.04847L9.67782 0.164725C9.61273 0.0621866 9.49823 0 9.375 0C9.25177 0 9.13727 0.0621866 9.07218 0.164725L5.97152 5.04847L0.271174 6.42776C0.151507 6.45658 0.0555585 6.5441 0.0173933 6.65886C-0.0205936 6.77363 0.00455266 6.89975 0.0839149 6.99198L3.86798 11.3896L3.44566 17.1256C3.43675 17.246 3.49221 17.3623 3.59172 17.4334C3.69195 17.5043 3.82196 17.5197 3.93575 17.4743L9.375 15.3084L14.8143 17.4743C14.8574 17.4916 14.9031 17.5 14.9485 17.5C15.0227 17.5 15.0962 17.4772 15.1583 17.4332C15.258 17.3623 15.3133 17.246 15.3043 17.1254L14.882 11.3894L18.6661 6.99181C18.7454 6.89975 18.7706 6.7738 18.7326 6.65886Z" fill="#FFB342"/>
              </svg>
               <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7326 6.65886C18.6944 6.5441 18.5985 6.45658 18.4788 6.42776L12.7785 5.04847L9.67782 0.164725C9.61273 0.0621866 9.49823 0 9.375 0C9.25177 0 9.13727 0.0621866 9.07218 0.164725L5.97152 5.04847L0.271174 6.42776C0.151507 6.45658 0.0555585 6.5441 0.0173933 6.65886C-0.0205936 6.77363 0.00455266 6.89975 0.0839149 6.99198L3.86798 11.3896L3.44566 17.1256C3.43675 17.246 3.49221 17.3623 3.59172 17.4334C3.69195 17.5043 3.82196 17.5197 3.93575 17.4743L9.375 15.3084L14.8143 17.4743C14.8574 17.4916 14.9031 17.5 14.9485 17.5C15.0227 17.5 15.0962 17.4772 15.1583 17.4332C15.258 17.3623 15.3133 17.246 15.3043 17.1254L14.882 11.3894L18.6661 6.99181C18.7454 6.89975 18.7706 6.7738 18.7326 6.65886Z" fill="#FFB342"/>
              </svg>
               <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7326 6.65886C18.6944 6.5441 18.5985 6.45658 18.4788 6.42776L12.7785 5.04847L9.67782 0.164725C9.61273 0.0621866 9.49823 0 9.375 0C9.25177 0 9.13727 0.0621866 9.07218 0.164725L5.97152 5.04847L0.271174 6.42776C0.151507 6.45658 0.0555585 6.5441 0.0173933 6.65886C-0.0205936 6.77363 0.00455266 6.89975 0.0839149 6.99198L3.86798 11.3896L3.44566 17.1256C3.43675 17.246 3.49221 17.3623 3.59172 17.4334C3.69195 17.5043 3.82196 17.5197 3.93575 17.4743L9.375 15.3084L14.8143 17.4743C14.8574 17.4916 14.9031 17.5 14.9485 17.5C15.0227 17.5 15.0962 17.4772 15.1583 17.4332C15.258 17.3623 15.3133 17.246 15.3043 17.1254L14.882 11.3894L18.6661 6.99181C18.7454 6.89975 18.7706 6.7738 18.7326 6.65886Z" fill="#FFB342"/>
              </svg>
               <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7326 6.65886C18.6944 6.5441 18.5985 6.45658 18.4788 6.42776L12.7785 5.04847L9.67782 0.164725C9.61273 0.0621866 9.49823 0 9.375 0C9.25177 0 9.13727 0.0621866 9.07218 0.164725L5.97152 5.04847L0.271174 6.42776C0.151507 6.45658 0.0555585 6.5441 0.0173933 6.65886C-0.0205936 6.77363 0.00455266 6.89975 0.0839149 6.99198L3.86798 11.3896L3.44566 17.1256C3.43675 17.246 3.49221 17.3623 3.59172 17.4334C3.69195 17.5043 3.82196 17.5197 3.93575 17.4743L9.375 15.3084L14.8143 17.4743C14.8574 17.4916 14.9031 17.5 14.9485 17.5C15.0227 17.5 15.0962 17.4772 15.1583 17.4332C15.258 17.3623 15.3133 17.246 15.3043 17.1254L14.882 11.3894L18.6661 6.99181C18.7454 6.89975 18.7706 6.7738 18.7326 6.65886Z" fill="#FFB342"/>
              </svg>
               <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7326 6.65886C18.6944 6.5441 18.5985 6.45658 18.4788 6.42776L12.7785 5.04847L9.67782 0.164725C9.61273 0.0621866 9.49823 0 9.375 0C9.25177 0 9.13727 0.0621866 9.07218 0.164725L5.97152 5.04847L0.271174 6.42776C0.151507 6.45658 0.0555585 6.5441 0.0173933 6.65886C-0.0205936 6.77363 0.00455266 6.89975 0.0839149 6.99198L3.86798 11.3896L3.44566 17.1256C3.43675 17.246 3.49221 17.3623 3.59172 17.4334C3.69195 17.5043 3.82196 17.5197 3.93575 17.4743L9.375 15.3084L14.8143 17.4743C14.8574 17.4916 14.9031 17.5 14.9485 17.5C15.0227 17.5 15.0962 17.4772 15.1583 17.4332C15.258 17.3623 15.3133 17.246 15.3043 17.1254L14.882 11.3894L18.6661 6.99181C18.7454 6.89975 18.7706 6.7738 18.7326 6.65886Z" fill="#FFB342"/>
              </svg>
            </span> based on 2000 reviews
            </motion.p>
            
          </motion.div>
          <div className="realtive z-0">
            <motion.img variants={fadeUp} src="image/hero.png" alt="Illustrated children's books" className=" h-auto w-full -mt-25 z-0" />
          </div>
        </div>
      </section>

      {/* Tweak -mt-[...] if the wave overlap looks off */}
      
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  2. PAGE — About, Services, etc. Content left, form right           */
/* ------------------------------------------------------------------ */
function PageHero({
  badge,
  title,
  description,
  breadcrumbs,
  formTitle = "Get a Free Consultation",
  formDescription = "Share a few details and we'll get back to you.",
}) {
  return (
    <div className="relative overflow-x-clip">
    <section className="relative z-10 flex items-center pt-10 sm:pt-14 lg:pt-6">
      <img
        src="/images/dotted.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 w-[50px] sm:w-[82px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16">
        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative text-center lg:text-left"
        >
          <Breadcrumbs items={breadcrumbs} />
          {badge && <Badge>{badge}</Badge>}

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-heading text-[2.25rem] font-medium leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl font-body text-base leading-7 text-neutral-700 md:text-lg lg:mx-0"
            >
              {description}
            </motion.p>
          )}
          <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              <PrimaryButton  openModal className="px-[32px] py-[16px]">Get Started</PrimaryButton>
              <SecondaryButton>Explore Services</SecondaryButton>
            </motion.div>

          <motion.div variants={fadeUp} className="mt-4 flex justify-center lg:justify-start">
            <img
              src="/images/reviewslogo.png"
              alt="Rated by our clients on review platforms"
              className="h-auto max-w-full"
            />
          </motion.div>
          <img
              src="/images/flower.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 w-[40px] sm:w-[62px] lg:right-20"
            />
           
        </motion.div>

        {/* Form card — same storybook style as the modal */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[28px] border-[0.80px] border-[#000]/10 bg-[#F3F3FE99] " style={{ boxShadow: layeredShadow }}>
            <div className="px-6 py-8 sm:px-8 sm:py-8">
              <span className="relative font-body text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-[1.75rem]">
                {formTitle}
              </span>
              <p className="relative mt-1 font-body text-sm text-[#1a1a1a]/80 mb-6">{formDescription}</p>
              <ContactForm
              showLabels
              showConsent
              termsUrl="/terms-and-conditions"
              privacyUrl="/privacy-policy"
              formClassName="rounded-2xl [&_textarea]:h-[113px] [&_textarea]:resize-none [&_textarea]:rounded-3xl [&_textarea]:border-[0.8px] [&_textarea]:border-[#F29013] [&_textarea]:bg-white [&_textarea]:shadow-[inset_0_-2.39px_0_0_#E4EA23,inset_0_0.8px_0_0_#FFFFFF,0_2.2px_1.76px_0_#F29013,0_2.2px_1.76px_0_rgba(26,0,108,0.0197)] [&_textarea]:outline-none [&_textarea]:ring-0 [&_textarea:focus]:outline-none [&_textarea:focus]:ring-0 [&_textarea:focus]:border-[#F29013]"
              inputClassName="[&_input]:h-[45px] [&_input]:rounded-full [&_input]:border-[0.8px] [&_input]:border-[#F29013] [&_input]:bg-white [&_input]:shadow-[inset_0_-2.39px_0_0_#E4EA23,inset_0_0.8px_0_0_#FFFFFF,0_2.2px_1.76px_0_#F29013,0_2.2px_1.76px_0_rgba(26,0,108,0.0197)] [&_input]:outline-none [&_input]:ring-0 [&_input:focus]:outline-none [&_input:focus]:ring-0 [&_input:focus]:border-[#F29013]"
              buttonClassName="mt-2 w-full bg-[#F29013] h-14"
/>
            </div>
          </div>
           <img
              src="/images/ele1.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-18 top-6 w-[40px] sm:top-10 sm:w-[62px]"
            />
        </motion.div>
      </div>
    </section>
    <img
        src="/images/herobg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mt-[12%] block w-full lg:-mt-[28%]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3. LEGAL — Terms, Privacy. Centered content only                   */
/* ------------------------------------------------------------------ */
function LegalHero({ badge, title, description, breadcrumbs, lastUpdated }) {
  return (
    <>
     <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-[#FAEDDD] pb-[16%] pt-12 sm:min-h-[calc(100svh-5rem)] sm:pt-16 lg:pb-[18%]">
      <img
        src="images/dotted.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute left-0 top-0 -z-10 w-[50px] sm:w-[82px]"
      />
      <img
        src="images/dotted.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute right-0 top-1/3 -z-10 hidden w-[82px] rotate-180 sm:block"
      />
 
      {/* Wave sits inside the section, behind the text, no negative margins */}
      <img
        src="images/herobg.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 block w-full select-none"
      />
 
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto w-full max-w-[1600px] px-5 text-left sm:px-6 md:px-12 lg:px-16"
      >
        <Breadcrumbs items={breadcrumbs} align="start" />
        {badge && <Badge>{badge}</Badge>}
 
        <motion.h1
          variants={fadeUp}
          className="mt-5 max-w-4xl text-balance font-heading text-[2.25rem] font-medium leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
 
        {description && (
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl font-body text-base leading-7 text-neutral-700 md:text-lg"
          >
            {description}
          </motion.p>
        )}
 
        {lastUpdated && (
          <motion.p
            variants={fadeUp}
            className="mt-6 inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 font-body text-xs font-medium text-neutral-600 sm:text-sm"
          >
            Last updated: {lastUpdated}
          </motion.p>
        )}
      </motion.div>
    </section>
    </>
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