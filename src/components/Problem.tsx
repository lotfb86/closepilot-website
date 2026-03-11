"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Users, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    title: "You Can't Hire Fast Enough",
    description:
      "The mega-brokerages have teams of 50. You have 3. They're outspending you on marketing, outpacing you on follow-ups, and outscaling you everywhere.",
  },
  {
    icon: Clock,
    title: "Manual Work is Eating You Alive",
    description:
      "You're spending 60% of your day on tasks that should take minutes — CRM updates, follow-up sequences, market reports, compliance docs. Every hour wasted is a deal lost.",
  },
  {
    icon: TrendingDown,
    title: "Your Tech Stack is Costing You Deals",
    description:
      "You're paying $2,000/month for tools that barely talk to each other. Meanwhile, your competitors have seamless workflows that nurture leads on autopilot.",
  },
  {
    icon: AlertTriangle,
    title: "AI Feels Overwhelming",
    description:
      "You know AI is the future. You've seen the headlines. But every time you try to figure it out, you get lost in a maze of tools, jargon, and half-baked solutions that don't work for real estate.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 spotlight-purple" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold text-accent-3 uppercase tracking-widest mb-4">
            The Reality
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Small Brokerages Are{" "}
            <span className="text-accent-3">Fighting With One Hand Tied</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
            You didn&apos;t get into real estate to do data entry. But right now,
            the biggest players are using technology to run circles around you.
          </p>
        </motion.div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="gradient-border card-hover rounded-2xl p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-3/10 flex items-center justify-center">
                    <Icon size={22} className="text-accent-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-[15px]">
                      {point.description}
                    </p>
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
