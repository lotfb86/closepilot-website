"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "We went from 4 closings a month to 13 in the first quarter. The AI agents handle our lead nurturing while we focus on relationships.",
    name: "Marcus Reynolds",
    title: "Reynolds Real Estate Group",
    result: "3.2x more closings",
  },
  {
    quote:
      "I was spending $4,500 a month on a VA and a marketing person. Now my AI handles both — better — for a fraction of the cost.",
    name: "Sarah Chen",
    title: "Principal Broker, Horizon Lending",
    result: "$48K saved annually",
  },
  {
    quote:
      "The website generates more leads than the $15K site I had before. The AI follow-up converts at 4x the rate of my old email campaigns.",
    name: "David Okonkwo",
    title: "Broker/Owner, Pinnacle Realty",
    result: "4x conversion rate",
  },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[13px] uppercase tracking-[0.12em] text-accent font-medium mb-5">
            Client Results
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-serif font-medium leading-[1.15] tracking-tight">
            The brokers who made the shift aren&apos;t going back.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card p-8 flex flex-col"
            >
              <span className="text-[12px] uppercase tracking-[0.1em] font-medium text-accent mb-6">
                {t.result}
              </span>

              <p className="text-dark text-[15px] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-medium text-dark text-sm">{t.name}</div>
                <div className="text-text-3 text-[13px] mt-0.5">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
