import { tradeFaq } from "@/config/funnel-config";

/**
 * Trade FAQ — server-rendered, no-JS <details> accordion. The same Q&A is
 * emitted as FAQPage schema on the page (see lib/schema.ts), so the visible
 * copy and the structured data always match.
 */
export default function TradeFaq() {
  return (
    <section id="faq" className="bg-white px-6 py-20 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
          {tradeFaq.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-brand-ink md:text-4xl">
          {tradeFaq.heading}
        </h2>
        <div className="mt-10 divide-y divide-brand-bone border-y border-brand-bone">
          {tradeFaq.items.map((item, i) => (
            <details key={item.q} className="group py-5" open={i < 2}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold text-brand-ink [&::-webkit-details-marker]:hidden">
                <h3 className="text-left">{item.q}</h3>
                <span
                  aria-hidden
                  className="mt-1 text-xl leading-none text-brand-primary transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-7 text-brand-ink/65">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
