"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { businessTypes } from "@/config/funnel-config";
import { trackEvent } from "@/lib/tracking";

/**
 * Native lead form — TEMPORARY until the client's GoHighLevel form is provided.
 *
 * Submissions are emailed via FormSubmit.co to siteConfig.leadEmail (no API key
 * required; FormSubmit sends a one-time activation email on first use). On
 * success we redirect to the Thank You page, where the Google Ads / GTM lead
 * conversion fires (ConversionTracker). Swap back to GHL by setting
 * siteConfig.useGhlForm = true.
 *
 * Six fields — the B2B sweet spot. Company Name + Business Type qualify the lead
 * and filter single-unit consumers without adding friction.
 */
type FieldErrors = Partial<Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm({ instanceId }: { instanceId: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const id = (name: string) => `${name}-${instanceId}`;

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

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.leadEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "New trade enquiry — Korteks Textiles (ready-made curtains)",
            _template: "table",
            _captcha: "false",
            "Full Name": name,
            "Company Name": company,
            "Email Address": email,
            "Phone Number": phone,
            "Business Type": businessType,
            Message: (data.get("message") as string)?.trim() || "—",
          }),
        }
      );

      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);

      trackEvent("lead_form_submit", {
        form: "ready-made-curtains-trade",
        instance: instanceId,
        business_type: businessType,
      });

      router.push(siteConfig.thankYouPath);
    } catch {
      setStatus("error");
    }
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

      <div>
        <label htmlFor={id("message")} className={labelCls}>
          What are you looking to source?{" "}
          <span className="font-normal normal-case text-brand-ink/40">
            (optional)
          </span>
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={3}
          placeholder="Products & rough quantities, e.g. ready-made curtains for 12 retail stores"
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
    </form>
  );
}
