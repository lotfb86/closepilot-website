"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Foundations",
    price: "2,497",
    period: "one-time",
    description:
      "Learn to build and deploy your first AI agents, workflows, and automations — with hands-on coaching every step of the way.",
    features: [
      "2 weeks of 1-on-1 coaching",
      "Learn to build AI agents from scratch",
      "Workflow automation training",
      "AI-powered website coaching",
      "Lead nurturing system setup",
      "Tool selection & configuration guidance",
      "30 days of follow-up support",
    ],
    highlight: false,
  },
  {
    name: "Mastery",
    price: "4,997",
    period: "one-time",
    description:
      "The complete AI coaching program. We teach you to rebuild your entire operation with AI — marketing, operations, intelligence, everything.",
    features: [
      "Everything in Foundations",
      "4 weeks of intensive coaching",
      "Advanced agent building techniques",
      "AI marketing & content systems",
      "Competitive intelligence training",
      "CRM & tool integration coaching",
      "Custom workflow design sessions",
      "90 days of follow-up support",
    ],
    highlight: true,
  },
  {
    name: "Ongoing",
    price: "1,997",
    period: "/month",
    description:
      "Continuous coaching as AI evolves. Stay ahead with monthly sessions, new techniques, and a dedicated coach in your corner.",
    features: [
      "Everything in Mastery",
      "Monthly 1-on-1 coaching sessions",
      "New tool & technique training",
      "Priority support between sessions",
      "AI strategy & roadmap updates",
      "Dedicated coaching relationship",
      "Quarterly business reviews",
      "First access to new capabilities",
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
            After your free website and audit, here&apos;s what comes next.
          </h2>
          <p className="text-text-2 text-lg mt-5 leading-relaxed">
            Every engagement starts with $80,000 in free deliverables. When
            you&apos;re ready to go deeper, every plan pays for itself within
            the first month.
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
          30-day ROI guarantee — if your AI systems don&apos;t pay for
          themselves in the first month, we work free until they do.
        </motion.p>
      </div>
    </section>
  );
}
