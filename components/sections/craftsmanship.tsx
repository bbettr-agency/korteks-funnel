"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { craftsmanship } from "@/config/craftsmanship-config";
import { siteConfig } from "@/config/site-config";

/**
 * Craftsmanship in Every Curtain — premium horizontal editorial gallery.
 *
 * Conversion job: prove product quality (between Factory and Products) so the
 * buyer reaches the range thinking "these are clearly premium — I want pricing."
 *
 * Interaction: native horizontal scroll (touch swipe + trackpad + momentum) with
 * scroll-snap, plus click-and-drag for mouse users. Fully config-driven — reads
 * only from config/craftsmanship-config.ts; no hard-coded image paths.
 */
export default function Craftsmanship() {
  const scroller = useRef<HTMLDivElement | null>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return; // touch/trackpad scroll natively
    const el = scroller.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = drag.current;
    if (!s.down) return;
    const el = scroller.current;
    if (!el) return;
    const dx = e.clientX - s.startX;
    if (Math.abs(dx) > 4) s.moved = true;
    el.scrollLeft = s.startLeft - dx;
  };

  const endDrag = () => {
    drag.current.down = false;
  };

  // Swallow the click that ends a drag so it doesn't fire a card's CTA link.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="craftsmanship" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
            {craftsmanship.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-ink md:text-5xl">
            {craftsmanship.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-brand-ink/60 md:text-lg">
            {craftsmanship.subheading}
          </p>
        </motion.div>
      </div>

      {/* gallery */}
      <div
        ref={scroller}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="mt-12 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {craftsmanship.cards.map((card, i) => (
          <motion.article
            key={card.image}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: Math.min(i, 4) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-40px" }}
            className="group w-[78vw] shrink-0 snap-start sm:w-[58vw] md:w-[420px]"
          >
            <div className="pointer-events-none relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-mist shadow-card">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                draggable={false}
                sizes="(max-width: 768px) 78vw, 420px"
                className="select-none object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">
              {card.title}
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-brand-ink/60">
              {card.line}
            </p>
            <Link
              href={siteConfig.quotePath}
              className="group/cta mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary"
            >
              {craftsmanship.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
          </motion.article>
        ))}
        {/* trailing inset so the last card can rest off the edge */}
        <div aria-hidden className="w-1 shrink-0 sm:w-3" />
      </div>
    </section>
  );
}
