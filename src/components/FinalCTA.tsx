"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 spotlight" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-accent-2/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Your Competitors Are Adopting AI{" "}
            <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mt-6 leading-relaxed">
            Every week you wait, the gap gets wider. The brokerages that move
            first will dominate their markets. The ones that don&apos;t will
            wonder what happened.
          </p>
          <p className="text-base text-foreground/80 max-w-xl mx-auto mt-4">
            This isn&apos;t hype. This is the new reality of real estate. And
            we&apos;re the team that makes sure you&apos;re on the right side of
            it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#pricing"
              className="btn-primary group flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white"
            >
              Start Your AI Transformation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <p className="text-sm text-muted mt-6">
            Limited spots available. We only work with 10 new brokerages per
            month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
