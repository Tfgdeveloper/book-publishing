import { useState } from "react";
import InputField from "../ui/InputField";
import PrimaryButton from "../ui/PrimaryButton";

const DEFAULT_LABELS = {
  name: "Full Name",
  phone: "Phone Number",
  email: "Email",
  message: "Message",
};

const TEXTAREA_BASE =
  "w-full resize-none px-4 py-3 font-body text-sm transition-all placeholder:text-neutral-400";

const GRADIENT_BG = "bg-[linear-gradient(135deg,#B0197E_0%,#310D89_100%)]";

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/*  default → stacked form used in the modal and page heroes           */
/*  contact → contact page section: 2-column grid, peach fields        */
/*  inline  → name | phone | email in one row on desktop,              */
/*            message full width below; light grey fields, red focus   */
/* ------------------------------------------------------------------ */
const VARIANTS = {
  default: {
    order: ["name", "phone", "email"],
    form: "",
    wrapper: "space-y-3",
    fieldWrap: {},
    input: "",
    textarea:
      "rounded-xl border border-neutral-300 bg-white outline-none focus:border-black focus:ring-2 focus:ring-neutral-200",
    rows: 5,
    message: "",
    consent: "",
    button: "",
    buttonText: "Submit Request",
    buttonVarient:"glass",
    showConsent: false,
    consentText: "I agree to receive messages and updates, and I accept the",
    placeholders: {
      name: "Enter your name",
      phone: "Enter your phone number",
      email: "Enter your email",
      message: "Tell us about your project",
    },
  },

  contact: {
    // Name | Email on one row, Phone full width — same order on screen and for Tab
    order: ["name", "email", "phone"],
    form: "",
    wrapper: "grid grid-cols-1 gap-4 sm:grid-cols-2",
    fieldWrap: { phone: "sm:col-span-2" },
    /*
      InputField puts className on its WRAPPER, not the <input>.
      So: make the wrapper invisible, and style the real input via [&_input].
    */
    input: [
      "block w-full !h-auto !p-0 !border-0 !bg-transparent !shadow-none !rounded-none",
      "[&_input]:!h-12 [&_input]:!w-full [&_input]:!rounded-lg [&_input]:!border [&_input]:!border-[#EBCFB0]",
      "[&_input]:!bg-[#FBEADB] [&_input]:!px-4 [&_input]:!shadow-none [&_input]:font-body [&_input]:text-sm",
      "[&_input]:text-neutral-900 [&_input]:placeholder:text-neutral-500 [&_input]:transition-colors",
      "[&_input:focus]:!border-[#F29013] [&_input:focus]:!bg-white [&_input:focus]:outline-none",
      "[&_input:focus]:ring-2 [&_input:focus]:ring-[#F29013]/30",
    ].join(" "),
    textarea:
      "h-32 rounded-lg border border-[#EBCFB0] bg-[#FBEADB] text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-[#F29013] focus:bg-white focus:ring-2 focus:ring-[#F29013]/30",
    rows: 4,
    message: "sm:col-span-2",
    consent: "sm:col-span-2 text-xs text-neutral-700",
    button: "w-full px-10 py-3 sm:col-span-2 sm:w-auto sm:justify-self-center",
    buttonText: "Submit Now",
    showConsent: true,
    consentText:
      "By submitting your information, you agree to be contacted by our team for a consultation about your project, and you accept our",
    placeholders: {
      name: "Name",
      phone: "Phone Number",
      email: "Email",
      message: "Tell us about your book",
    },
  },

  inline: {
    // Name | Phone | Email on one row (desktop), stacked on mobile
    order: ["name", "phone", "email"],
    // Labels, consent links, textarea and checkbox styles live on the <form>
    form: [
      "[&_label]:text-xs [&_label]:text-black/60 [&_a]:text-black [&_a]:underline",
      "[&_textarea]:h-15 [&_textarea]:min-h-0 [&_textarea]:resize-none [&_textarea]:rounded-lg",
      "[&_textarea]:border [&_textarea]:border-black/15 [&_textarea]:bg-black/10 [&_textarea]:px-3",
      "[&_textarea]:text-sm [&_textarea]:text-black [&_textarea]:placeholder:text-black/45",
      "[&_textarea]:outline-none [&_textarea]:transition-colors",
      "[&_textarea:focus]:border-[#B0197E] [&_textarea:focus]:bg-black/15",
      "[&_input[type=checkbox]]:h-4 [&_input[type=checkbox]]:accent-[#B0197E]",
    ].join(" "),
    wrapper: "grid grid-cols-1 gap-3 md:grid-cols-3",
    fieldWrap: {},
    // InputField puts className on its wrapper, so the real <input> is styled via [&_input]
    input: [
      "w-full",
      "[&_input]:h-10 [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-black/15",
      "[&_input]:bg-black/10 [&_input]:px-3 [&_input]:text-sm [&_input]:text-black",
      "[&_input]:placeholder:text-black/45 [&_input]:outline-none [&_input]:transition-colors",
      "[&_input:focus]:border-[#B0197E] [&_input:focus]:bg-black/15",
    ].join(" "),
    textarea: "", // styled by the form classes above
    rows: 3,
    message: "md:col-span-3",
    consent: "md:col-span-3 text-xs",
    button: `mt-1 h-11 w-full rounded-lg text-sm font-semibold text-white md:col-span-3 ${GRADIENT_BG} transition hover:shadow-[0_10px_25px_rgba(239,26,7,0.35)]`,
    buttonText: "Submit Request",
    showConsent: false,
    consentText: "I agree to receive messages and updates, and I accept the",
    placeholders: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      message: "Tell us about your book",
    },
  },
};

