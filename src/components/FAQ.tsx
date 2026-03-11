"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "I'm not technical at all. Can I actually use this?",
    answer:
      "Absolutely. That's exactly who we built this for. Our entire approach is designed for brokers, not developers. We set up everything for you, then teach you how to manage it in plain English. If you can use a smartphone, you can run your AI systems. Most of our clients had zero AI experience before working with us.",
  },
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "ChatGPT is a single tool — like having a calculator. What we build is an entire AI workforce integrated into your brokerage operations. We're talking about autonomous agents that handle lead qualification, follow-up sequences, market reports, listing descriptions, compliance docs, and marketing campaigns — all running automatically, 24/7, connected to your CRM, email, and every tool you use.",
  },
  {
    question: "What kind of ROI should I expect?",
    answer:
      "Our average client sees a 47x return on their investment within the first year. That breaks down to roughly 12 hours saved per broker per week, 3.2x more deals closed in the first 90 days, and significant reductions in operational costs. Every plan comes with a 30-day ROI guarantee.",
  },
  {
    question: "Will AI replace me or my agents?",
    answer:
      "No — it amplifies you. Think of it as giving every person on your team a team of 10 assistants. AI handles the repetitive, time-consuming work so you can focus on what actually closes deals: relationships, negotiations, and strategy. The brokers who win in the next 5 years won't be replaced by AI — they'll be the ones using it.",
  },
  {
    question: "How long does the full setup take?",
    answer:
      "Our Launchpad program gets your first AI agents running within 2 weeks. The full Accelerator transformation takes about 4 weeks. But you'll start seeing results within the first week — we prioritize quick wins that make an immediate impact on your pipeline and productivity.",
  },
  {
    question: "What if AI technology changes? Will my setup become outdated?",
    answer:
      "This is exactly why we teach you the principles, not just the tools. Our coaching gives you the framework to evaluate and adopt new AI tools as they emerge. Partner plan members get automatic upgrades as technology evolves. We've been in the AI space long enough to know how to build systems that adapt.",
  },
  {
    question: "Do you work with teams or just individual brokers?",
    answer:
      "Both. We work with solo brokers who want to operate like a team of 10, and we work with small teams of 3-15 who want to operate like a team of 50. The AI systems we build scale with you, so whether you're a one-person operation or a growing shop, the approach works.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  toggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base font-medium text-foreground pr-8 group-hover:text-accent transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-muted text-[15px] leading-relaxed pb-6 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Questions? <span className="gradient-text">Answered.</span>
          </h2>
        </motion.div>

        {isInView && (
          <div className="gradient-border rounded-2xl p-6 md:p-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
