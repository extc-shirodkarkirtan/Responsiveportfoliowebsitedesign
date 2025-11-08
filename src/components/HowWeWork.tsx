import { Search, FileText, DollarSign, Target, CheckCircle, Package } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We capture constraints, boards, ports, and fit requirements.",
    },
    {
      icon: FileText,
      title: "Scope",
      description: "Clear deliverables and timeline documented upfront.",
    },
    {
      icon: DollarSign,
      title: "Fixed Quote (50/50)",
      description: "50% to start, 50% on delivery—no surprises.",
    },
    {
      icon: Target,
      title: "Milestones",
      description: "Concept review and fit-check iterations included.",
    },
    {
      icon: CheckCircle,
      title: "QA/Fit-Check",
      description: "Two revision rounds to ensure ±0.2 mm fit tolerance.",
    },
    {
      icon: Package,
      title: "Handoff",
      description: "STEP + STL + renders + notes PDF delivered.",
    },
  ];

  return (
    <section className="py-12 md:py-14 xl:py-32 mt-10 md:mt-12 xl:mt-0 bg-[var(--surface)]">
      <div className="mx-auto px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
        <h2 className="text-center mb-3 md:mb-4 xl:mb-4">How We Work</h2>
        <p className="text-center text-[var(--ink-700)] mb-4 md:mb-5 xl:mb-16 mx-auto sm:max-w-full" style={{ maxWidth: '720px' }}>
          A streamlined process from discovery to handoff—with fixed pricing and clear milestones.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="flex gap-3 md:gap-4 xl:gap-4 pb-4 md:pb-5 xl:pb-0 border-b xl:border-b-0 border-[var(--border-200)] last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <div 
                    className="w-12 h-12 rounded-xl bg-[var(--subsurface)] border border-[var(--border-200)] flex items-center justify-center"
                    style={{ minWidth: '48px', minHeight: '48px' }}
                  >
                    <Icon size={20} className="text-[var(--accent-600)]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[var(--ink-700)]">
                    <small>{step.description}</small>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
