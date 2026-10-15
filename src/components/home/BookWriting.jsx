import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import Heading from "../ui/Heading";

const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const PHONE = "(000) 123 4567";

const SERVICES = [
  "Author website",
  "Ebook writing",
  "Book publishing",
  "Proofreading services",
  "Book Publishing",
  "Book Editing",
  "Publish your book",
  "Book Formatting",
  "Self-Publish your book",
  "Video Trailer",
  "Self-publishing agency",
  "Audio Book",
  "Publish your own book",
  "Book cover designing",
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
            <span className="medium">Book Writing,</span>
            <span className="regular"> Where your Story comes to Life</span>
            
          </motion.h2>

          <motion.p variants={item} className="mt-5 text-sm leading-7 text-[#555] md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </motion.p>

          <motion.ul variants={container} className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {services.map((s) => (
              <motion.li key={s} variants={item} className="flex items-center gap-3 text-sm text-[#000]">
                {/* small red play-style bullet */}
                <span
                  aria-hidden="true"
                  className="h-0 w-0 shrink-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-[#EF1A07]"
                />
                {s}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-7">
            <PrimaryButton openModal className="px-[32px] py-[16px]">Start Your Story</PrimaryButton>
              <SecondaryButton variant="gradientIcon" href="#contact">+123 - 234 - 1234</SecondaryButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default BookWriting;