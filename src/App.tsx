import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactPage } from "./pages/ContactPage";
import { CaseStudyTemplate } from "./pages/CaseStudyTemplate";
import "./styles/globals.css";

type Page = "home" | "services" | "portfolio" | "contact" | "case-study" | "privacy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [currentCaseStudyId, setCurrentCaseStudyId] = useState<string>("");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleCaseStudyClick = (id: string) => {
    setCurrentCaseStudyId(id);
    setCurrentPage("case-study");
  };

  const handleBackToPortfolio = () => {
    setCurrentPage("portfolio");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "portfolio":
        return (
          <PortfolioPage
            onNavigate={handleNavigate}
            onCaseStudyClick={handleCaseStudyClick}
          />
        );
      case "contact":
        return <ContactPage />;
      case "case-study":
        return (
          <CaseStudyTemplate
            onBack={handleBackToPortfolio}
            onContactClick={() => handleNavigate("contact")}
            caseStudyId={currentCaseStudyId}
          />
        );
      case "privacy":
        return <PrivacyPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <MobileStickyBar onFeasibilityClick={() => handleNavigate("contact")} />
    </div>
  );
}

// Simple Privacy Page
function PrivacyPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-[800px] mx-auto px-[72px] lg:px-8 md:px-8 sm:px-[3px]">
          <h1 className="mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-[var(--ink-700)]">
            <p>
              This privacy policy outlines how Kirtan Shirodkar Design ("we", "our", or "us") collects,
              uses, and protects your personal information.
            </p>
            <div>
              <h3 className="mb-3">Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you fill out a
                contact form, request a quote, or communicate with us via email.
              </p>
            </div>
            <div>
              <h3 className="mb-3">How We Use Your Information</h3>
              <p>
                We use the information we collect to respond to your inquiries, provide our
                services, and communicate with you about your projects.
              </p>
            </div>
            <div>
              <h3 className="mb-3">Data Protection</h3>
              <p>
                We implement appropriate security measures to protect your personal information.
                NDAs are available upon request for all client projects.
              </p>
            </div>
            <div>
              <h3 className="mb-3">Contact Us</h3>
              <p>
                If you have any questions about this privacy policy, please contact us at
                hello@designedbykirtan.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}