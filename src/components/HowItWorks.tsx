"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    phase: "Week 1–2",
    title: "Discovery & Audit",
    description:
      "We analyze your current operations, tech stack, and workflows. We identify exactly where AI creates the biggest impact — and the quick wins you can deploy this week.",
    details: [
      "Full brokerage workflow audit",
      "Tech stack compatibility review",
      "Revenue opportunity mapping",
      "Custom AI deployment roadmap",
    ],
  },
  {
    phase: "Week 2–4",
    title: "Build & Deploy",
    description:
      "We build your AI agents, configure your workflows, and install your automated systems. You learn how everything works so you own it completely.",
    details: [
      "Custom AI agent configuration",
      "Workflow automation setup",
      "Website & marketing deployment",
      "Hands-on team training",
    ],
  },
  {
    phase: "Ongoing",
    title: "Scale & Optimize",
    description:
      "Your AI systems go live. We monitor performance, optimize results, and continuously expand capabilities. Your brokerage gets smarter every week.",
    details: [
      "Performance monitoring & tuning",
      "Continuous coaching & support",
      "New capability deployment",
      "Competitive advantage expansion",
    ],
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="approach" className="relative py-24 lg:py-32 bg-accent-light">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[13px] uppercase tracking-[0.12em] text-accent font-medium mb-5">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-serif font-medium leading-[1.15] tracking-tight">
            From zero AI to full operations in 90 days.
          </h2>
          <p className="text-text-2 text-lg mt-5 leading-relaxed">
            No fluff. No theory. Real AI systems installed into your brokerage,
            with training so you can run them independently.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="card p-8 md:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="lg:w-48 flex-shrink-0">
                  <span className="inline-block text-[12px] uppercase tracking-[0.1em] font-medium text-accent bg-accent/8 px-3 py-1.5 rounded-full">
                    {step.phase}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-2 leading-relaxed mb-6 max-w-2xl">
                    {step.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm text-text-2">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
