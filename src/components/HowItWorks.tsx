"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    description:
      "We analyze your current operations, tech stack, and workflows. We identify exactly where AI can create the biggest impact — and the quickest wins you can deploy this week.",
    details: [
      "Full brokerage workflow audit",
      "Tech stack compatibility review",
      "Revenue opportunity mapping",
      "Custom AI deployment roadmap",
    ],
  },
  {
    number: "02",
    icon: Cpu,
    title: "Build & Deploy",
    description:
      "We build your AI agents, set up your intelligent workflows, and install your automated systems. You learn exactly how everything works so you own it completely.",
    details: [
      "Custom AI agent configuration",
      "Workflow automation setup",
      "Website & marketing deployment",
      "Hands-on training for your team",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Scale & Optimize",
    description:
      "Your AI systems go live. We monitor performance, optimize results, and continuously add new capabilities. Your brokerage gets smarter every single week.",
    details: [
      "Performance monitoring & tuning",
      "Ongoing coaching & support",
      "New agent deployment",
      "Competitive advantage expansion",
    ],
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 spotlight-purple" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold text-accent-2 uppercase tracking-widest mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            From Zero AI to{" "}
            <span className="gradient-text">Full Autopilot</span> in 90 Days
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
            No fluff. No theory. We install real AI systems into your brokerage
            and teach you how to run them like a pro.
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                className="gradient-border card-hover rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Step number and icon */}
                  <div className="flex items-center gap-5 lg:flex-shrink-0 lg:w-48">
                    <span className="text-5xl font-bold text-border-2 font-mono">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 border border-accent/20 flex items-center justify-center">
                      <Icon size={24} className="text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6 max-w-2xl">
                      {step.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-sm text-muted">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
