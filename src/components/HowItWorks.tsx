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
    phase: "Week 1–4",
    title: "Hands-On Coaching",
    description:
      "We teach you to build and deploy AI agents, design automated workflows, and set up the systems that will run your brokerage. You learn by doing — with a coach guiding every step.",
    details: [
      "1-on-1 coaching sessions",
      "AI agent building training",
      "Workflow design & automation",
      "Tool setup & configuration",
    ],
  },
  {
    phase: "Ongoing",
    title: "Continuous Growth",
    description:
      "AI moves fast. Our ongoing coaching keeps you ahead — new tools, new techniques, new capabilities. Your brokerage gets smarter every month, and so do you.",
    details: [
      "Monthly coaching sessions",
      "New tool & technique training",
      "Strategy & performance reviews",
      "Priority support between sessions",
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
            Free deliverables first. Coaching when you&apos;re ready.
          </h2>
          <p className="text-text-2 text-lg mt-5 leading-relaxed">
            No fluff. No theory. We start by proving what AI can do — then
            we teach you to do it yourself.
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
