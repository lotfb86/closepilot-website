"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "The Transformation",
    price: "2,997",
    period: "one-time",
    description:
      "Two coaching sessions that fundamentally change how your business operates. We teach you to use AI — and we teach you to let AI keep teaching you after we're gone.",
    features: [
      "2 intensive 1-on-1 coaching sessions",
      "Learn to build and deploy AI agents",
      "Workflow automation setup",
      "AI-powered marketing & content",
      "Tool selection & configuration",
      "Learn to let AI become your ongoing coach",
      "Your free $50K website & $30K audit included",
    ],
    highlight: true,
  },
  {
    name: "Monthly Coaching",
    price: "997",
    period: "/month",
    description:
      "For those who want to keep going. One session per month where we bring you the latest AI tools, help you implement further, and keep your brokerage on the cutting edge.",
    features: [
      "1 coaching session per month",
      "Latest AI tools & techniques",
      "Continued implementation support",
      "New capability deployment",
      "Priority access between sessions",
      "Cancel anytime",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-accent-light">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[13px] uppercase tracking-[0.12em] text-accent font-medium mb-5">
            Investment
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-serif font-medium leading-[1.15] tracking-tight">
            Two meetings. That&apos;s all it takes.
          </h2>
          <p className="text-text-2 text-lg mt-5 leading-relaxed">
            After your free website and AI audit, we sit down twice and
            fundamentally change how your brokerage operates. No long programs.
            No drawn-out timelines. Just two sessions that transform everything.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-dark text-white ring-1 ring-dark"
                  : "card"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block text-[11px] uppercase tracking-[0.1em] font-medium text-white/50 bg-white/10 px-3 py-1 rounded-full mb-5">
                  The Core Program
                </span>
              )}

              <h3
                className={`text-lg font-semibold ${
                  plan.highlight ? "text-white" : "text-dark"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span
                  className={`text-4xl font-serif font-medium ${
                    plan.highlight ? "text-white" : "text-dark"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight ? "text-white/50" : "text-text-3"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`text-sm mt-3 leading-relaxed ${
                  plan.highlight ? "text-white/60" : "text-text-2"
                }`}
              >
                {plan.description}
              </p>

              <div className="space-y-3 mt-8 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "text-white/40" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-[14px] ${
                        plan.highlight ? "text-white/70" : "text-text-2"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#offer"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-dark hover:bg-white/90"
                    : "bg-dark text-base hover:bg-dark-2"
                }`}
              >
                Book a free consultation
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-text-2 mt-12"
        >
          Every engagement starts with your free $50K website and $30K AI
          audit — before you spend a dollar.
        </motion.p>
      </div>
    </section>
  );
}
