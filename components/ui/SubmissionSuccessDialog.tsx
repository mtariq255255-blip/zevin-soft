"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, X } from "lucide-react";

export default function SubmissionSuccessDialog({
  open,
  onClose,
  title,
  message,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="submission-success-title"
      className="m-auto w-[calc(100%-32px)] max-w-[440px] overflow-visible rounded-[10px] border-0 bg-transparent p-0 text-[#0F1B2D] backdrop:bg-[#0F1B2D]/45"
      onClose={onClose}
    >
      <div className="relative rounded-[10px] border border-[#DCE5EE] bg-white px-6 py-8 text-center shadow-[0_24px_70px_rgba(15,27,45,0.2)] sm:px-9">
        <button
          type="button"
          aria-label="Close confirmation"
          autoFocus
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-[6px] text-[#617187] transition hover:bg-[#F1F5F9] hover:text-[#17263B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677EA]"
          onClick={() => dialogRef.current?.close()}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F6EC] text-[#22834A]">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h2
          id="submission-success-title"
          className="mt-5 text-[22px] font-bold leading-tight text-[#0F1B2D]"
        >
          {title}
        </h2>
        <p className="mt-3 text-[14px] leading-[1.6] text-[#617187]">
          {message}
        </p>

        <button
          type="button"
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-[7px] bg-[#0878EA] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#1762C4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878EA]"
          onClick={() => dialogRef.current?.close()}
        >
          Done
        </button>
      </div>
    </dialog>
  );
}