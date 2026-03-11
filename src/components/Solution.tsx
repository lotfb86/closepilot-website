"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Bot, Workflow, Globe, Target, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents That Work 24/7",
    description:
      "Deploy intelligent AI employees that handle lead qualification, follow-ups, market analysis, and client communication — while you sleep.",
    gradient: "from-accent to-accent-2",
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description:
      "Human-orchestrated automations that connect your entire operation. From lead capture to close, every step is optimized and automatic.",
    gradient: "from-accent-2 to-purple-400",
  },
  {
    icon: Globe,
    title: "$200K Websites for Dollars",
    description:
      "We show you how to build stunning, conversion-optimized websites that look like they cost a fortune — using AI tools that cost almost nothing.",
    gradient: "from-accent to-teal-400",
  },
  {
    icon: Target,
    title: "AI Marketing Campaigns",
    description:
      "Generate hyper-targeted marketing that speaks directly to your ideal clients. Social, email, direct mail — all powered by AI, all on brand.",
    gradient: "from-accent-3 to-amber-400",
  },
  {
    icon: BarChart3,
    title: "Competitive Intelligence",
    description:
      "Know what your competitors are doing before they do it. AI-powered market analysis that gives you an information advantage in every deal.",
    gradient: "from-accent-2 to-pink-400",
  },
  {
    icon: Zap,
    title: "Complete AI Operations",
    description:
      "From CRM automation to document generation to compliance workflows — we build you an AI-powered operating system for your entire brokerage.",
    gradient: "from-accent to-accent-2",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 spotlight" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            What We Build For You
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            Everything a{" "}
            <span className="gradient-text">50-Person Team Does</span>
            <br />
            Except It&apos;s Just AI
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
            We don&apos;t just teach you about AI. We install an AI workforce
            into your brokerage that outperforms any human team you could hire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
                className="gradient-border card-hover rounded-2xl p-7 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-5 opacity-90 group-hover:opacity-100 transition-opacity`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="text-muted leading-relaxed text-[15px]">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
