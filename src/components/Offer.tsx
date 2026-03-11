"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe, ClipboardCheck, Shield, Zap } from "lucide-react";

export default function Offer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offer" className="relative py-24 lg:py-32 bg-dark warm-texture">
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — The offer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] uppercase tracking-[0.12em] text-white/40 font-medium mb-5">
              The Offer
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-serif font-medium leading-[1.15] tracking-tight text-white">
              $80,000 in value. Yours free.
              <br />
              All we ask for is a meeting.
            </h2>
            <p className="text-lg text-white/60 mt-6 leading-relaxed">
              Book a consultation. That&apos;s it. No credit card, no contracts,
              no obligation. In return, we deliver two things before you ever
              spend a dollar:
            </p>

            <div className="space-y-8 mt-10">
              {/* Website */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Globe size={20} className="text-white/60" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      A custom brokerage website
                    </h3>
                    <span className="text-[12px] uppercase tracking-wider text-white/30 font-medium">
                      $50,000 value
                    </span>
                  </div>
                  <p className="text-[15px] text-white/50 leading-relaxed mt-2">
                    Not a template. A fully custom, conversion-optimized website
                    built specifically for your brand, your market, and your
                    listings. The same caliber of site your competitors paid a
                    design agency $50,000 to build — yours before you spend a
                    dime.
                  </p>
                </div>
              </div>

              {/* Audit */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <ClipboardCheck size={20} className="text-white/60" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      A complete AI operations audit
                    </h3>
                    <span className="text-[12px] uppercase tracking-wider text-white/30 font-medium">
                      $30,000 value
                    </span>
                  </div>
                  <p className="text-[15px] text-white/50 leading-relaxed mt-2">
                    A line-by-line analysis of your current operations —
                    identifying every place AI can save you hours, close more
                    deals, and cut costs. You get a custom implementation roadmap
                    you can start executing immediately, with or without us.
                  </p>
                </div>
              </div>
            </div>

            {/* Zero risk callout */}
            <div className="mt-10 flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <Shield size={18} className="text-white/40 flex-shrink-0 mt-0.5" />
              <p className="text-[14px] text-white/50 leading-relaxed">
                <span className="text-white/70 font-medium">Zero risk.</span>{" "}
                You keep everything — the website, the audit, the roadmap —
                whether you hire us or not. That&apos;s not a conditional offer.
                That&apos;s a promise.
              </p>
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-dark rounded-full text-[15px] font-medium hover:bg-white/90 transition-colors duration-300 mt-8"
            >
              Book your free consultation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <p className="text-[13px] text-white/30 mt-4">
              We take on 8 new brokerages per month. Currently accepting for
              April.
            </p>
          </motion.div>

          {/* Right — The logic */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pt-12"
          >
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Zap size={18} className="text-white/40" />
                <span className="text-[13px] uppercase tracking-[0.1em] font-medium text-white/40">
                  Why we give away $80K
                </span>
              </div>

              <h3 className="text-xl font-serif font-medium text-white leading-snug">
                Because the website is the pitch.
              </h3>

              <div className="space-y-4 mt-6">
                <p className="text-[15px] text-white/55 leading-relaxed">
                  We build your $50,000 website using the exact same AI tools
                  and workflows that we teach you to use. It&apos;s not a
                  template. It&apos;s not a shortcut. It&apos;s a real,
                  custom-built, premium website — created by AI under human
                  direction.
                </p>
                <p className="text-[15px] text-white/55 leading-relaxed">
                  When you see a website that would normally cost $50,000 get
                  built in days — using the exact system we&apos;re about to hand
                  you — you don&apos;t need a sales pitch anymore. You already
                  know what this is worth.
                </p>
                <p className="text-[15px] text-white/55 leading-relaxed">
                  The audit works the same way. We use AI to analyze your
                  operations at a depth that would take a consulting firm weeks
                  and tens of thousands of dollars. We do it in days. Then we
                  show you how to do it yourself.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[15px] text-white/70 font-medium italic">
                  &ldquo;We don&apos;t need to convince you AI works. We just
                  show you what it built.&rdquo;
                </p>
              </div>
            </div>

            {/* What's the catch */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 md:p-10 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                &ldquo;What&apos;s the catch?&rdquo;
              </h3>
              <p className="text-[15px] text-white/55 leading-relaxed">
                There isn&apos;t one. We give you $80,000 in real deliverables
                because we&apos;re betting on what happens next: once you see
                what AI did for your website and your operations audit, you&apos;ll
                want us to do it for the rest of your business. Most people do.
                But if you don&apos;t? You keep everything. That&apos;s the deal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
