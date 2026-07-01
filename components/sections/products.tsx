"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { featuredProduct, productRange, productsNote } from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";
import Icon from "@/components/ui/icon";

export default function Products() {
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
            More than curtains. A full textile range.
          </h2>
        </motion.div>

        {/* featured — Ready-Made Curtains */}
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
              src={featuredProduct.image}
              alt={featuredProduct.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Link>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              {featuredProduct.tag}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-brand-ink md:text-4xl">
              {featuredProduct.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-7 text-brand-ink/65">
              {featuredProduct.description}
            </p>
            <Link
              href={siteConfig.quotePath}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-primary"
            >
              {featuredProduct.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* the rest of the range */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {productRange.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <Link
                href={siteConfig.quotePath}
                className="group flex h-full flex-col rounded-2xl border border-brand-bone bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors duration-500 group-hover:bg-brand-primary group-hover:text-white">
                  <Icon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-tight text-brand-ink">
                  {p.title}
                </h3>
                <p className="mt-1 flex-1 text-xs leading-5 text-brand-ink/55">
                  {p.line}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-primary">
                  Get pricing
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brand-ink/50">{productsNote}</p>
      </div>
    </section>
  );
}
