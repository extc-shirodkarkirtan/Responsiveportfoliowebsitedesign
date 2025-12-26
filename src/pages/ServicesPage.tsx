import { ArrowRight, Check, X } from "lucide-react";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonSecondary } from "../components/ButtonSecondary";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Import service background images
import scanToCADImg from "figma:asset/3edf636448910af1d0b147d545320c392284598f.png";
import deviceEnclosureImg from "figma:asset/76eb7c25255befe5261c9de74a63a2921c96a193.png";
import conceptPrototypeImg from "figma:asset/33d63a45e97c14aa6255e192e6cc4067f6f026fd.png";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      id: "scan",
      title: "Scan-to-CAD Lite (Auto/Mech)",
      timeline: "5–7 business days",
      summary: "From mesh to accurate, parametric CAD for printing or machining.",
      goodFor: "Replacement parts, legacy components, automotive parts",
      inclusions: [
        "Mesh cleanup & alignment",
        "Parametric rebuild in Fusion 360",
        "Critical dimension verification",
        "STEP + STL + notes PDF",
      ],
      exclusions: [
        "Full assembly modeling",
        "Material analysis",
        "Simulation setup",
      ],
      revisions: "2 fit-check revisions",
      rush: "+25% for rush delivery",
      range: "€30–€100",
      caseStudyId: "scan",
      backgroundImage: scanToCADImg,
    },
    {
      id: "enclosure",
      title: "Device Enclosure (consumer electronics)",
      timeline: "5 business days",
      summary: "From constraints to print-ready CAD with two iterations.",
      goodFor: "IoT devices, sensor housings, small electronics enclosures",
      inclusions: [
        "Constraints capture (boards, ports, fasteners)",
        "Concept CAD with internal features",
        "Bosses, standoffs, snap-fits",
        "STEP + STL + 3–4 renders",
      ],
      exclusions: [
        "Waterproofing design",
        "Certification drawings",
        "Tooling optimization",
      ],
      revisions: "2 fit-check iterations",
      rush: "+25% for 3-day delivery",
      range: "€50–€200",
      caseStudyId: "enclosure",
      backgroundImage: deviceEnclosureImg,
    },
    {
      id: "concept",
      title: "Concept-to-Prototype Sprint",
      timeline: "7–10 business days",
      summary: "Two concepts, one chosen and detailed for real testing.",
      goodFor: "New product development, form exploration, investor demos",
      inclusions: [
        "2 concept directions with renders",
        "Detailed chosen concept",
        "2D essentials (DXF/PDF)",
        "BOM-lite (fasteners, materials)",
        "STEP + STL + 6–8 renders",
      ],
      exclusions: [
        "Full DFM analysis",
        "Supplier sourcing",
        "Cost modeling",
      ],
      revisions: "2 design iterations",
      rush: "+25% for expedited delivery",
      range: "€100–€300",
      caseStudyId: "concept",
      backgroundImage: conceptPrototypeImg,
    },
  ];

  return (
    <div className="pt-[72px] bg-[#F7FAFF]">
      {/* Header */}
      <section className="py-12 md:py-14 xl:py-32 bg-[var(--surface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
          <h1 className="mb-4 text-center">Services</h1>
          <p className="text-[var(--ink-700)] text-center mx-auto sm:max-w-full" style={{ maxWidth: '840px' }}>
            Fixed-scope consulting sprints with clear deliverables and timelines—move from scan or idea to a testable prototype without delays or surprises.
          </p>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className="py-14 md:py-16 xl:py-20"
        >
          <div className="mx-auto px-4 md:px-5 xl:px-20 max-w-[1280px]">
            {/* Service Row Wrapper */}
            <div 
              className="bg-white rounded-lg p-6 md:p-8 xl:p-14 relative overflow-hidden" 
              style={{ boxShadow: '0 8px 32px rgba(16, 24, 40, 0.12)' }}
            >
              {/* Background Image Layer */}
              {service.backgroundImage && (
                <>
                  <div 
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `url(${service.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  {/* White overlay for text readability */}
                  <div 
                    className="absolute inset-0 z-0"
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)'
                    }}
                  />
                </>
              )}
              
              {/* Content Layer */}
              <div className="relative z-10">
                {/* Title & Description */}
                <div className="mb-6">
                  <h2 
                    className="mb-4" 
                    style={{ 
                      fontSize: '32px', 
                      lineHeight: '40px',
                      color: '#0B1220'
                    }}
                  >
                    {service.title}
                  </h2>
                  <p 
                    className="max-w-[68ch]"
                    style={{
                      fontSize: '16px',
                      lineHeight: '26px',
                      color: '#475467'
                    }}
                  >
                    {service.summary}
                  </p>
                </div>

                {/* Cards Row */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                  {/* Left Card: Timeline & Details */}
                  <div 
                    className="bg-white rounded-2xl border border-[#E6EAF0] p-6 xl:p-6 flex flex-col"
                    style={{
                      boxShadow: '0 6px 20px rgba(16, 24, 40, 0.06)'
                    }}
                  >
                    {/* Timeline Section */}
                    <div className="pb-4">
                      <div 
                        className="mb-2"
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 600,
                          color: '#101828'
                        }}
                      >
                        Timeline
                      </div>
                      <div className="h-[1px] bg-[#EDF2F7] mb-3 mx-[-8px]" />
                      <p style={{ fontSize: '14px', lineHeight: '22px', color: '#475467' }}>
                        {service.timeline}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#EDF2F7] my-4" />

                    {/* Typical Range Section */}
                    <div className="pb-4">
                      <div 
                        className="mb-2"
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 600,
                          color: '#101828'
                        }}
                      >
                        Typical Range
                      </div>
                      <div className="h-[1px] bg-[#EDF2F7] mb-3 mx-[-8px]" />
                      <p style={{ fontSize: '14px', lineHeight: '22px', color: '#475467' }}>
                        {service.range}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#EDF2F7] my-4" />

                    {/* Rush Option Section */}
                    <div className="pb-4">
                      <div 
                        className="mb-2"
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 600,
                          color: '#101828'
                        }}
                      >
                        Rush Option
                      </div>
                      <div className="h-[1px] bg-[#EDF2F7] mb-3 mx-[-8px]" />
                      <p style={{ fontSize: '14px', lineHeight: '22px', color: '#475467' }}>
                        {service.rush}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#EDF2F7] my-4" />

                    {/* Good For Section */}
                    <div className="flex-1">
                      <div 
                        className="mb-2"
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 600,
                          color: '#101828'
                        }}
                      >
                        Good For
                      </div>
                      <div className="h-[1px] bg-[#EDF2F7] mb-3 mx-[-8px]" />
                      <p style={{ fontSize: '14px', lineHeight: '22px', color: '#475467' }}>
                        {service.goodFor}
                      </p>
                    </div>
                  </div>

                  {/* Right Card: Included & Not Included */}
                  <div 
                    className="bg-white rounded-2xl border border-[#E6EAF0] p-6 xl:p-6 flex flex-col"
                    style={{
                      boxShadow: '0 6px 20px rgba(16, 24, 40, 0.06)'
                    }}
                  >
                    {/* Included Section */}
                    <div className="mb-6">
                      <div 
                        className="mb-3"
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 600,
                          color: '#101828'
                        }}
                      >
                        Included
                      </div>
                      <div className="h-[1px] bg-[#EDF2F7] mb-4 mx-[-8px]" />
                      <ul className="space-y-3">
                        {service.inclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 pl-6">
                            <Check 
                              size={18} 
                              className="flex-shrink-0 mt-0.5" 
                              style={{ color: '#22C55E', strokeWidth: 1.5 }}
                            />
                            <span style={{ fontSize: '14px', lineHeight: '22px', color: '#475467' }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included Section */}
                    <div className="flex-1">
                      <div 
                        className="mb-3"
                        style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: 600,
                          color: '#101828'
                        }}
                      >
                        Not Included
                      </div>
                      <div className="h-[1px] bg-[#EDF2F7] mb-4 mx-[-8px]" />
                      <ul className="space-y-3">
                        {service.exclusions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 pl-6">
                            <X 
                              size={18} 
                              className="flex-shrink-0 mt-0.5" 
                              style={{ color: '#98A2B3', strokeWidth: 1.5 }}
                            />
                            <span style={{ fontSize: '14px', lineHeight: '22px', color: '#475467' }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Revisions Card */}
                <div 
                  className="bg-white rounded-2xl border border-[#E6EAF0] p-6 xl:p-6 mb-7"
                  style={{
                    boxShadow: '0 6px 20px rgba(16, 24, 40, 0.06)'
                  }}
                >
                  <div 
                    className="mb-2"
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      fontWeight: 600,
                      color: '#101828'
                    }}
                  >
                    Revisions
                  </div>
                  <div className="h-[1px] bg-[#EDF2F7] mb-3 mx-[-8px]" />
                  <p style={{ fontSize: '14px', lineHeight: '22px', color: '#475467' }}>
                    {service.revisions}
                  </p>
                </div>

                {/* CTA Buttons Row - Centered */}
                <div className="flex flex-col xl:flex-row items-center justify-center gap-3">
                  {/* Primary CTA */}
                  <button
                    onClick={() => onNavigate("contact")}
                    className="inline-flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 hover:bg-[#1D4ED8] w-full xl:w-auto"
                    style={{
                      height: '44px',
                      padding: '0 20px',
                      borderRadius: '12px',
                      background: '#2563EB',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      fontWeight: 600,
                      lineHeight: '24px',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    Request a Proposal
                  </button>

                  {/* Secondary CTA */}
                  <button
                    onClick={() => onNavigate("portfolio")}
                    className="inline-flex items-center justify-center border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBD5E1] focus-visible:ring-offset-2 hover:bg-[#F9FAFB] w-full xl:w-auto"
                    style={{
                      height: '44px',
                      padding: '0 20px',
                      borderRadius: '12px',
                      background: '#FFFFFF',
                      borderColor: '#D0D5DD',
                      color: '#0B1220',
                      fontSize: '15px',
                      fontWeight: 600,
                      lineHeight: '24px',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                      gap: '8px'
                    }}
                  >
                    View Case Study
                    <ArrowRight size={16} style={{ strokeWidth: 1.5 }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-12 md:py-14 xl:py-20 bg-white">
        <div className="mx-auto px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
          <h2 className="mb-8 md:mb-10 xl:mb-12 text-center">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#E6EAF0] rounded-xl overflow-hidden bg-white"
              style={{
                boxShadow: '0 6px 20px rgba(16, 24, 40, 0.06)'
              }}
            >
              <thead className="bg-[#F9FAFB]">
                <tr>
                  <th className="text-left p-4 border-b border-[#E6EAF0]" style={{ fontSize: '14px', fontWeight: 600, color: '#101828' }}>Criteria</th>
                  <th className="text-left p-4 border-b border-[#E6EAF0]" style={{ fontSize: '14px', fontWeight: 600, color: '#101828' }}>Scan-to-CAD Lite</th>
                  <th className="text-left p-4 border-b border-[#E6EAF0]" style={{ fontSize: '14px', fontWeight: 600, color: '#101828' }}>Device Enclosure</th>
                  <th className="text-left p-4 border-b border-[#E6EAF0]" style={{ fontSize: '14px', fontWeight: 600, color: '#101828' }}>Concept Sprint</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-[#E6EAF0]">
                  <td className="p-4" style={{ fontSize: '14px', color: '#98A2B3' }}>Good for</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>Replacement parts</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>IoT enclosures</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>New product dev</td>
                </tr>
                <tr className="border-b border-[#E6EAF0]">
                  <td className="p-4" style={{ fontSize: '14px', color: '#98A2B3' }}>Timeline</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>5–7 days</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>5 days</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>7–10 days</td>
                </tr>
                <tr className="border-b border-[#E6EAF0]">
                  <td className="p-4" style={{ fontSize: '14px', color: '#98A2B3' }}>Deliverables</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>STEP + STL + notes</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>STEP + STL + renders</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>STEP + STL + renders + BOM</td>
                </tr>
                <tr className="border-b border-[#E6EAF0]">
                  <td className="p-4" style={{ fontSize: '14px', color: '#98A2B3' }}>Revisions</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>2 fit-checks</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>2 fit-checks</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>2 iterations</td>
                </tr>
                <tr>
                  <td className="p-4" style={{ fontSize: '14px', color: '#98A2B3' }}>Add-ons</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>Assembly modeling</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>Waterproofing, tooling</td>
                  <td className="p-4" style={{ fontSize: '14px', color: '#475467' }}>DFM, sourcing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 xl:py-20 bg-[var(--subsurface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-3 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '720px' }}>
          <div className="text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="text-[var(--ink-700)] sm:max-w-full" style={{ marginBottom: '20px' }}>
              Book a free 10-minute feasibility check to discuss your project requirements.
            </p>
            <div className="flex justify-center">
              <ButtonPrimary onClick={() => onNavigate("contact")}>
                Free 10-min Feasibility Check
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}