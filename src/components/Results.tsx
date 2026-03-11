"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We went from 4 closings a month to 13 in the first quarter. The AI agents handle our lead nurturing while we focus on relationships. It's not even close to what we were doing before.",
    name: "Marcus Reynolds",
    title: "Owner, Reynolds Real Estate Group",
    metric: "3.2x more closings",
  },
  {
    quote:
      "I was spending $4,500/month on a VA and a marketing person. Now my AI handles both, better, for a fraction of the cost. I actually feel like I have a competitive edge for the first time.",
    name: "Sarah Chen",
    title: "Principal Broker, Horizon Lending",
    metric: "$48K saved annually",
  },
  {
    quote:
      "The website they helped me build generates more leads than the $15K site I had before. And the AI follow-up system converts at 4x the rate of my old email campaigns.",
    name: "David Okonkwo",
    title: "Broker/Owner, Pinnacle Realty",
    metric: "4x conversion rate",
  },
];

const metrics = [
  { value: "340+", label: "Brokerages Transformed" },
  { value: "$2.1B", label: "In Additional Deal Volume" },
  { value: "47x", label: "Average ROI on AI Investment" },
  { value: "12hr", label: "Saved Per Broker, Per Week" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 spotlight" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-4">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Brokers Who Made the Shift Are{" "}
            <span className="gradient-text">Never Going Back</span>
          </h2>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 mb-16"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {metric.value}
              </div>
              <div className="text-sm text-muted mt-1">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="gradient-border card-hover rounded-2xl p-7 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold flex items-center gap-1">
                  <ArrowUpRight size={12} />
                  {testimonial.metric}
                </div>
              </div>

              <Quote
                size={20}
                className="text-border-2 mb-3 flex-shrink-0"
              />

              <p className="text-foreground/90 leading-relaxed text-[15px] flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </div>
                <div className="text-muted text-xs mt-0.5">
                  {testimonial.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
