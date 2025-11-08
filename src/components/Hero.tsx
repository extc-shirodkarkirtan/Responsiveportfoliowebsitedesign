import { ArrowRight } from "lucide-react";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import heroPatternBg from "figma:asset/123118abac4ef0da3d9be3e5f7b8948c7db6d535.png";

interface HeroProps {
  onFeasibilityClick: () => void;
  onViewWorkClick: () => void;
}

export function Hero({ onFeasibilityClick, onViewWorkClick }: HeroProps) {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-[#F6F8FB] to-[#FFFFFF] xl:min-h-[69vh] sm:min-h-[58.5vh] flex items-center"
      style={{ minHeight: '615px' }}
    >
      {/* Geometric Pattern Background - visible on all screen sizes */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroPatternBg})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: 'auto',
          opacity: 1,
        }}
      />
      
      {/* White Gradient Overlay for text contrast - visible on all screen sizes */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.60) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full pt-14 pb-8 md:pt-18 md:pb-10 xl:pb-14 xl:pt-0 px-4 md:px-6 xl:px-0" style={{ maxWidth: '1120px' }}>
        <div className="relative">
          {/* Background overlay under text */}
          <div 
            className="absolute inset-0 -mx-16 pointer-events-none sm:mx-0"
            style={{
              background: 'radial-gradient(ellipse 100% 80% at 50% 30%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
            }}
          />
          
          <div className="text-center relative max-w-[640px] md:max-w-[720px] xl:max-w-none mx-auto">
            {/* H1 - Three line layout */}
            <div className="mx-auto" style={{ maxWidth: '1120px' }}>
              <h1 
                className="text-[32px] leading-[40px] sm:text-[36px] sm:leading-[44px] md:text-[44px] md:leading-[52px] xl:text-[64px] xl:leading-[72px] mb-3 md:mb-4 xl:mb-3"
                style={{ 
                  letterSpacing: '0',
                }}
              >
                Product Design &<br />
                Reverse-Engineering<br />
                Consultant
              </h1>
            </div>
            
            {/* Subhead - max width 880px */}
            <div className="mx-auto" style={{ maxWidth: '880px' }}>
              <p 
                className="text-[15px] leading-[22px] sm:text-base sm:leading-6 md:text-base md:leading-[26px] xl:text-[18px] xl:leading-[23.4px] text-[var(--ink-700)] mb-3 md:mb-4 xl:mb-4"
              >
                Consumer-electronics enclosures & scan-to-CAD. <span className="font-semibold">Prototype-ready in 5 days.</span>
              </p>
            </div>

            {/* Single Metric Pill */}
            <div className="flex justify-center mb-4 md:mb-5 xl:mb-8">
              <div 
                className="inline-flex items-center rounded-full bg-[#F6F8FB] text-[var(--ink-900)] border border-[var(--border-200)] h-[26px] px-3 xl:h-[28px] xl:px-[14px]"
              >
                <small className="text-[12px] leading-[16px] sm:text-[13px] sm:leading-[18px]">5-day sprint</small>
              </div>
            </div>

            {/* CTAs - Centered horizontal on desktop */}
            <div className="flex flex-col items-center xl:flex-row xl:justify-center gap-3 md:gap-4 xl:gap-4 mb-4 md:mb-5 xl:mb-5">
              <ButtonPrimary onClick={onFeasibilityClick}>
                Free 10-min Feasibility Check
              </ButtonPrimary>
              <ButtonSecondary onClick={onViewWorkClick} icon={<ArrowRight size={18} />}>
                View Work
              </ButtonSecondary>
            </div>

            {/* Trust Line */}
            <div className="text-[var(--muted-500)] mx-auto" style={{ maxWidth: '880px' }}>
              <small className="text-[12px] leading-[18px] sm:text-[13px] sm:leading-[19px]">
                Invoices in EUR/USD/GBP • NDA on request • IP assignment on final payment • EU call slots weekly
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
