import { Mail, Phone, CheckSquare } from "lucide-react";

interface MobileStickyBarProps {
  onFeasibilityClick: () => void;
}

export function MobileStickyBar({ onFeasibilityClick }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[var(--surface)] border-t border-[var(--border-200)] shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-[var(--border-200)]">
        <button
          onClick={onFeasibilityClick}
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[var(--subsurface)] transition-colors min-h-[44px]"
          aria-label="Feasibility Check"
        >
          <CheckSquare size={20} className="text-[var(--accent-600)]" />
          <span className="text-xs text-[var(--ink-700)]">Feasibility</span>
        </button>
        <a
          href="mailto:hello@designedbykirtan.in"
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[var(--subsurface)] transition-colors min-h-[44px]"
          aria-label="Email"
        >
          <Mail size={20} className="text-[var(--ink-700)]" />
          <span className="text-xs text-[var(--ink-700)]">Email</span>
        </a>
        <a
          href="tel:+1234567890"
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[var(--subsurface)] transition-colors min-h-[44px]"
          aria-label="Call"
        >
          <Phone size={20} className="text-[var(--ink-700)]" />
          <span className="text-xs text-[var(--ink-700)]">Call</span>
        </a>
      </div>
    </div>
  );
}
