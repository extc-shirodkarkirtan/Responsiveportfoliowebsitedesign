import { useState } from "react";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { Button } from "../components/ui/button";
import { ButtonPrimary } from "../components/ButtonPrimary";
import waterTreatmentImage from "figma:asset/f6bd03b8bd8ca09184547a278c6d164e309ccdc6.png";
import toolHoldersImage from "figma:asset/8f94314db48e4a9e405f39a456524c0b951ae867.png";
import buttonPresserImage from "figma:asset/5a9bbcf4bf4bd27731236306c9eeb966cdd941c9.png";
import footScannerImage from "figma:asset/dc37c33a5884c7a4ec67a07028b30cd6e7b6ce2f.png";
import tabletHolderImage from "figma:asset/61aceda7f613f78789b23053e6d9c2b7df03e96f.png";
import medicalDryerImage from "figma:asset/856c09c601908cdf803d46d79c7f825e39dcbb20.png";
import umpireIndicatorImage from "figma:asset/8b7ca41070992a30329aaae62c3a971b6d1ea15f.png";
import automotiveGrilleCAD from "figma:asset/ce0c9d53dd1b74afe8d90d33bf943752f5a0b021.png";
import bmwVentHousing from "figma:asset/e87a4f95035895e8d834b82fdd89295f34d99a1d.png";

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
  onCaseStudyClick: (id: string) => void;
}

export function PortfolioPage({ onNavigate, onCaseStudyClick }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Enclosures", "Scan-to-CAD", "Concept Sprint"];

  const caseStudies = [
    {
      id: "bmw-reverse-engineering",
      category: "Scan-to-CAD",
      title: "BMW Reverse Engineering Series — Treedy Labs",
      summary: "30+ BMW components from E30, E36, E46 generations reconstructed with OEM precision—60% faster pipeline, ~1 day per part, perfect fitment.",
      metric: "30+ parts delivered",
      thumbnail: bmwVentHousing,
    },
    {
      id: "automotive-grille",
      category: "Scan-to-CAD",
      title: "Automotive Grille Reconstruction",
      summary: "Reverse-engineered car grille from photos with hexagonal mesh and clip mounting—OEM-grade fit achieved in 5 days using only reference images.",
      metric: "5 days delivery",
      thumbnail: automotiveGrilleCAD,
    },
    {
      id: "umpire-indicator",
      category: "Concept Sprint",
      title: "Umpire Indicator",
      summary: "Functional umpire counter with quiet reset mechanism for balls, strikes, and outs—first iteration success with 30% faster assembly, fully 3D printable.",
      metric: "First iteration success",
      thumbnail: umpireIndicatorImage,
    },
    {
      id: "medical-dryer",
      category: "Enclosures",
      title: "Medical Dryer Enclosure",
      summary: "Compact hygienic medical dryer for Dott. Carlo Ventresca with integrated turbine fan—minimized seams for medical-grade hygiene, 1 week delivery.",
      metric: "1 week delivery",
      thumbnail: medicalDryerImage,
    },
    {
      id: "car-tablet-holder",
      category: "Enclosures",
      title: "Car Tablet Holder",
      summary: "Modular 3D-printable mount integrating tablet, charger, and holder—secure OEM-style fit achieved through 3 iteration cycles with support-free printing.",
      metric: "3 iteration cycles",
      thumbnail: tabletHolderImage,
    },
    {
      id: "dime-foot-scanner",
      category: "Enclosures",
      title: "DIME Foot Scanner Enclosure",
      summary: "Precision medical device enclosure for Kan Innovations combining aluminum and acrylic—CNC-ready design delivered in 10 business days.",
      metric: "10 business days delivery",
      thumbnail: footScannerImage,
    },
    {
      id: "automatic-button-presser",
      category: "Concept Sprint",
      title: "Automatic Button Pressing Machine",
      summary: "Compact, modular 3D-printable mechanism with yoke and scotch system for continuous button pressing—support-free design, first-print success.",
      metric: "First-print success",
      thumbnail: buttonPresserImage,
    },
    {
      id: "ardelis-tool-holders",
      category: "Scan-to-CAD",
      title: "Custom 3D Printed Tool Holders",
      summary: "30+ precision tool holders from 3D scans for Ardelis Innovations, with multi-material printing and ±0.15mm tolerances for perfect first-print fit.",
      metric: "30+ holders, first-print fit",
      thumbnail: toolHoldersImage,
    },
    {
      id: "water-treatment-system",
      category: "Concept Sprint",
      title: "Water Treatment System in Truck",
      summary: "Complete 3D design and animated simulation of mobile water purification system on trailer truck, from 2D drawing to photorealistic flow visualization.",
      metric: "2 follow-up projects secured",
      thumbnail: waterTreatmentImage,
    },
  ];

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-12 md:py-14 xl:py-32 bg-[var(--surface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
          <h1 className="mb-4 text-center">Portfolio</h1>
          <p className="text-[var(--ink-700)] text-center mx-auto sm:max-w-full" style={{ maxWidth: '720px' }}>
            A selection of enclosures, reverse-engineering projects, and concept sprints—from constraint to testable prototype.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-12 md:py-14 xl:py-32 bg-[var(--subsurface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-0 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '1120px' }}>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
            {filteredStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                {...study}
                onClick={() => onCaseStudyClick(study.id)}
              />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--muted-500)]">No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <ButtonPrimary onClick={() => onNavigate("contact")}>
          Free 10-min Feasibility Check
        </ButtonPrimary>
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-14 xl:py-24 bg-[var(--subsurface)]">
        <div className="mx-auto px-4 md:px-6 xl:px-3 max-w-[640px] md:max-w-[720px] xl:max-w-none" style={{ maxWidth: '720px' }}>
          <div className="text-center">
            <h2 className="mb-4">Have a Project in Mind?</h2>
            <p className="text-[var(--ink-700)] sm:max-w-full" style={{ marginBottom: '20px' }}>
              Let's discuss your requirements in a free 10-minute feasibility check.
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