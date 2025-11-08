import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface ScopeModalENCProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestProposal: () => void;
  onFeasibilityCheck: () => void;
}

export function ScopeModalENC({
  open,
  onOpenChange,
  onRequestProposal,
  onFeasibilityCheck,
}: ScopeModalENCProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[720px] w-[90%] p-0 gap-0 rounded-[20px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <DialogHeader className="p-7 pb-6 border-b border-[#E5E7EB]">
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-[20px] leading-[28px] font-semibold pr-8">
              Scope — Device Enclosure (consumer electronics)
            </DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-lg p-2 hover:bg-[var(--subsurface)] transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X size={20} className="text-[var(--ink-700)]" />
            </button>
          </div>
          <DialogDescription className="sr-only">
            Detailed scope and pricing for Device Enclosure service
          </DialogDescription>
        </DialogHeader>

        {/* Body - Two column on desktop, single on mobile */}
        <div className="p-7 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - 2/3 */}
            <div className="lg:col-span-2 space-y-6">
              {/* What's included */}
              <section>
                <h4 className="mb-3">What's included</h4>
                <ul className="space-y-2 text-[var(--ink-700)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Constraints capture (boards/ports/fasteners/keep-outs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Concept CAD with internal features (bosses, standoffs, snap-fits)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>2 iterations with fit-checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>3–4 product renders (consistent lighting)</span>
                  </li>
                </ul>
              </section>

              {/* What's needed from you */}
              <section>
                <h4 className="mb-3">What's needed from you</h4>
                <ul className="space-y-2 text-[var(--ink-700)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Board outline + port locations (STEP/DXF) or dimensioned drawing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Height constraints, fastening approach, target process/material, deadline</span>
                  </li>
                </ul>
              </section>

              {/* Timeline */}
              <section>
                <h4 className="mb-3">Timeline</h4>
                <p className="text-[var(--ink-700)]">
                  5 business days from kickoff
                </p>
              </section>

              {/* Deliverables */}
              <section>
                <h4 className="mb-3">Deliverables</h4>
                <p className="text-[var(--ink-700)]">
                  STEP, STL, 3–4 renders, basic manufacturability notes (wall thicknesses, inserts)
                </p>
              </section>
            </div>

            {/* Right Sidebar - 1/3 */}
            <div className="space-y-4">
              {/* Price Range */}
              <div className="rounded-xl bg-[var(--subsurface)] border border-[var(--border-200)] p-4">
                <div className="text-[var(--muted-500)] mb-1">
                  <small>Price range</small>
                </div>
                <div className="font-semibold text-[var(--ink-900)]">
                  Typical €300–€600
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 text-[var(--ink-700)]">
                <div>
                  <div className="font-medium text-[var(--ink-900)] mb-1">Revisions</div>
                  <div>Two rounds included</div>
                </div>
                <div>
                  <div className="font-medium text-[var(--ink-900)] mb-1">Payment</div>
                  <div>50/50</div>
                </div>
                <div>
                  <div className="font-medium text-[var(--ink-900)] mb-1">Trust</div>
                  <div>NDA • IP on final payment</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2 pt-2">
                <Button
                  onClick={onRequestProposal}
                  className="w-full bg-[var(--accent-600)] text-white hover:bg-[var(--accent-700)] rounded-xl h-11"
                >
                  Request Proposal
                </Button>
                <Button
                  onClick={onFeasibilityCheck}
                  variant="outline"
                  className="w-full border-[var(--border-200)] text-[var(--ink-900)] hover:bg-[var(--subsurface)] rounded-xl h-11"
                >
                  Feasibility Check
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}