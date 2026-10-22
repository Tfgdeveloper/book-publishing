import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import RichTitle from "../ui/Richtitle";

/* ==================================================================
   Expected data shape (add this to a service in data.js later):

   overview: {
     title: "*Book Writing,* Where Your Story Comes to Life",
     description: "One paragraph, or an array of paragraphs.",
     points: ["Fiction and nonfiction", "Written in your voice", ...],
     image: "/images/services/book-writing.png",
     imageAlt: "Book design examples",
     ctaLabel: "Start Your Story",
   }

   Usage: <BookWriting data={service.overview} />
   Anything missing falls back to DEFAULT_DATA.

   Tip: the existing `about` block already uses title, description
   (array), points and image, so <BookWriting data={service.about} />
   works today if you want to try it.
   ================================================================== */

const DEFAULT_PHONE = "(727) 618-7790";

const DEFAULT_DATA = {
  title: "*Book Writing,* Where your Story comes to Life",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  points: [
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
  ],
  image: "/image/book-writing.png",
  imageAlt: "Book design examples",
  ctaLabel: "Start Your Story",
};

const ease = [0.22, 1, 0.36, 1];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/* "(727) 618-7790" → "tel:+17276187790" */
function toTelHref(phone) {
  const digits = String(phone).replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return `tel:${digits}`;
  return `tel:${digits.length === 10 ? `+1${digits}` : digits}`;
}

function BookWriting({ data, phone = DEFAULT_PHONE, id = "about" }) {
  const reduceMotion = useReducedMotion();

  const title = data?.title ?? DEFAULT_DATA.title;
  const image = data?.image ?? DEFAULT_DATA.image;
  const imageAlt = data?.imageAlt ?? DEFAULT_DATA.imageAlt;
  const ctaLabel = data?.ctaLabel ?? DEFAULT_DATA.ctaLabel;
  const points = data?.points?.length ? data.points : DEFAULT_DATA.points;

  const rawDescription = data?.description ?? DEFAULT_DATA.description;
  const paragraphs = Array.isArray(rawDescription) ? rawDescription : [rawDescription];

  return (
    <section id={id} className="overflow-hidden bg-white py-20 lg:py-28">
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
            alt={imageAlt}
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
          <motion.h2
            variants={item}
            className="font-heading text-3xl leading-tight text-[#000] md:text-4xl lg:text-5xl"
          >
            <RichTitle text={title} />
          </motion.h2>

          {paragraphs.filter(Boolean).map((p, i) => (
            <motion.p
              key={i}
              variants={item}
              className={`${i === 0 ? "mt-5" : "mt-3"} text-sm leading-7 text-[#555] md:text-base`}
            >
              {p}
            </motion.p>
          ))}

          {points.length > 0 && (
            <motion.ul variants={container} className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {points.map((point, i) => (
                <motion.li
                  key={`${point}-${i}`}
                  variants={item}
                  className="flex items-center gap-3 text-sm text-[#000]"
                >
                  {/* small red play-style bullet */}
                  <span
                    aria-hidden="true"
                    className="h-0 w-0 shrink-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-[#EF1A07]"
                  />
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          )}

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-7">
            <PrimaryButton openModal className="px-[32px] py-[16px]">
              {ctaLabel}
            </PrimaryButton>
            {phone && (
              <SecondaryButton variant="gradientIcon" href={toTelHref(phone)}>
                {phone}
              </SecondaryButton>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default BookWriting;