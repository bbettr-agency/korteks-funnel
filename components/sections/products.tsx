"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { products } from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";
import KnitDivider from "@/components/ui/knit-divider";

export default function Products() {
  const featured = products[0];
  const tiles = products.slice(1);

  return (
    <section id="products" className="bg-brand-cream px-6 py-24 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
            Products
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-ink md:text-5xl">
            {featured.title} — and the ranges to match.
          </h2>
        </motion.div>

        {/* featured */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid items-center gap-10 lg:grid-cols-2"
        >
          <Link
            href={siteConfig.quotePath}
            className="group relative block aspect-[4/3] overflow-hidden rounded-3xl shadow-soft"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Link>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              Our core product
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-brand-ink md:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-7 text-brand-ink/65">
              Premium curtains, cut, made and finished in-house — ready to stock,
              specify or install. Almost a million produced every year.
            </p>
            <Link
              href={siteConfig.quotePath}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-primary"
            >
              {siteConfig.ctaQuote}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* range tiles */}
        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {tiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link
                href={siteConfig.quotePath}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-card"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-brand-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-white/75">{p.blurb}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <KnitDivider className="mt-20 w-56" />
      </div>
    </section>
  );
}
