
const SecondaryButton = ({
  children,
  href = "#",
  onClick,
  className = "",
  variant = "default",
  target,
  rel,
  disabled = false,
}) => {
  const buttonVariants = {
    default: "glass text-white rounded-full",
    glassIcon: "bg-transparent border-transparent shadow-none text-white",
    gradientIcon: "bg-transparent border-transparent shadow-none text-black",
  };

  const iconVariants = {
    default:
      "bg-[linear-gradient(90deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)] ",
    glassIcon: "glass ",
    gradientIcon:
      "bg-[linear-gradient(90deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]",
  };

  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      aria-disabled={disabled}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }

        onClick?.(e);
      }}
      className={`
        inline-flex items-center justify-center
        gap-2
        ${buttonVariants[variant] || buttonVariants.default}
        px-[20px] py-[0px]
        font-heading medium
        tracking-[1px]
        
        transition-all duration-300 ease-out
        hover:scale-105
        ${variant === "default"
          ? "hover:shadow-[0_10px_25px_rgba(46,74,54,0.35)]"
          : ""}
        active:scale-95
        focus:outline-none
        ${disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : ""}
        ${className}
      `}
    >
      <span
        className={`
          relative flex h-10 w-10 shrink-0
          items-center justify-center rounded-full
          ${iconVariants[variant] || iconVariants.default}
        `}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M15.1417 16.0797C13.2806 16.0797 11.4419 15.6738 9.62549 14.8621C7.80907 14.0504 6.15644 12.9004 4.66758 11.4121C3.17872 9.92326 2.02872 8.27062 1.21759 6.45421C0.406459 4.6378 0.000595544 2.79906 0 0.937982C0 0.669988 0.0893316 0.446658 0.267995 0.267995C0.446658 0.0893316 0.669988 0 0.937982 0H4.55591C4.76436 0 4.95046 0.0708697 5.11424 0.212609C5.27801 0.354349 5.37479 0.521697 5.40456 0.714653L5.98522 3.84126C6.015 4.07948 6.00755 4.28047 5.96289 4.44425C5.91822 4.60802 5.83633 4.74947 5.71723 4.86857L4.90086 5.69335C4.09905 6.50343 3.90092 7.76222 4.6113 8.65356C5.02044 9.16692 5.47097 9.66211 5.96289 10.1391C6.42443 10.6007 6.90831 11.0289 7.41453 11.4237C8.31676 12.1275 9.58523 11.9437 10.3943 11.1346L11.1218 10.4071C11.2558 10.2731 11.4309 10.1725 11.6471 10.1052C11.8632 10.0379 12.0753 10.0194 12.2831 10.0498L15.365 10.6751C15.5735 10.7347 15.7447 10.8428 15.8787 10.9994C16.0127 11.156 16.0797 11.3308 16.0797 11.5238V15.1417C16.0797 15.4097 15.9904 15.633 15.8117 15.8117C15.633 15.9904 15.4097 16.0797 15.1417 16.0797Z"
            fill="white"
          />
        </svg>
      </span>

      {children}
    </a>
  );
};

export default SecondaryButton;
