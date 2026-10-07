"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Tag, Check } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { businessTypes, productOptions } from "@/config/funnel-config";
import { trackEvent } from "@/lib/tracking";
import { submitLead } from "@/services/webhook-submit";
import { cn } from "@/utils/cn";

/**
 * Native lead form — production GoHighLevel integration.
 *
 * Submissions POST to a GHL (LeadConnector) Inbound Webhook via submitLead()
 * (see @/services/webhook-submit + @/config/integrations). On success we
 * redirect to the Thank You page, where the lead conversion fires.
 *
 * B2B qualification gates (deliberately restrictive — quality over volume):
 *  • Business Type (who they are)
 *  • Products interested in — at least one of the real Zaydtex categories
 *  • Registered-business confirmation — required before submit
 * These filter out consumer/irrelevant enquiries before they enter the CRM.
 */
type FieldErrors = Partial<Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm({ instanceId }: { instanceId: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  // Product the buyer clicked to get here (?product=…) — shown as context.
  const [product, setProduct] = useState<string | null>(null);
  // Required B2B qualification state.
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [registeredBusiness, setRegisteredBusiness] = useState(false);
  const id = (name: string) => `${name}-${instanceId}`;

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search).get("product");
      if (!p) return;
      const clean = p.slice(0, 120);
      setProduct(clean);
      // Preselect it in the products field if it's a real category — so the
      // buyer never has to select the same product twice.
      const match = (productOptions as readonly string[]).find(
        (o) => o.toLowerCase() === clean.toLowerCase()
      );
      if (match) setSelectedProducts([match]);
    } catch {
      /* no-op */
    }
  }, []);

  const toggleProduct = (option: string) => {
    setSelectedProducts((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
    if (errors.products) setErrors((e) => ({ ...e, products: undefined }));
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

    const next: FieldErrors = {};
    const name = (data.get("name") as string)?.trim();
    const company = (data.get("company") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const businessType = (data.get("businessType") as string)?.trim();

    if (!name) next.name = "Please enter your name.";
    if (!company) next.company = "Please enter your company name.";
    if (!email || !EMAIL_RE.test(email)) next.email = "Enter a valid email.";
    if (!phone) next.phone = "Please enter a phone number.";
    if (!businessType) next.businessType = "Please select your business type.";
    if (selectedProducts.length === 0)
      next.products = "Please select at least one product.";
    if (!registeredBusiness)
      next.registered =
        "Please confirm that you are enquiring on behalf of a registered business.";

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const message = (data.get("message") as string)?.trim() || "";

    const result = await submitLead({
      fullName: name,
      companyName: company,
      email,
      phone,
      businessType,
      registeredBusiness: true,
      // Serialised to a string so GHL can map it to a single field.
      productsInterested: selectedProducts.join(", "),
      message,
    });

    if (!result.ok) {
      // Keep the user on the page with their data intact so they can retry.
      setStatus("error");
      return;
    }

    trackEvent("lead_form_submit", {
      form: "ready-made-curtains-trade",
      instance: instanceId,
      business_type: businessType,
      products: selectedProducts.join(", "),
      registered_business: true,
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

      {/* Product-intent context — shown when the buyer arrived from a product
          card, so they know their interest is already noted. */}
      {product && (
        <div className="flex items-center gap-2 rounded-xl border border-brand-primary/20 bg-brand-primary/[0.06] px-3.5 py-2.5 text-sm font-semibold text-brand-ink">
          <Tag className="h-4 w-4 shrink-0 text-brand-primary" />
          <span>
            Enquiring about{" "}
            <span className="text-brand-primary">{product}</span>
          </span>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
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
        <div>
          <label htmlFor={id("company")} className={labelCls}>
            Company Name
          </label>
          <input
            id={id("company")}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your business"
            className={`${fieldBase} ${errors.company ? bad : ok}`}
          />
          {errors.company && <p className={errCls}>{errors.company}</p>}
        </div>
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

      <div>
        <label htmlFor={id("businessType")} className={labelCls}>
          Business Type
        </label>
        <select
          id={id("businessType")}
          name="businessType"
          defaultValue=""
          className={`${fieldBase} ${errors.businessType ? bad : ok}`}
        >
          <option value="" disabled>
            Select your business type…
          </option>
          {businessTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.businessType && <p className={errCls}>{errors.businessType}</p>}
      </div>

      {/* Products interested in — required multi-select (chips). Restricted to
          the real Zaydtex categories so irrelevant enquiries self-filter. */}
      <div>
        <span className={labelCls}>Which products are you interested in?</span>
        <div
          role="group"
          aria-label="Which products are you interested in?"
          className="mt-1 flex flex-wrap gap-2"
        >
          {productOptions.map((option) => {
            const active = selectedProducts.includes(option);
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => toggleProduct(option)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50",
                  active
                    ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                    : "border-brand-ink/15 bg-white text-brand-ink/75 hover:border-brand-primary/50 hover:text-brand-ink"
                )}
              >
                {active && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                {option}
              </button>
            );
          })}
        </div>
        {errors.products && <p className={errCls}>{errors.products}</p>}
      </div>

      <div>
        <label htmlFor={id("message")} className={labelCls}>
          Anything else we should know?{" "}
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

      {/* Registered-business confirmation — required trade gate. */}
      <div>
        <label
          htmlFor={id("registered")}
          className={cn(
            "flex cursor-pointer items-start gap-3 rounded-xl border bg-white px-4 py-3.5 transition",
            errors.registered
              ? "border-red-400"
              : "border-brand-ink/15 hover:border-brand-primary/40"
          )}
        >
          <input
            id={id("registered")}
            type="checkbox"
            checked={registeredBusiness}
            onChange={(e) => {
              setRegisteredBusiness(e.target.checked);
              if (errors.registered)
                setErrors((prev) => ({ ...prev, registered: undefined }));
            }}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-brand-ink/30 text-brand-primary accent-brand-primary focus:ring-brand-primary/40"
          />
          <span className="text-sm font-medium leading-6 text-brand-ink/80">
            I confirm that I am enquiring on behalf of a registered business.
          </span>
        </label>
        {errors.registered && <p className={errCls}>{errors.registered}</p>}
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
    </form>
  );
}
