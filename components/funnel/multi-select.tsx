"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

import { cn } from "@/utils/cn";

type MultiSelectProps = {
  id: string;
  options: readonly string[];
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  invalid?: boolean;
  ariaLabel?: string;
};

/**
 * Accessible multi-select dropdown. Compact closed trigger (summary + chevron)
 * that opens a checkbox-style listbox. Multiple selections, selections persist
 * when closed, closes on outside pointer / Escape / Tab, arrow-key navigable.
 * Visually matches the Zaydtex form fields. No native <select multiple>.
 */
export default function MultiSelect({
  id,
  options,
  value,
  onChange,
  placeholder = "Select products",
  invalid = false,
  ariaLabel,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Close on outside pointer (covers mouse + touch).
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  // Focus an option when the panel opens.
  useEffect(() => {
    if (!open) return;
    const start = value.length
      ? Math.max(0, options.indexOf(value[value.length - 1]))
      : 0;
    setActive(start);
    const raf = requestAnimationFrame(() => optionRefs.current[start]?.focus());
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const toggle = (opt: string) =>
    onChange(
      value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]
    );

  const summary =
    value.length === 0
      ? placeholder
      : value.length <= 2
        ? value.join(", ")
        : `${value.length} products selected`;

  const focusOption = (i: number) => {
    setActive(i);
    optionRefs.current[i]?.focus();
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        break;
      case "Tab":
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        focusOption(Math.min(active + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        focusOption(Math.max(active - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        focusOption(0);
        break;
      case "End":
        e.preventDefault();
        focusOption(options.length - 1);
        break;
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-xl border bg-white px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-primary/40",
          invalid
            ? "border-red-400"
            : "border-brand-ink/15 focus:border-brand-primary",
          value.length ? "text-brand-ink" : "text-brand-ink/40"
        )}
      >
        <span className="min-w-0 flex-1 truncate">{summary}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-brand-ink/40 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-multiselectable="true"
          aria-label={ariaLabel}
          onKeyDown={onPanelKeyDown}
          className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-brand-ink/15 bg-white p-1.5 shadow-soft"
        >
          {options.map((opt, i) => {
            const selected = value.includes(opt);
            return (
              <button
                key={opt}
                ref={(el) => {
                  optionRefs.current[i] = el;
                }}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={-1}
                onClick={() => toggle(opt)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition",
                  i === active ? "bg-brand-primary/[0.06]" : "",
                  selected
                    ? "text-brand-ink"
                    : "text-brand-ink/75 hover:bg-brand-ink/[0.03]"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition",
                    selected
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-brand-ink/25 bg-white"
                  )}
                >
                  {selected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
