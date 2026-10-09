"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

type Pos = {
  left: number;
  width: number;
  top?: number;
  bottom?: number;
  maxHeight: number;
};

const GAP = 8; // space between trigger and panel
const TOP_SAFE = 80; // clear the fixed header
const CAP = 352; // 22rem
const MIN = 168;

/**
 * Accessible multi-select dropdown with a sticky "Done" footer.
 *
 * The panel is rendered in a PORTAL (document.body) with fixed, viewport-aware
 * positioning so it can never be clipped by an ancestor's overflow:hidden (the
 * form card) and never spills off-screen: it anchors to the trigger, caps its
 * height to the available space, flips above when there's more room up top, and
 * the options scroll independently above the always-visible Done button.
 *
 * Multiple selections persist when closed; closes on Done / outside pointer /
 * Escape / focus-leave; arrow-key navigable. Done only closes the dropdown — it
 * never submits the form.
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
  const [pos, setPos] = useState<Pos | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const computePosition = () => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const isMobile = window.innerWidth < 768;
    const bottomSafe = isMobile ? 84 : 24; // mobile sticky bar / breathing room

    const spaceBelow = vh - (r.bottom + GAP) - bottomSafe;
    const spaceAbove = r.top - GAP - TOP_SAFE;
    const placeBelow = spaceBelow >= Math.min(CAP, 220) || spaceBelow >= spaceAbove;

    const maxHeight = Math.max(
      MIN,
      Math.min(CAP, placeBelow ? spaceBelow : spaceAbove)
    );
    const base = { left: r.left, width: r.width, maxHeight };
    setPos(
      placeBelow
        ? { ...base, top: r.bottom + GAP }
        : { ...base, bottom: vh - r.top + GAP }
    );
  };

  const openDropdown = () => {
    computePosition();
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  // Keep the panel anchored while scrolling/resizing; close on outside pointer.
  useEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }
    const reflow = () => computePosition();
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || panelRef.current?.contains(t))
        return;
      setOpen(false);
    };
    window.addEventListener("scroll", reflow, true);
    window.addEventListener("resize", reflow);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("scroll", reflow, true);
      window.removeEventListener("resize", reflow);
      document.removeEventListener("pointerdown", onPointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Focus an option when the panel opens.
  useEffect(() => {
    if (!open || !pos) return;
    const start = value.length
      ? Math.max(0, options.indexOf(value[value.length - 1]))
      : 0;
    setActive(start);
    const raf = requestAnimationFrame(() => optionRefs.current[start]?.focus());
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, pos !== null]);

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
      openDropdown();
    }
  };

  const onPanelBlur = (e: React.FocusEvent) => {
    const next = e.relatedTarget as Node | null;
    if (
      next &&
      (triggerRef.current?.contains(next) || panelRef.current?.contains(next))
    )
      return;
    if (next) setOpen(false);
  };

  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        close();
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
    <>
      <button
        ref={triggerRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openDropdown())}
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

      {open &&
        pos &&
        createPortal(
          <div
            ref={panelRef}
            onKeyDown={onPanelKeyDown}
            onBlur={onPanelBlur}
            style={{
              position: "fixed",
              left: pos.left,
              width: pos.width,
              top: pos.top,
              bottom: pos.bottom,
              maxHeight: pos.maxHeight,
            }}
            className="z-[60] flex flex-col overflow-hidden rounded-xl border border-brand-ink/15 bg-white shadow-soft"
          >
            {/* Options scroll independently above the sticky Done footer. */}
            <div
              role="listbox"
              aria-multiselectable="true"
              aria-label={ariaLabel}
              className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain p-1.5"
              style={{ WebkitOverflowScrolling: "touch" }}
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
                      {selected && (
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      )}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Sticky footer — always visible while the options scroll. */}
            <div className="shrink-0 border-t border-brand-ink/10 bg-white p-1.5">
              <button
                type="button"
                onClick={close}
                className="w-full rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-primaryDark active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
              >
                Done
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
