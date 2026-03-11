"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Launchpad",
    price: "2,497",
    period: "one-time",
    description:
      "The quickest path to your first AI wins. Perfect for brokers who want to test the waters with proven systems.",
    features: [
      "Full brokerage workflow audit",
      "3 custom AI agents deployed",
      "Lead nurturing automation",
      "AI-powered website buildout",
      "2 weeks of hands-on training",
      "30 days of support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Accelerator",
    price: "4,997",
    period: "one-time",
    description:
      "The complete AI transformation. We rebuild your entire operation with AI and train you to run it independently.",
    features: [
      "Everything in Launchpad",
      "10+ custom AI agents deployed",
      "Complete workflow automation",
      "AI marketing campaign system",
      "Competitive intelligence setup",
      "Custom CRM integrations",
      "4 weeks of intensive training",
      "90 days of coaching & support",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Partner",
    price: "1,997",
    period: "/month",
    description:
      "Ongoing AI partnership. We continuously build, optimize, and expand your AI operations as technology evolves.",
    features: [
      "Everything in Accelerator",
      "Unlimited AI agent deployment",
      "Monthly strategy sessions",
      "Priority support & coaching",
      "New tool integration as released",
      "Dedicated AI operations manager",
      "Quarterly performance reviews",
      "Early access to new capabilities",
    ],
    cta: "Apply Now",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 spotlight-purple" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold text-accent-2 uppercase tracking-widest mb-4">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Choose Your{" "}
            <span className="gradient-text">Competitive Edge</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
            Every plan pays for itself within the first 30 days. The question
            isn&apos;t whether you can afford it — it&apos;s whether you can
            afford to wait.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 mt-16 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-accent/5 to-accent-2/5 border-2 border-accent/30"
                  : "gradient-border"
              } card-hover`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2 text-white text-xs font-semibold">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "text-accent" : "text-accent/70"
                      }`}
                    />
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlight
                    ? "btn-primary text-white"
                    : "btn-secondary text-foreground"
                }`}
              >
                {plan.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface-2 border border-border">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Check size={16} className="text-accent" />
            </div>
            <span className="text-sm text-muted">
              <strong className="text-foreground">
                30-Day ROI Guarantee.
              </strong>{" "}
              If your AI systems don&apos;t pay for themselves in the first
              month, we work for free until they do.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
