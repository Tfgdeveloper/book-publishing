
import { useState } from "react";
import Modal from "../sections/Modal";

const PrimaryButton = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",

  // New variant
  variant = "primary",

  // Modal options
  openModal = false,
  modalTitle = "Get Started",
  modalDescription = "Fill out the form and we'll get back to you.",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    if (openModal) {
      setIsModalOpen(true);
    }

    if (onClick) {
      onClick(e);
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full
    px-[20px] py-[10px]
    font-heading
    medium
    tracking-[1px]
    text-white
    transition-all duration-300 ease-out
    hover:scale-105
    active:scale-95
    focus:outline-none
    disabled:cursor-not-allowed
    disabled:opacity-50
  `;

  const variantClasses = {
    primary: `
      bg-[linear-gradient(90deg,#E2770B_0%,#EF1A07_35%,#EF1A07_100%)]
      hover:shadow-[0_10px_25px_rgba(239,26,7,0.3),0_4px_12px_rgba(226,119,11,0.25)]
    `,
    glass: `
      glass
      !shadow-[inset_1px_1px_0_rgba(255,255,255,0.8),inset_-1px_-1px_0_rgba(255,255,255,0.12),inset_4px_4px_12px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.15)]
      hover:!shadow-[inset_1px_1px_0_rgba(255,255,255,0.8),inset_-1px_-1px_0_rgba(255,255,255,0.12),inset_4px_4px_12px_rgba(255,255,255,0.1),0_10px_35px_rgba(255,255,255,0.12)]
    `,
  };

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={`
          ${baseClasses}
          ${variantClasses[variant] || variantClasses.primary}
          ${className}
        `}
      >
        {children}
      </button>

      {openModal && (
        <Modal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          title={modalTitle}
          description={modalDescription}
        />
      )}
    </>
  );
};

export default PrimaryButton;
