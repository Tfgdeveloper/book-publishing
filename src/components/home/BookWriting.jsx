import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import Heading from "../ui/Heading";

const GRADIENT = "linear-gradient(135deg, #B0197E 0%, #310D89 100%)";
const PHONE = "(000) 123 4567";

const SERVICES = [
  "Author Website Development",
  "Professional Book Publishing",
  "End-to-End Ghostwriting ",
  "Meticulous Copy Editing ",
  "Custom Book Cover Design ",
  "Cinematic Video Trailers  ",
  "Audiobook Production",
  "Interior Formatting",
  "Proofreading",
];

const ease = [0.22, 1, 0.36, 1];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function BookWriting({
  image = "/image/book-writing.png", // transparent PNG of the two books
  services = SERVICES,
  phone = PHONE,
  quoteHref = "#contact",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="overflow-hidden bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Image: slides in, then floats gently */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.img
            src={image}
            alt="Book design examples"
            className="h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.18)]"
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={item} className="font-heading text-3xl leading-tight text-[#000] md:text-4xl lg:text-5xl">
            <span className="medium">Book Writing, </span>
            <span className="regular"> Where Your Story Comes to Life</span>
            
          </motion.h2>

          <motion.p variants={item} className="mt-5 text-sm leading-7 text-[#555] md:text-base">
            Every author has a powerful message, creative world, or unique perspective waiting to be shared. At Author House Inc, we collaborate closely with you at every stage of the writing and publishing process. From shaping raw ideas into refined chapters to designing print-ready layouts, our experts turn your manuscript into a compelling book that captivates readers. 
          </motion.p>

          <motion.ul variants={container} className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {services.map((s) => (
              <motion.li key={s} variants={item} className="flex items-center gap-3 text-sm text-[#000]">
                {/* small red play-style bullet */}
                <span
                  aria-hidden="true"
                  className="h-0 w-0 shrink-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-[#B0197E]"
                />
                {s}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-7">
            <PrimaryButton openModal className="px-[32px] py-[16px]">Get A Quote</PrimaryButton>
              <SecondaryButton variant="gradientIcon" href="tel:+17276187790">(727) 618-7790</SecondaryButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default BookWriting;