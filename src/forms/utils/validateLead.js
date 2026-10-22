const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_ALLOWED = /^\+?[\d\s()-]+$/;

export function validateField(name, value = "") {
  const v = value.trim();

  switch (name) {
    case "name":
      if (!v) return "Name is required";
      if (v.length < 2) return "Name must be at least 2 characters";
      if (v.length > 50) return "Name must be under 50 characters";
      if (!NAME_REGEX.test(v)) return "Name can only contain letters and spaces";
      return "";

    case "email":
      if (!v) return "Email is required";
      if (!EMAIL_REGEX.test(v)) return "Enter a valid email address";
      return "";

    case "phone_number": {
      if (!v) return "Phone number is required";
      if (!PHONE_ALLOWED.test(v)) return "Phone number contains invalid characters";
      const digits = v.replace(/\D/g, "");
      if (digits.length < 7) return "Phone number is too short";
      if (digits.length > 15) return "Phone number is too long";
      return "";
    }

    case "message":
      // optional, but limited in length
      if (v.length > 1000) return "Message must be under 1000 characters";
      return "";

    default:
      return "";
  }
}

export function validateAll(values, fields) {
  const errors = {};
  fields.forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
}