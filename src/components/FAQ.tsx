"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is the free website really worth $50,000?",
    answer:
      "Yes. We build you the same caliber of custom, conversion-optimized brokerage website that design agencies charge $30K–$75K for. Same quality. Same functionality. The difference is how we build it — using AI tools and workflows that let us deliver in days what used to take months. That's the entire point: when you see what AI built, you understand what it can do for the rest of your business.",
  },
  {
    question: "What's the catch with the free offer?",
    answer:
      "There is no catch. You get a custom website and a complete AI audit, and you keep both whether you hire us or not. We do this because the deliverables are the proof — once you see what AI can do for your website and operations, most people want us to do it for the rest of their business. But if you don't? You still walk away with $80,000 in value.",
  },
  {
    question: "I'm not technical. Can I actually use this?",
    answer:
      "That's exactly who we built this for. Our approach is designed for brokers, not developers. We set up everything, then teach you to manage it in plain English. If you can use a smartphone, you can run your AI systems.",
  },
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "ChatGPT is a single tool you talk to. What we install is an entire AI workforce integrated into your operations — autonomous agents handling lead qualification, follow-ups, market analysis, and client communication around the clock, connected to your CRM and every tool you already use. They work while you sleep.",
  },
  {
    question: "What ROI should I expect?",
    answer:
      "Our average client sees a 47x return within the first year. That translates to roughly 12 hours saved per broker per week and 3.2x more deals closed in the first 90 days. Every plan includes a 30-day ROI guarantee — if your AI systems don't pay for themselves in the first month, we work free until they do.",
  },
  {
    question: "Will AI replace me or my agents?",
    answer:
      "No — it makes you dangerous. Think of it as giving every person on your team ten tireless assistants. AI handles the CRM updates, follow-up sequences, market reports, and compliance paperwork — so you can focus on what actually closes deals: relationships, negotiations, and strategy.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Launchpad gets your first AI agents running within two weeks. The full Accelerator transformation takes about four weeks. You'll see results within the first week — we prioritize quick wins that impact your pipeline immediately.",
  },
  {
    question: "What if AI technology changes?",
    answer:
      "That's why we teach frameworks, not just tools. Our coaching gives you the ability to evaluate and adopt new AI tools as they emerge — so you're never dependent on a single platform. Partner plan members get automatic upgrades as technology evolves.",
  },
  {
    question: "Do you work with teams or just solo brokers?",
    answer:
      "Both. Solo brokers who want to operate like a team of ten, and small teams of 3–15 who want to operate like a team of fifty. The AI systems scale with you.",
  },
];

function FAQItem({
  faq,
  isOpen,
  toggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[15px] font-medium text-dark pr-8 group-hover:text-accent transition-colors duration-300">
          {faq.question}
        </span>
        {isOpen ? (
          <Minus size={16} className="flex-shrink-0 text-accent" />
        ) : (
          <Plus size={16} className="flex-shrink-0 text-text-3" />
        )}
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
            <p className="text-text-2 text-[15px] leading-relaxed pb-6 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[13px] uppercase tracking-[0.12em] text-accent font-medium mb-5">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-serif font-medium leading-[1.15] tracking-tight">
            Everything you need to know.
          </h2>
        </motion.div>

        {isInView && (
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
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
