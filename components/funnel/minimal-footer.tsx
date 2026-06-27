import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site-config";
import Logo from "@/components/ui/logo";

export default function MinimalFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink px-6 pb-24 pt-12 text-white md:pb-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <a
          href="#top"
          className="flex items-center"
          aria-label={siteConfig.businessName}
        >
          <Logo
            variant="primary"
            className="h-11 w-auto"
            markClassName="h-9 w-9"
            wordmark={
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Korteks <span className="text-brand-accent">Textiles Africa</span>
              </span>
            }
          />
        </a>

        <p className="max-w-xl text-sm leading-7 text-white/55">
          Vertically integrated South African manufacturer of ready-made
          curtains and textiles — supplying retailers, interior designers,
          hospitality groups, developers and wholesale buyers nationwide.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <a
            href={siteConfig.phoneLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand-accent"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.emailLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-brand-accent"
          >
            <Mail className="h-4 w-4 text-brand-accent" />
            {siteConfig.email}
          </a>
        </div>

        <div className="mt-2 w-full border-t border-white/10 pt-6 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved. · Trading as {siteConfig.tradingAs}.
          </p>
          <p className="mt-2">
            Website by{" "}
            <a
              href="https://bbettragency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/55 transition hover:text-brand-accent"
            >
              Bbettr Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
