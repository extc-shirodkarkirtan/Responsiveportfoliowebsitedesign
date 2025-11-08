import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { CubeLogo } from "./CubeLogo";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled ? "border-b" : ""
        }`}
        style={{ 
          height: '72px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottomColor: scrolled ? '#E9EDF5' : 'transparent',
          borderBottomWidth: scrolled ? '1px' : '0'
        }}
      >
        {/* Desktop Nav - Grid Layout */}
        <div className="h-full hidden xl:block">
          <div 
            className="mx-auto h-full grid items-center px-8 sm:px-3"
            style={{ 
              maxWidth: '1680px',
              gridTemplateColumns: '1fr auto 1fr'
            }}
          >
            {/* Left: Brand */}
            <div className="justify-self-start">
              <button
                onClick={() => handleNavClick("home")}
                className="flex items-center hover:opacity-80 transition-opacity"
                style={{ gap: '16px' }}
                aria-label="Kirtan Shirodkar Home"
              >
                <CubeLogo size={32} />
                <span 
                  className="font-medium text-[var(--ink-900)]"
                  style={{ fontSize: '16px', lineHeight: '24px' }}
                >
                  Kirtan Shirodkar
                </span>
              </button>
            </div>

            {/* Center: Nav Links */}
            <nav className="justify-self-center flex items-center" style={{ gap: '28px' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 transition-colors group ${
                    activePage === item.id
                      ? "text-[#1A4CE0]"
                      : "text-[#0B1220]"
                  }`}
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: 500, 
                    lineHeight: '24px',
                    letterSpacing: '0.2px'
                  }}
                >
                  {item.label}
                  {activePage === item.id && (
                    <span 
                      className="absolute bottom-0 bg-[#1A4CE0] rounded-full"
                      style={{ 
                        height: '2px', 
                        left: '8px', 
                        right: '8px' 
                      }}
                    />
                  )}
                  {activePage !== item.id && (
                    <span 
                      className="absolute bottom-0 bg-[#1A4CE0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ 
                        height: '2px', 
                        left: '8px', 
                        right: '8px' 
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right: CTA Button */}
            <div className="justify-self-end">
              <button
                onClick={() => handleNavClick("contact")}
                className="bg-[#1A4CE0] text-white hover:bg-[#1742C7] transition-all"
                style={{ 
                  height: '44px',
                  padding: '0 20px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
              >
                Free 10-min Feasibility Check
              </button>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Nav - Unchanged */}
        <div className="h-full xl:hidden px-3">
          <div className="h-full flex items-center justify-between">
            {/* Left: Brand */}
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Kirtan Shirodkar Home"
            >
              <CubeLogo size={32} />
              <span className="font-medium text-[var(--ink-900)]">Kirtan Shirodkar</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--ink-900)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--surface)] pt-[60px] md:hidden">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-3 px-4 rounded-lg transition-colors ${
                  activePage === item.id
                    ? "bg-[var(--subsurface)] text-[var(--accent-600)]"
                    : "text-[var(--ink-700)] hover:bg-[var(--subsurface)]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              className="mt-4 bg-[var(--accent-600)] text-white hover:bg-[var(--accent-700)] rounded-xl h-12"
            >
              Free 10-min Feasibility Check
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
