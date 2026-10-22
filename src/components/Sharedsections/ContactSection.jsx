import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, AlertCircle, Check } from "lucide-react";
import { useLeadForm } from "../../forms/hooks/useLeadForm";


const ease = [0.22, 1, 0.36, 1];
const GRADIENT_BG = "bg-[linear-gradient(135deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]";

const INTERESTS = [
  "Book Publishing Service",
  "Book Marketing Service",
  "Book Cover Design",
  "Other",
];

// Replace with your real details
const CONTACT_INFO = [
  { icon: Mail, label: "support@authorhouseinc.com", href: "mailto:support@authorhouseinc.com" },
  { icon: Phone, label: "(727) 618-7790", href: "tel:+17276187790" },
  { icon: MapPin, label: "1548 S Missouri Ave, Clearwater, FL 33756" },
];

/* ------------------------------------------------------------------ */
/*  Underlined input with label + error                                */
/* ------------------------------------------------------------------ */
function LineField({ label, error, as = "input", ...props }) {
  const Tag = as;
  const isTextarea = as === "textarea";

  const base = isTextarea
    ? "h-28 w-full resize-none rounded-lg border bg-white px-3.5 py-3"
    : "w-full border-b bg-transparent px-2 py-2.5";

  const color = error
    ? "border-[#EF1A07]"
    : "border-neutral-300 hover:border-neutral-400 focus:border-[#EF1A07]";

  return (
    <div>
      <label htmlFor={props.id} className="block text-xs text-neutral-400">
        {label}
      </label>
      <Tag
        className={`mt-1.5 text-sm text-[#1a1a1a] placeholder-neutral-400 outline-none transition-colors duration-300 ${base} ${color}`}
        {...props}
      />
      {error && (
        <p id={`${props.id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-[#EF1A07]">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function ContactSection() {
  const reduce = useReducedMotion();
  const [interests, setInterests] = useState([INTERESTS[0]]);

  const toggleInterest = (item) =>
    setInterests((list) =>
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    );

  const { register, errors, loading, serverError, handleSubmit, formRef, honeypotRef } =
    useLeadForm({
      messagePrefix: interests.length ? `Interested in: ${interests.join(", ")}` : "",
    });

  return (
    <section id="contact" className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* ---------- Left: heading + contact info ---------- */}
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="font-heading text-4xl leading-[1.2] text-[#1a1a1a] md:text-5xl">
            <span className="medium block">Let’s Build </span>
            <span className="regular block">Something Great </span>
            <span className="regular block">Together</span>
          </h2>

          <ul className="mt-12 space-y-8">
            {CONTACT_INFO.map(({ icon: Icon, label, href }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-6"
              >
                <Icon className="h-5 w-5 shrink-0 text-[#EF1A07]" aria-hidden="true" />
                {href ? (
                  <a
                    href={href}
                    className="text-[15px] font-light text-neutral-700 transition-colors duration-300 hover:text-[#EF1A07] focus:outline-none focus-visible:underline"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-[15px] font-light text-neutral-700">{label}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ---------- Right: form ---------- */}
        <motion.div
          initial={{ opacity: 0, x: reduce ? 0 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="rounded-2xl bg-[#FAFAFA] p-6 sm:p-8"
        >
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Honeypot: hidden from users, catches bots */}
            <input
              ref={honeypotRef}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Interests */}
            <fieldset>
              <legend className="text-sm text-[#EF1A07]">I'm interested in:</legend>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {INTERESTS.map((item) => {
                  const selected = interests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleInterest(item)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07] focus-visible:ring-offset-2 ${
                        selected
                          ? `${GRADIENT_BG} text-white shadow-[0_6px_16px_rgba(239,26,7,0.25)]`
                          : "border border-neutral-400 text-neutral-600 hover:border-[#EF1A07] hover:text-[#EF1A07]"
                      }`}
                    >
                      {selected && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                      {item}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <LineField
              label="Your name"
              placeholder="John Smith"
              autoComplete="name"
              error={errors.name}
              {...register("name")}
            />

            <LineField
              label="Your email"
              type="email"
              placeholder="email@gmail.com"
              autoComplete="email"
              error={errors.email}
              {...register("email")}
            />

            <LineField
              label="Your phone"
              type="tel"
              placeholder="+1 555 123 4567"
              autoComplete="tel"
              error={errors.phone_number}
              {...register("phone_number")}
            />

            <LineField
              as="textarea"
              label="Your message"
              placeholder="Tell us a little about your book..."
              error={errors.message}
              {...register("message")}
            />

            {serverError && (
              <p
                role="alert"
                className="flex items-center gap-2 rounded-lg bg-[#EF1A07]/10 px-4 py-3 text-sm text-[#EF1A07]"
              >
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                {serverError}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-white shadow-[0_10px_25px_rgba(239,26,7,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(239,26,7,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF1A07] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${GRADIENT_BG}`}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}