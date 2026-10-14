import { useReducedMotion } from "framer-motion";

/* Use the logo files from your design (PNG or SVG, transparent background) */
const LOGOS = [
  { src: "/image/logos/barnes.png", alt: "Barnes & Noble" },
  { src: "/image/logos/kobo.png", alt: "Kobo" },
  { src: "/image/logos/amazon.png", alt: "Amazon Kindle" },
  { src: "/image/logos/bookbaby.png", alt: "BookBaby" },
  { src: "/image/logos/apple.png", alt: "Apple Books" },
];

/*
  speed → seconds for one full loop. Lower = faster.
  Set marquee={false} for a still, evenly spaced row like the design.
*/
function PlatformLogos({ logos = LOGOS, marquee = true, speed = 50 }) {
  const reduceMotion = useReducedMotion();
  const moving = marquee && !reduceMotion;

  const Row = ({ hidden = false }) => (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center ${moving ? "gap-16 pr-16 md:gap-24 md:pr-24" : "w-full flex-wrap justify-center gap-10 md:justify-between"}`}
    >
      {logos.map((logo) => (
        <li key={logo.alt}>
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            className="h-[43px] w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 "
            draggable={false}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Where your book gets published" className="bg-[#F6F4F9] py-8 md:py-10">
      <style>{`
        @keyframes platform-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {moving ? (
        <div
          className="group relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Two copies side by side; moving by half makes a seamless loop. Pauses on hover. */}
          <div
            className="flex w-max group-hover:[animation-play-state:paused]"
            style={{ animation: `platform-marquee ${speed}s linear infinite` }}
          >
            {/* Repeat the list so short lists still fill wide screens */}
            <div className="flex">
              <Row />
              <Row hidden />
            </div>
            <div className="flex">
              <Row hidden />
              <Row hidden />
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl px-6">
          <Row />
        </div>
      )}
    </section>
  );
}

export default PlatformLogos;