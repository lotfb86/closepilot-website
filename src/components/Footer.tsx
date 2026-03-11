export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-xl font-serif font-semibold tracking-tight text-dark">
              ClosePilot
            </span>
            <p className="text-sm text-text-2 leading-relaxed mt-4">
              AI coaching and systems for real estate and lending brokerages.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "AI Agent Deployment",
                "Workflow Automation",
                "Website Development",
                "Marketing Systems",
                "Competitive Intelligence",
                "AI Training",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-text-2 hover:text-dark transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Approach", href: "#approach" },
                { label: "Results", href: "#results" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-text-2 hover:text-dark transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.1em] font-semibold text-dark mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@closepilot.ai"
                  className="text-sm text-text-2 hover:text-dark transition-colors duration-300"
                >
                  hello@closepilot.ai
                </a>
              </li>
              <li>
                <span className="text-sm text-text-2">
                  Nationwide · Remote
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-text-3">
            &copy; {new Date().getFullYear()} ClosePilot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] text-text-3 hover:text-dark transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
