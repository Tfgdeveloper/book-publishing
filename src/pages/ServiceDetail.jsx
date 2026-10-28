import { Fragment, useEffect } from "react";
import { Navigate, useParams } from "react-router";

import Hero from "../components/Sharedsections/Hero";
import { ServicesMenu } from "../components/Sharedsections/ServicesMegaMenu";
import BookWriting from "../components/innerservices/Bookwriting";
import ProcessSteps from "../components/innerservices/Processsteps";
import SupportCTA from "../components/home/Supportcta";

import { servicePages } from "../data/servicePages";

const SITE_NAME = "Fabletale Publishings";
const PHONE = "(727) 618-7790";

/* "A Cover That *Gets Picked Up*" → bold italic on the starred words */
function formatTitle(text) {
  if (typeof text !== "string") return text;
  return text.split(/\*(.+?)\*/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="font-bold italic">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/* Dev-only checks: menu links without content, and pages missing sections */
if (import.meta.env.DEV) {
  const missing = ServicesMenu
    .flatMap((c) => c.links.map((l) => l.href.replace("/services/", "")))
    .filter((slug) => !servicePages[slug]);
  if (missing.length) console.warn("[ServiceDetail] No content in servicePages.js for:", missing);

  const incomplete = Object.entries(servicePages)
    .filter(([, p]) => !p.hero || !p.overview || !p.process)
    .map(([slug]) => slug);
  if (incomplete.length) console.warn("[ServiceDetail] Missing hero, overview or process for:", incomplete);
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const page = servicePages[slug];

  // Start at the top when moving from one service to another
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

  // Unknown service → back to the services page
  if (!page) return <Navigate to="/services" replace />;

  const { hero, overview, process } = page;

  return (
    // key={slug} replays the entrance animations when switching services
    <Fragment key={slug}>
      <Hero
        variant="page"
        badge={hero.badge}
        title={formatTitle(hero.title)}
        description={hero.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: page.name },
        ]}
        formTitle={hero.formTitle ?? "Schedule a Complimentary Strategy Session "}
        formDescription={
          hero.formDescription ??
          `Share your literary goals and let’s map out your complete  journey for ${page.name.toLowerCase()}.`
        }
      />

      <BookWriting data={overview} phone={PHONE} />

      <SupportCTA />

      <ProcessSteps data={process} />
    </Fragment>
  );
}