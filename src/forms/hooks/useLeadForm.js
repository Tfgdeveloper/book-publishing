import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { submitLead } from "../api/leads";
import { validateField, validateAll } from "../utils/validateLead";

const DEFAULT_FIELDS = ["name", "email", "phone_number", "message"];

export function useLeadForm({
  fields = DEFAULT_FIELDS, // which fields this form actually shows
  redirectTo = "/thank-you",
  onSuccess,
  messagePrefix = "", // e.g. "Interested in: Book Cover Design"
} = {}) {
  const initialValues = Object.fromEntries(fields.map((f) => [f, ""]));

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const honeypotRef = useRef(null);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    // block letters in phone field as the user types
    if (name === "phone_number") value = value.replace(/[^\d\s()+-]/g, "");

    setValues((prev) => ({ ...prev, [name]: value }));

    // re-validate live only after the user has left the field once
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    // bots usually fill hidden fields; silently ignore them
    if (honeypotRef.current?.value) return;

    const validationErrors = validateAll(values, fields);
    setErrors(validationErrors);
    setTouched(Object.fromEntries(fields.map((f) => [f, true])));

    if (Object.keys(validationErrors).length) {
      // focus the first invalid field
      const firstError = fields.find((f) => validationErrors[f]);
      formRef.current?.querySelector(`[name="${firstError}"]`)?.focus();
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const payload = {
        name: values.name?.trim() || "",
        email: values.email?.trim() || "",
        phone_number: values.phone_number?.trim() || "",
        message: [messagePrefix, values.message?.trim()].filter(Boolean).join("\n\n"),
      };
      await submitLead(payload);
      setValues(initialValues);
      setTouched({});
      onSuccess?.();
      navigate(redirectTo);
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // spread onto any input: {...register("email")}
  const register = (name) => ({
    name,
    id: name,
    value: values[name] ?? "",
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return {
    values,
    errors,
    loading,
    serverError,
    register,
    handleSubmit,
    formRef,
    honeypotRef,
  };
}