import { Fragment, useEffect } from "react";
import { Navigate } from "react-router";
import { motion } from "framer-motion";

import Hero from "../components/Sharedsections/Hero";
import Container from "../components/ui/Container";
import { legalPages, CONTACT, } from "../data/Legalpages";

/* ==================================================================
   One component for all legal pages. Add the routes like this:

   <Route path="/privacy-policy"       element={<LegalPage slug="privacy-policy" />} />
   <Route path="/terms-and-conditions" element={<LegalPage slug="terms-and-conditions" />} />
   <Route path="/refund-policy"        element={<LegalPage slug="refund-policy" />} />
   ================================================================== */

const SITE_NAME = "Author House Inc.";
const ease = [0.22, 1, 0.36, 1];

/* "Your *Privacy* Matters" → medium weight on the starred words */
function formatTitle(text) {
  if (typeof text !== "string") return text;
  return text.split(/\*(.+?)\*/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="font-medium">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/* Turns plain email addresses in policy text into mailto links */
function linkifyEmail(text) {
  const parts = String(text).split(/([\w.+-]+@[\w-]+\.[\w.]+)/g);
  return parts.map((part, i) =>
    i % 2 ? (
      <a key={i} href={`mailto:${part}`} className="text-[#B0197E] underline-offset-2 hover:underline">
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function toTelHref(phone) {
  const digits = String(phone).replace(/\D/g, "");
  return `tel:${digits.length === 10 ? `+1${digits}` : `+${digits}`}`;
}

/* Renders one content block from the data file */
function Block({ block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-4 text-sm leading-7 text-[#555] md:text-base">
          {block.lead && <strong className="font-semibold text-[#000]">{block.lead} </strong>}
          {linkifyEmail(block.text)}
        </p>
      );

    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-[#555] md:text-base">
              {/* small red play-style bullet, same as the service pages */}
              <span
                aria-hidden="true"
                className="mt-[10px] h-0 w-0 shrink-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-[#B0197E] md:mt-[11px]"
              />
              <span>{linkifyEmail(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-black/10">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm md:text-base">
            <thead className="bg-[#F5F5F5]">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-5 py-3.5 font-semibold text-[#000]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-black/10">
                  {row.map((cell, c) => (
                    <td key={c} className={`px-5 py-3.5 leading-6 ${c === 0 ? "text-[#000]" : "text-[#555]"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "contact":
      return (
        <address className="mt-4 rounded-2xl bg-[#F5F5F5] p-6 text-sm not-italic leading-7 text-[#555] md:text-base">
          <p className="font-semibold text-[#000]">{CONTACT.company}</p>
          <p>{CONTACT.address}</p>
          <p>
            Phone:{" "}
            <a href={toTelHref(CONTACT.phone)} className="text-[#B0197E] underline-offset-2 hover:underline">
              {CONTACT.phone}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-[#B0197E] underline-offset-2 hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </address>
      );

    default:
      return null;
  }
}

export default function LegalPage({ slug }) {
  const page = legalPages[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Page title and description for search engines and browser tabs
  useEffect(() => {
    if (!page) return;
    document.title = `${page.seo?.title ?? page.name} | ${SITE_NAME}`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = page.seo?.description ?? page.hero.description;
  }, [page]);

  if (!page) return <Navigate to="/" replace />;

  const { hero, intro = [], sections } = page;

  return (
    <Fragment key={slug}>
      <Hero
        variant="legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: page.name }]}
        badge={hero.badge}
        title={formatTitle(hero.title)}
        description={hero.description}
        formTitle="Send us a message"
        formDescription={`Have a question about our ${page.name.toLowerCase()}? We’re happy to help.`}
      />

      <section className="bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Table of contents: sticky on desktop */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-heading text-lg text-[#000]">On this page</p>
            <nav aria-label={`${page.name} sections`}>
              <ol className="mt-4 space-y-2 border-l border-black/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm text-[#555] transition-colors hover:border-[#B0197E] hover:text-[#B0197E] focus-visible:border-[#B0197E] focus-visible:text-[#B0197E] focus-visible:outline-none"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Policy content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl"
          >
            

            {intro.map((p, i) => (
              <p key={i} className="mt-4 text-sm leading-7 text-[#555] md:text-base">
                {linkifyEmail(p)}
              </p>
            ))}

            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 pt-12">
                <h2 className="font-heading text-2xl text-[#000] md:text-3xl">
                  <span className="text-[#B0197E]">{i + 1}.</span> {s.title}
                </h2>
                {s.blocks.map((block, b) => (
                  <Block key={b} block={block} />
                ))}
              </section>
            ))}
          </motion.article>
        </Container>
      </section>
    </Fragment>
  );
}