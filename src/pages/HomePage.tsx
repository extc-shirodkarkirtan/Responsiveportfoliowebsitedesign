import { useState } from "react";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { ScopeModalS2C } from "../components/ScopeModalS2C";
import { ScopeModalENC } from "../components/ScopeModalENC";
import { ScopeModalCTS } from "../components/ScopeModalCTS";
import { HowWeWork } from "../components/HowWeWork";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { ButtonPrimary } from "../components/ButtonPrimary";

// Import testimonial images
import testiEric from "figma:asset/90909fb90557afb47e48354e3fa870ed3c9c1b54.png";
import testiDawid from "figma:asset/f6bd03b8bd8ca09184547a278c6d164e309ccdc6.png";
import testiPriyanka from "figma:asset/dc37c33a5884c7a4ec67a07028b30cd6e7b6ce2f.png";
import testiRV from "figma:asset/8f94314db48e4a9e405f39a456524c0b951ae867.png";
import testiVipul from "figma:asset/57a6c990a4f56fbeb4fb89b18bcb8783eea22178.png";

// Import service background images
import scanToCADImg from "figma:asset/5d54ca86b8d77db6c91df88455baa03fa2dc64ea.png";
import deviceEnclosureImg from "figma:asset/2c8cf4b1834e40dc7a489816db645ee5806bbf28.png";
import conceptPrototypeImg from "figma:asset/3b74b21d830b8deb9216fef433f642bbcfc2c198.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [modalOpen, setModalOpen] = useState<"s2c" | "enc" | "cts" | null>(null);

  const services = [
    {
      id: "s2c",
      title: "Scan-to-CAD Lite (Auto/Mech)",
      summary: "From mesh or photos to accurate, parametric CAD for printing or machining.",
      bullets: [
        "Mesh cleanup & alignment (STL/OBJ)",
        "Parametric rebuild in Fusion 360 with fit-check revisions (×2)",
        "Reverse-engineering from photos with supplied dimensions",
        "Deliverables: STEP + STL + notes PDF",
      ],
      range: "Typical €350–€700",
      backgroundImage: scanToCADImg,
    },
    {
      id: "enc",
      title: "Device Enclosure (consumer electronics)",
      summary: "From constraints to print-ready CAD with two iterations.",
      bullets: [
        "Constraints capture (boards/ports/fasteners)",
        "Concept CAD + internal features (bosses, standoffs, snap-fits)",
        "2 iterations with fit-checks",
        "Deliverables: STEP + STL + 3–4 renders",
      ],
      range: "Typical €300–€600",
      backgroundImage: deviceEnclosureImg,
    },
    {
      id: "cts",
      title: "Concept-to-Prototype Sprint",
      summary: "Two concepts, one chosen and detailed for real testing.",
      bullets: [
        "2 directions with quick renders",
        "Detailed chosen concept with 2D essentials",
        "BOM-lite (fasteners/materials)",
        "Deliverables: STEP + STL + 6–8 renders",
      ],
      range: "Typical €600–€1,200+",
      backgroundImage: conceptPrototypeImg,
    },
  ];

  const testimonials = [
    {
      name: "Eric Wallace",
      company: "Treedy Labs",
      quote: "Understood complex requirements for reverse-engineering car parts and delivered accurate, print-ready models faster than expected.",
      imageUrl: testiVipul, // Precision fitting (cylindrical)
      alt: "Precision fitting render — testimonial by Eric Wallace",
    },
    {
      name: "Dawid Greyling",
      company: "Ardelis Innovations",
      quote: "Seamless from start to finish — scan-to-CAD molds and holders were accurate and on schedule.",
      imageUrl: testiDawid, // Mold holder
      alt: "Mold holder render — testimonial by Dawid Greyling",
    },
    {
      name: "Priyanka Pote",
      company: "Kan Innovations",
      quote: "Responsive, creative and patient. Revisions were handled quickly, ensuring our enclosure fit our electronics.",
      imageUrl: testiPriyanka, // Enclosure frame
      alt: "Enclosure frame render — testimonial by Priyanka Pote",
    },
    {
      name: "R. V. Johnson",
      company: "Whitley Products",
      quote: "Creative, on time, and detailed. He did exactly the graph I envisioned and kept communication excellent throughout.",
      imageUrl: testiRV, // Mobile lab section
      alt: "Mobile lab section render — testimonial by R. V. Johnson",
    },
    {
      name: "Dr Vipul Tank",
      company: "Geminex Technologies",
      quote: "Kirtan exceeded all expectations on our latest product prototype. Communication was top-notch and the model quality was world-class.",
      imageUrl: testiEric, // Automotive bracket
      alt: "Automotive bracket render — testimonial by Dr Vipul Tank",
    },
  ];

  return (
    <div className="pt-[72px]">
      <Hero
        onFeasibilityClick={() => onNavigate("contact")}
        onViewWorkClick={() => onNavigate("portfolio")}
      />
      
      {/* Services Preview - Fixed-Scope Sprints */}
      <section className="py-12 md:py-14 xl:py-0 xl:pt-0 xl:mt-14 mt-8 md:mt-10 bg-[var(--surface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-0" style={{ maxWidth: '1120px' }}>
          <div className="text-center mb-4 md:mb-5 xl:mb-4 max-w-[640px] md:max-w-[720px] xl:max-w-none mx-auto">
            <h2 className="mb-3 md:mb-4 xl:mb-4">Fixed-Scope Sprints</h2>
            <p className="text-[var(--ink-700)] mx-auto sm:max-w-full xl:whitespace-nowrap">
              Predictable outcomes. Clear deliverables, timelines, and two iterations included—so you can test sooner and waste less.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-5 xl:gap-6 mb-10 md:mb-12 xl:mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onCtaClick={() => setModalOpen(service.id as "s2c" | "enc" | "cts")}
              />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate("services")}
              className="text-[var(--accent-600)] hover:text-[var(--accent-700)] font-medium"
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>

      <HowWeWork />

      {/* Testimonials */}
      <section className="py-12 md:py-14 xl:py-32 mt-10 md:mt-12 xl:mt-0 bg-[var(--surface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-6" style={{ maxWidth: '1120px' }}>
          <h2 className="text-center mb-5">What Clients Say</h2>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>

        {/* Section Divider */}
        <div className="mx-auto px-4 md:px-6 xl:px-6 mt-8" style={{ maxWidth: '1120px' }}>
          <div className="h-px bg-[#E5E7EB]" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-14 xl:py-32 bg-[var(--subsurface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-3" style={{ maxWidth: '720px' }}>
          <div className="text-center">
            <h2 className="mb-4">Ready to Start?</h2>
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

      {/* Modals */}
      <ScopeModalS2C
        open={modalOpen === "s2c"}
        onOpenChange={(open) => !open && setModalOpen(null)}
        onRequestProposal={() => {
          setModalOpen(null);
          onNavigate("contact");
        }}
        onFeasibilityCheck={() => {
          setModalOpen(null);
          onNavigate("contact");
        }}
      />
      <ScopeModalENC
        open={modalOpen === "enc"}
        onOpenChange={(open) => !open && setModalOpen(null)}
        onRequestProposal={() => {
          setModalOpen(null);
          onNavigate("contact");
        }}
        onFeasibilityCheck={() => {
          setModalOpen(null);
          onNavigate("contact");
        }}
      />
      <ScopeModalCTS
        open={modalOpen === "cts"}
        onOpenChange={(open) => !open && setModalOpen(null)}
        onRequestProposal={() => {
          setModalOpen(null);
          onNavigate("contact");
        }}
        onFeasibilityCheck={() => {
          setModalOpen(null);
          onNavigate("contact");
        }}
      />
    </div>
  );
}