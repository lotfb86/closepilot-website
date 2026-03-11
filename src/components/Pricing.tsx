"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Launchpad",
    price: "2,497",
    period: "one-time",
    description:
      "Your first AI wins. Proven systems deployed into your brokerage within two weeks.",
    features: [
      "Full brokerage workflow audit",
      "3 custom AI agents deployed",
      "Lead nurturing automation",
      "AI-powered website build",
      "2 weeks hands-on training",
      "30 days of support",
    ],
    highlight: false,
  },
  {
    name: "Accelerator",
    price: "4,997",
    period: "one-time",
    description:
      "The complete transformation. We rebuild your entire operation with AI and train you to own it.",
    features: [
      "Everything in Launchpad",
      "10+ custom AI agents",
      "Complete workflow automation",
      "AI marketing campaign system",
      "Competitive intelligence setup",
      "Custom CRM integrations",
      "4 weeks intensive training",
      "90 days coaching & support",
    ],
    highlight: true,
  },
  {
    name: "Partner",
    price: "1,997",
    period: "/month",
    description:
      "Ongoing partnership. We continuously expand your AI operations as technology evolves.",
    features: [
      "Everything in Accelerator",
      "Unlimited agent deployment",
      "Monthly strategy sessions",
      "Priority support & coaching",
      "New tool integration",
      "Dedicated AI ops manager",
      "Quarterly performance reviews",
      "Early access to new capabilities",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-accent-light">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
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
            Every plan pays for itself within the first month.
          </h2>
          <p className="text-text-2 text-lg mt-5 leading-relaxed">
            The question isn&apos;t whether you can afford it. It&apos;s whether
            you can afford to wait.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
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
                  Most Popular
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
                href="#"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-dark hover:bg-white/90"
                    : "bg-dark text-base hover:bg-dark-2"
                }`}
              >
                Get Started
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
          30-day ROI guarantee — if your AI systems don&apos;t pay for
          themselves in the first month, we work free until they do.
        </motion.p>
      </div>
    </section>
  );
}
