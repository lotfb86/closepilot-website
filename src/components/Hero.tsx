"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[13px] uppercase tracking-[0.12em] text-accent font-medium mb-6"
          >
            AI Coaching for Brokerages
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-medium leading-[1.1] tracking-tight text-dark"
          >
            A team of three, performing like a team of thirty.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-text-2 max-w-xl mt-7 leading-relaxed"
          >
            We install AI agents, intelligent workflows, and automated systems
            into small real estate and lending brokerages — so you can
            outperform anyone in your market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4 mt-10"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-dark text-base rounded-full text-[15px] font-medium hover:bg-dark-2 transition-colors duration-300"
            >
              Start your transformation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#approach"
              className="inline-flex items-center px-8 py-4 text-[15px] font-medium text-dark border border-border rounded-full hover:border-dark/30 transition-colors duration-300"
            >
              See our approach
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative element — subtle geometric */}
      <div className="hidden lg:block absolute top-32 right-12 xl:right-24 w-[380px] h-[460px] opacity-[0.04]">
        <svg viewBox="0 0 380 460" fill="none">
          <rect
            x="20"
            y="20"
            width="340"
            height="420"
            rx="8"
            stroke="#1A1F2E"
            strokeWidth="1"
          />
          <rect
            x="50"
            y="60"
            width="280"
            height="340"
            rx="6"
            stroke="#1A1F2E"
            strokeWidth="0.5"
          />
          <line
            x1="50"
            y1="200"
            x2="330"
            y2="200"
            stroke="#1A1F2E"
            strokeWidth="0.5"
          />
          <line
            x1="190"
            y1="60"
            x2="190"
            y2="400"
            stroke="#1A1F2E"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
