"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "47x", label: "Average return on AI investment" },
  { value: "12hr", label: "Saved per broker, per week" },
  { value: "3.2x", label: "More deals closed in 90 days" },
  { value: "96%", label: "Client retention rate" },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 lg:py-28 bg-dark text-base warm-texture">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] uppercase tracking-[0.12em] text-text-3 font-medium mb-5">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-[1.15] tracking-tight text-white">
              The mega-brokerages have teams of fifty. You have three. And right
              now, they&apos;re winning.
            </h2>
            <div className="space-y-5 mt-8">
              {[
                "They're outspending you on marketing, outpacing your follow-ups, and outscaling you in every direction.",
                "You're spending 60% of your day on tasks that should take minutes — CRM updates, follow-up sequences, market reports, compliance.",
                "You know AI is the answer. But every tool you've tried is either too complex, too generic, or doesn't understand real estate.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-white/60"
                >
                  {text}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-dark p-8 lg:p-10 flex flex-col items-start"
                >
                  <span className="text-4xl lg:text-5xl font-serif font-medium text-white">
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-white/50 mt-2 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
