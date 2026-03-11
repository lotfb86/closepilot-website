import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Close<span className="text-accent">Pilot</span>
              </span>
            </a>
            <p className="text-sm text-muted leading-relaxed">
              AI coaching and systems for real estate and lending brokerages.
              Turning small shops into market leaders.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "AI Agent Deployment",
                "Workflow Automation",
                "Website Development",
                "Marketing Campaigns",
                "Competitive Intelligence",
                "AI Training & Coaching",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#" },
                { label: "Results", href: "#results" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:hello@closepilot.ai"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  hello@closepilot.ai
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-accent flex-shrink-0" />
                <span className="text-sm text-muted">Schedule a Call</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted">
                  Working with brokerages nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} ClosePilot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
