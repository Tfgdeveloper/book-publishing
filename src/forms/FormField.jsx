export default function FormField({
  label,
  error,
  as = "input",
  className = "",
  inputClassName = "",
  ...props
}) {
  const Tag = as;
  const base =
    "w-full rounded-md border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors duration-200 focus:border-[#EF1A07]";
  const borderColor = error ? "border-red-500" : "border-white/15";

  return (
    <div className={className}>
      {label && (
        <label htmlFor={props.id} className="mb-1.5 block text-sm text-white/80">
          {label}
        </label>
      )}
      <Tag className={`${base} ${borderColor} ${inputClassName}`} {...props} />
      {error && (
        <p id={`${props.id}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}