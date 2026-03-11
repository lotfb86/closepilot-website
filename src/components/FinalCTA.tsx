"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32 bg-dark warm-texture">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-[2.75rem] font-serif font-medium leading-[1.15] tracking-tight text-white">
            Your competitors are adopting AI right now.
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mt-6 leading-relaxed">
            Every week you wait, the gap gets wider. The brokerages that move
            first will dominate their markets. We make sure you&apos;re one of them.
          </p>

          <a
            href="#pricing"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-dark rounded-full text-[15px] font-medium hover:bg-white/90 transition-colors duration-300 mt-10"
          >
            Start your transformation
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>

          <p className="text-[13px] text-white/40 mt-6">
            Limited to 10 new brokerages per month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
