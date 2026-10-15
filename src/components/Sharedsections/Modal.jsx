import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock, X } from "lucide-react";
import ContactForm from "./ContactForm";

const GRADIENT = "linear-gradient(135deg, #E2770B 0%, #EF1A07 35%, #EF1A07 100%)";
const ease = [0.22, 1, 0.36, 1];

const Modal = ({
  open,
  onOpenChange,
  eyebrow = "Free Consultation",
  // The last two words of the title are shown bold, like the section headings
  title = "Let's Publish Your Book",
  description = "Tell us about your manuscript and goals. Our publishing team will get back to you with a tailored plan.",
  note = "We usually reply within 24 hours.",
}) => {
  const reduce = useReducedMotion();
  const words = title.split(" ");
  const lightPart = words.slice(0, -2).join(" ");
  const boldPart = words.slice(-2).join(" ");

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>

            {/* Centering layer (flex instead of translate so Framer Motion can animate transform) */}
            <div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-4">
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="pointer-events-auto relative max-h-[94vh] w-full max-w-lg overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] outline-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: reduce ? 0.15 : 0.45, ease }}
                  style={{ background: GRADIENT }}
                >
                  <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1.2px, transparent 1.6px)",
                        backgroundSize: "11px 11px",
                        maskImage: "radial-gradient(ellipse 45% 90% at 85% 120%, black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse 45% 90% at 85% 120%, black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
                      }}
                    />
                  {/* ---------- Header ---------- */}
                  <div className="relative overflow-hidden px-6 pb-5 pt-5 text-white sm:px-8" >
                    {/* Halftone dots rising from the bottom right, same as the CTA cards */}
                    

                    <motion.span
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4, ease }}
                      className="glass relative inline-flex items-center   px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white ring-1 ring-white/30"
                    >
                      {eyebrow}
                    </motion.span>

                    <Dialog.Title className="relative mt-3 pr-10 font-heading text-[1rem] leading-[1.15] sm:text-[1.5rem]">
                      {lightPart && <span className="font-light">{lightPart} </span>}
                      <span className="">{boldPart}</span>
                    </Dialog.Title>

                    <Dialog.Description className="relative mt-1 font-light max-w-sm text-sm leading-6 text-white/85">
                      {description}
                    </Dialog.Description>
                  </div>

                  {/* Close button */}
                  <Dialog.Close
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-[#EF1A07] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Close"
                  >
                    <X size={18} strokeWidth={2.25} />
                  </Dialog.Close>

                  {/* ---------- Body ---------- */}
                  <motion.div
                    className="px-6 pb-6 pt-6 sm:px-8 "
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5, ease }}
                  >
                    <ContactForm
                      className="max-w-xl space-y-10"
                      formClassName="rounded-2xl"
                      inputClassName="[&_input]:h-9 [&_input]:rounded-lg [&_input]:border [&_input]:border-neutral-200 [&_input]:bg-[#F4F4F6] [&_input]:transition-colors [&_input:focus]:border-[#EF1A07] [&_input:focus]:bg-white [&_textarea]:min-h-0 [&_textarea]:h-20 [&_textarea]:resize-none [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-neutral-200 [&_textarea]:bg-[#F4F4F6] [&_textarea]:transition-colors [&_textarea:focus]:border-[#EF1A07] [&_textarea:focus]:bg-white"
                      buttonClassName="mt-0"
                      buttonText="Get Started Now"
                      buttonVarient="glass"
                    />

                    <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-white">
                      <Clock className="h-3.5 w-3.5 text-[#fff]" aria-hidden="true" />
                      {note}
                    </p>
                  </motion.div>
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Modal;