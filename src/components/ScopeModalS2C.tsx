import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface ScopeModalS2CProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRequestProposal: () => void;
  onFeasibilityCheck: () => void;
}

export function ScopeModalS2C({
  open,
  onOpenChange,
  onRequestProposal,
  onFeasibilityCheck,
}: ScopeModalS2CProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[720px] w-[90%] p-0 gap-0 rounded-[20px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <DialogHeader className="p-7 pb-6 border-b border-[#E5E7EB]">
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-[20px] leading-[28px] font-semibold pr-8">
              Scope — Scan-to-CAD Lite (Auto/Mech)
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
            Detailed scope and pricing for Scan-to-CAD Lite service
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
                    <span>Mesh cleanup & alignment (STL/OBJ)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Parametric rebuild in Fusion 360</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Reverse-engineering from photos (multi-angle images + supplied dimensions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>2 fit-check revisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Notes PDF with key dimensions & tolerances</span>
                  </li>
                </ul>
              </section>

              {/* What's needed from you */}
              <section>
                <h4 className="mb-3">What's needed from you</h4>
                <ul className="space-y-2 text-[var(--ink-700)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Mesh (STL/OBJ) <strong>or</strong> 6–12 photos (front/side/3-quarter/close-ups) on neutral background</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>At least 3 reference dimensions (mm) and material/process target (FDM/SLA/SLS/CNC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--accent-600)] mt-1">·</span>
                    <span>Deadline and critical features (holes/slots/mount points)</span>
                  </li>
                </ul>
              </section>

              {/* Timeline */}
              <section>
                <h4 className="mb-3">Timeline</h4>
                <p className="text-[var(--ink-700)]">
                  Typical 4–6 business days; rush +25% (subject to availability)
                </p>
              </section>

              {/* Deliverables */}
              <section>
                <h4 className="mb-3">Deliverables</h4>
                <p className="text-[var(--ink-700)]">
                  STEP, STL, notes PDF; optional DXF for 2D outlines
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
                  Typical €350–€700
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
                  <div>50% to start, 50% on handoff</div>
                </div>
                <div>
                  <div className="font-medium text-[var(--ink-900)] mb-1">Trust</div>
                  <div>NDA available • IP on final payment</div>
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
                  Free 10-min Feasibility
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 pt-6 border-t border-[var(--border-200)]">
            <p className="text-[var(--muted-500)]">
              <small>Photo-based reverse-engineering accuracy depends on angles and dimension references.</small>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}