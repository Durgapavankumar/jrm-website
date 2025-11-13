"use client";
import { ReactNode, useEffect } from "react";

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl sm:h-auto sm:max-h-[90vh]">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h4 className="font-semibold">{title}</h4>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-lg px-2 py-1 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-auto p-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
