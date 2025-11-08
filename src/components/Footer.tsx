import { Mail, Linkedin, Github } from "lucide-react";
import { CubeLogo } from "./CubeLogo";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
    { label: "Privacy", id: "privacy" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--subsurface)] border-t border-[var(--border-200)] mt-0 xl:mt-32">
      <div className="mx-auto py-12 md:py-14 xl:py-32 px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-12 mb-8 md:mb-10 xl:mb-12">
          {/* Left: Logo + Brand */}
          <div className="xl:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <CubeLogo size={32} />
              <span className="font-medium text-[var(--ink-900)]">Kirtan Shirodkar</span>
            </div>
            <p className="text-[var(--ink-700)]">
              Product Design & Reverse-Engineering Consultant — I help consumer-electronics teams ship fit-first enclosures and scan-to-CAD rebuilds—prototype-ready in 5 days.
            </p>
          </div>

          {/* Middle: Navigation */}
          <div className="xl:px-4">
            <h4 className="mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-[var(--ink-700)] hover:text-[var(--accent-600)] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Contact */}
          <div className="xl:pl-4">
            <h4 className="mb-4">Contact</h4>
            <a
              href="mailto:hello@designedbykirtan.in"
              className="text-[var(--accent-600)] hover:text-[var(--accent-700)] transition-colors flex items-center gap-2 mb-6"
            >
              <Mail size={18} />
              hello@designedbykirtan.in
            </a>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-700)] hover:text-[var(--accent-600)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-700)] hover:text-[var(--accent-600)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--border-200)]">
          <p className="text-[var(--muted-500)] text-center">
            <small>© {new Date().getFullYear()} Kirtan Shirodkar. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
}