const FIELD_META = {
  name: { type: "text", autoComplete: "name" },
  phone: { type: "tel", autoComplete: "tel" },
  email: { type: "email", autoComplete: "email" },
};

const Field = ({ show, htmlFor, label, labelClassName, wrapClassName = "", children }) => {
  // Without a visible label we still need a wrapper when the variant places
  // the field in the grid (e.g. col-span)
  if (!show) return wrapClassName ? <div className={wrapClassName}>{children}</div> : children;

  return (
    <div className={wrapClassName}>
      <label
        htmlFor={htmlFor}
        className={`mb-1.5 block font-body text-sm font-medium text-neutral-800 ${labelClassName}`}
      >
        {label}
      </label>
      {children}
    </div>
  );
};

const ContactForm = ({
  variant = "default",
  className = "",
  formClassName = "",
  inputClassName = "",
  textareaClassName = "",
  buttonClassName = "",
  messageClassName = "",
  showLabels = false,
  labels = {},
  labelClassName = "",
  showConsent, // falls back to the variant's default
  consentText, // falls back to the variant's default
  buttonText, // falls back to the variant's default
  buttonVarient,
  termsUrl = "/terms",
  privacyUrl = "/privacy-policy",
  consentClassName = "",
  checkboxClassName = "",
  linkClassName = "",
}) => {
  const v = VARIANTS[variant] || VARIANTS.default;

  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    page_url: window.location.href,
  });

  const text = { ...DEFAULT_LABELS, ...labels };
  const consentOn = showConsent ?? v.showConsent;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const dbRes = await fetch(
        "https://leads.authorpublishers.us/api/lead/e8blTTaHFpmYI1aMh10GkcsL6Y1GlxSC",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            "Phone Number": formData.phone,
            Message: formData.message,
          }),
        }
      );

      let dbData = null;
      try {
        dbData = await dbRes.json();
      } catch (_) {}

      if (!dbRes.ok) {
        throw new Error(dbData?.message || `DB API Error: ${dbRes.status}`);
      }

      window.location.href = "/thank-you";
    } catch (error) {
      alert("Failed to submit form: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${v.form} ${className} ${formClassName}`}>
      <div className={v.wrapper}>
        {v.order.map((key) => (
          <Field
            key={key}
            show={showLabels}
            htmlFor={`cf-${key}`}
            label={text[key]}
            labelClassName={labelClassName}
            wrapClassName={v.fieldWrap[key]}
          >
            <InputField
              id={`cf-${key}`}
              name={key}
              type={FIELD_META[key].type}
              autoComplete={FIELD_META[key].autoComplete}
              placeholder={v.placeholders[key]}
              aria-label={showLabels ? undefined : text[key]}
              value={formData[key]}
              onChange={handleChange}
              required
              className={`${v.input} ${inputClassName}`}
            />
          </Field>
        ))}

        <div className={`${v.message} ${messageClassName}`}>
          <Field show={showLabels} htmlFor="cf-message" label={text.message} labelClassName={labelClassName}>
            <textarea
              id="cf-message"
              name="message"
              placeholder={v.placeholders.message}
              aria-label={showLabels ? undefined : text.message}
              value={formData.message}
              onChange={handleChange}
              rows={v.rows}
              required
              className={`${TEXTAREA_BASE} ${textareaClassName || v.textarea}`}
            />
          </Field>
        </div>

        {consentOn && (
          <label
            htmlFor="cf-consent"
            className={`flex cursor-pointer items-start gap-2.5 font-body text-[12.5px] leading-[1.6] text-neutral-600 ${v.consent} ${consentClassName}`}
          >
            <input
              id="cf-consent"
              name="consent"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className={`mt-[3px] h-4 w-4 shrink-0 cursor-pointer rounded accent-[#F29013] ${checkboxClassName}`}
            />
            <span>
              {consentText ?? v.consentText}{" "}
              <a
                href={termsUrl}
                target="_blank"
                rel="noreferrer"
                className={`font-semibold text-[#F29013] underline underline-offset-2 hover:no-underline ${linkClassName}`}
              >
                Terms &amp; Conditions
              </a>{" "}
              and{" "}
              <a
                href={privacyUrl}
                target="_blank"
                rel="noreferrer"
                className={`font-semibold text-[#F29013] underline underline-offset-2 hover:no-underline ${linkClassName}`}
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
        )}

        <PrimaryButton
          variant={buttonVarient}
          type="submit"
          disabled={isLoading}
          className={`${v.button} ${buttonClassName}`}
        >
          {isLoading ? "Submitting..." : buttonText ?? v.buttonText}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ContactForm;