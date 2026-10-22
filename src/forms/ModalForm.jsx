import { AlertCircle, Loader2 } from "lucide-react";
import { useLeadForm } from "./hooks/useLeadForm";

const inputBase =
  "w-full rounded-lg border bg-[#F4F4F6] px-3.5 text-sm text-neutral-900 placeholder-neutral-500 outline-none transition-colors duration-200 focus:bg-white";

function Field({ as = "input", error, className = "", ...props }) {
  const Tag = as;
  const stateClass = error
    ? "border-white ring-2 ring-white/80 bg-red-50"
    : "border-neutral-200 focus:border-[#EF1A07]";

  return (
    <div className={className}>
      <Tag className={`${inputBase} ${stateClass}`} {...props} />
      {error && (
        <p
          id={`${props.id}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-white"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ModalForm({ onSuccess, buttonText = "Submit" }) {
  const { register, errors, loading, serverError, handleSubmit, formRef, honeypotRef } =
    useLeadForm({ onSuccess });

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-3.5">
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

      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field
          placeholder="Full Name"
          autoComplete="name"
          className="[&_input]:h-10"
          error={errors.name}
          {...register("name")}
        />
        <Field
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          className="[&_input]:h-10"
          error={errors.email}
          {...register("email")}
        />
      </div>

      <Field
        type="tel"
        placeholder="Phone Number"
        autoComplete="tel"
        className="[&_input]:h-10"
        error={errors.phone_number}
        {...register("phone_number")}
      />

      <Field
        as="textarea"
        rows={3}
        placeholder="Tell us about your book"
        className="[&_textarea]:h-30 [&_textarea]:resize-none [&_textarea]:py-2.5"
        error={errors.message}
        {...register("message")}
      />

      {serverError && (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-lg bg-black/25 px-3.5 py-2.5 text-sm text-white"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="glass flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-white/15 text-sm font-semibold uppercase tracking-wider text-white ring-1 ring-white/40 transition-all duration-300 hover:bg-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-white/15 disabled:hover:text-white"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}