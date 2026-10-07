"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Tag, Info } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { productOptions } from "@/config/funnel-config";
import { trackEvent } from "@/lib/tracking";
import { submitLead } from "@/services/webhook-submit";
import { cn } from "@/utils/cn";
import MultiSelect from "@/components/funnel/multi-select";

/**
 * Native lead form — production GoHighLevel integration.
 *
 * Qualified-only B2B flow with progressive disclosure:
 *   Contact details → "Are you enquiring on behalf of a registered business?"
 *     • NO  → trade-only message, no fields, no submit, no lead.
 *     • YES → reveal Registered Business Name, Nature of Business,
 *             Product Interest (required multi-select) and Message, then submit.
 *
 * Only a genuinely qualified submission runs the existing submitLead → webhook
 * → /thank-you → conversion flow. Attribution is merged in submitLead().
 */
type FieldErrors = Partial<Record<string, string>>;
type Registered = "" | "yes" | "no";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm({ instanceId }: { instanceId: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  // Product the buyer clicked to get here (?product=…) — shown as context.
  const [product, setProduct] = useState<string | null>(null);
  // Qualification state.
  const [registered, setRegistered] = useState<Registered>("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const id = (name: string) => `${name}-${instanceId}`;

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search).get("product");
      if (!p) return;
      const clean = p.slice(0, 120);
      setProduct(clean);
      // Preselect it in Product Interest if it's a real category.
      const match = (productOptions as readonly string[]).find(
        (o) => o.toLowerCase() === clean.toLowerCase()
      );
      if (match) setSelectedProducts([match]);
    } catch {
      /* no-op */
    }
  }, []);

  // When they confirm YES, move focus to the first revealed field.
  useEffect(() => {
    if (registered === "yes") {
      const t = setTimeout(() => businessNameRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [registered]);

  const chooseRegistered = (val: "yes" | "no") => {
    setRegistered(val);
    setErrors({});
    if (status === "error") setStatus("idle");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this hidden field; humans never see it.
    if ((data.get("_honey") as string)?.length) {
      router.push(siteConfig.thankYouPath);
      return;
    }

    // Hard gate: only a confirmed registered business can submit.
    if (registered !== "yes") return;

    const next: FieldErrors = {};
    const name = (data.get("name") as string)?.trim();
    const company = (data.get("company") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const natureOfBusiness = (data.get("natureOfBusiness") as string)?.trim();

    if (!name) next.name = "Please enter your name.";
    if (!email || !EMAIL_RE.test(email)) next.email = "Enter a valid email.";
    if (!phone) next.phone = "Please enter a phone number.";
    if (!company) next.company = "Please enter your registered business name.";
    if (!natureOfBusiness)
      next.natureOfBusiness = "Please tell us briefly what your business does.";
    if (selectedProducts.length === 0)
      next.products = "Please select at least one product.";

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const message = (data.get("message") as string)?.trim() || "";

    const result = await submitLead({
      fullName: name,
      // Customer-facing label is "Registered Business Name"; backend key kept.
      companyName: company,
      email,
      phone,
      // Backend key kept; now carries the written Nature of Business.
      businessType: natureOfBusiness,
      registeredBusiness: "Yes",
      productsInterested: selectedProducts.join(", "),
      message,
    });

    if (!result.ok) {
      setStatus("error");
      return;
    }

    trackEvent("lead_form_submit", {
      form: "ready-made-curtains-trade",
      instance: instanceId,
      products: selectedProducts.join(", "),
      registered_business: "Yes",
    });

    router.push(siteConfig.thankYouPath);
  };

  const fieldBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40 transition focus:outline-none focus:ring-2 focus:ring-brand-primary/40";
  const ok = "border-brand-ink/15 focus:border-brand-primary";
  const bad = "border-red-400 focus:border-red-500";
  const labelCls =
    "mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink/60";
  const errCls = "mt-1 text-xs font-medium text-red-500";

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/* Honeypot (visually hidden, not display:none so bots still fill it) */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          Leave this empty
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Product-intent context — shown when the buyer arrived from a product card. */}
      {product && (
        <div className="flex items-center gap-2 rounded-xl border border-brand-primary/20 bg-brand-primary/[0.06] px-3.5 py-2.5 text-sm font-semibold text-brand-ink">
          <Tag className="h-4 w-4 shrink-0 text-brand-primary" />
          <span>
            Enquiring about{" "}
            <span className="text-brand-primary">{product}</span>
          </span>
        </div>
      )}

      {/* ── Contact details ─────────────────────────────────────────────── */}
      <div>
        <label htmlFor={id("name")} className={labelCls}>
          Full Name
        </label>
        <input
          id={id("name")}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={`${fieldBase} ${errors.name ? bad : ok}`}
        />
        {errors.name && <p className={errCls}>{errors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("email")} className={labelCls}>
            Email Address
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.co.za"
            className={`${fieldBase} ${errors.email ? bad : ok}`}
          />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor={id("phone")} className={labelCls}>
            Phone Number
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0__ ___ ____"
            className={`${fieldBase} ${errors.phone ? bad : ok}`}
          />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
      </div>

      {/* ── Registered-business gate (required, nothing preselected) ─────── */}
      <div>
        <span className={labelCls}>
          Are you enquiring on behalf of a registered business?
        </span>
        <div
          role="radiogroup"
          aria-label="Are you enquiring on behalf of a registered business?"
          className="mt-1 grid grid-cols-2 gap-3"
        >
          {(["yes", "no"] as const).map((val) => {
            const selected = registered === val;
            return (
              <button
                key={val}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => chooseRegistered(val)}
                onKeyDown={(e) => {
                  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
                    e.preventDefault();
                    chooseRegistered(val === "yes" ? "no" : "yes");
                  }
                }}
                className={cn(
                  "inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50",
                  selected
                    ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                    : "border-brand-ink/15 bg-white text-brand-ink/75 hover:border-brand-primary/50 hover:text-brand-ink"
                )}
              >
                {val === "yes" ? "Yes" : "No"}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── NO → disqualified, no submit path ───────────────────────────── */}
      {registered === "no" && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-start gap-2.5 rounded-xl border border-brand-ink/10 bg-brand-mist px-4 py-3.5 text-sm leading-6 text-brand-ink/75"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
          <span>
            Zaydtex supplies registered businesses through our trade enquiry
            channel.
          </span>
        </motion.div>
      )}

      {/* ── YES → reveal the qualification fields + submit ──────────────── */}
      {registered === "yes" && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <div>
            <label htmlFor={id("company")} className={labelCls}>
              Registered Business Name
            </label>
            <input
              ref={businessNameRef}
              id={id("company")}
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Your registered business"
              className={`${fieldBase} ${errors.company ? bad : ok}`}
            />
            {errors.company && <p className={errCls}>{errors.company}</p>}
          </div>

          <div>
            <label htmlFor={id("natureOfBusiness")} className={labelCls}>
              Nature of Business
            </label>
            <p className="mb-1.5 text-xs text-brand-ink/50">
              Briefly tell us what your business does and the industry you
              operate in.
            </p>
            <textarea
              id={id("natureOfBusiness")}
              name="natureOfBusiness"
              rows={3}
              placeholder="e.g. We are a homeware retailer supplying curtains and textiles through three stores in Gauteng."
              className={`${fieldBase} ${errors.natureOfBusiness ? bad : ok} resize-none`}
            />
            {errors.natureOfBusiness && (
              <p className={errCls}>{errors.natureOfBusiness}</p>
            )}
          </div>

          <div>
            <label htmlFor={id("products")} className={labelCls}>
              Which products are you interested in?
            </label>
            <MultiSelect
              id={id("products")}
              options={productOptions}
              value={selectedProducts}
              onChange={(next) => {
                setSelectedProducts(next);
                if (errors.products)
                  setErrors((e) => ({ ...e, products: undefined }));
              }}
              placeholder="Select products"
              ariaLabel="Which products are you interested in?"
              invalid={!!errors.products}
            />
            {errors.products && <p className={errCls}>{errors.products}</p>}
          </div>

          <div>
            <label htmlFor={id("message")} className={labelCls}>
              Message{" "}
              <span className="font-normal normal-case text-brand-ink/40">
                (optional)
              </span>
            </label>
            <textarea
              id={id("message")}
              name="message"
              rows={3}
              placeholder="Rough quantities or specifics, e.g. ready-made curtains for 12 retail stores"
              className={`${fieldBase} ${ok} resize-none`}
            />
          </div>

          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
              Something went wrong. Please try again, or call us instead.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-primaryDark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                {siteConfig.cta}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.div>
      )}
    </form>
  );
}
