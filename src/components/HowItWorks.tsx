"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    phase: "Free",
    title: "Your Free Website & AI Audit",
    description:
      "Book a meeting. We build you a custom $50K-value website and deliver a $30K AI audit of your operations — free, before you spend a dollar. You keep both no matter what.",
    details: [
      "Custom brokerage website",
      "Full operations AI audit",
      "Implementation roadmap",
      "Zero cost, zero obligation",
    ],
  },
  {
    phase: "Session 1",
    title: "Learn to Use AI in Your Business",
    description:
      "We sit down together and teach you how to build AI agents, design workflows, and automate the tasks that are eating your day. You leave this session with working systems already running.",
    details: [
      "Build your first AI agents",
      "Automate key workflows",
      "Set up marketing & content systems",
      "Configure your tools & integrations",
    ],
  },
  {
    phase: "Session 2",
    title: "Learn to Let AI Teach You",
    description:
      "This is the session that changes everything. We teach you how to use AI as your ongoing coach — so it keeps teaching you, keeps improving your systems, and keeps you ahead of the curve. After this, you don't need us anymore.",
    details: [
      "AI as your personal coach & advisor",
      "Self-improving systems & workflows",
      "Stay current without a consultant",
      "Complete independence from day one",
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
            Two sessions. Complete transformation.
          </h2>
          <p className="text-text-2 text-lg mt-5 leading-relaxed">
            We don&apos;t believe in long coaching programs. We believe in
            teaching you so well that you never need us again.
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
