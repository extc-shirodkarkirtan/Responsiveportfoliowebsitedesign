interface TestimonialCardImageProps {
  name: string;
  company: string;
  quote: string;
  imageUrl?: string;
  alt: string;
  isPlaceholder?: boolean;
  showCaseStudy?: boolean;
  isMobile?: boolean;
}

export function TestimonialCardImage({
  name,
  company,
  quote,
  imageUrl,
  alt,
  isPlaceholder = false,
  showCaseStudy = false,
  isMobile = false,
}: TestimonialCardImageProps) {
  // Dynamic dimensions: mobile = viewport width - 6px, desktop = 360px fixed
  const cardWidth = isMobile && typeof window !== 'undefined' ? window.innerWidth - 6 : 360;
  const cardHeight = 216;

  return (
    <div 
      className="relative overflow-hidden flex-shrink-0 sm:rounded-xl"
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        borderRadius: '14px',
      }}
    >
      {/* 1. Base Blueprint Backdrop */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #ECEFF3 0%, #F6F8FB 100%)',
          backgroundImage: `
            linear-gradient(to bottom, #ECEFF3 0%, #F6F8FB 100%),
            linear-gradient(to right, rgba(37, 99, 235, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: 'auto, 40px 40px, 40px 40px',
          borderRadius: '14px',
        }}
      />

      {/* 2. Image_Main - Fit/Contain Mode, Centered (sharp, no blur) */}
      {!isPlaceholder && imageUrl && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}

      {/* 3. Base_Overlay - Desktop & Tablet */}
      <div 
        className="absolute inset-0 hidden sm:block"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(17, 24, 39, 0.10) 0%,
            rgba(17, 24, 39, 0.14) 55%,
            rgba(17, 24, 39, 0.26) 78%,
            rgba(17, 24, 39, 0.48) 100%
          )`,
          borderRadius: '14px',
        }}
      />

      {/* 3. Base_Overlay - Mobile (stronger bottom stop) */}
      <div 
        className="absolute inset-0 sm:hidden"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(17, 24, 39, 0.10) 0%,
            rgba(17, 24, 39, 0.14) 55%,
            rgba(17, 24, 39, 0.26) 78%,
            rgba(17, 24, 39, 0.56) 100%
          )`,
          borderRadius: '14px',
        }}
      />

      {/* 4. Side_Vignette - Left to Right gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to right,
            rgba(17, 24, 39, 0.18) 0%,
            rgba(17, 24, 39, 0.08) 30%,
            rgba(17, 24, 39, 0.02) 60%,
            rgba(17, 24, 39, 0.00) 100%
          )`,
          borderRadius: '14px',
        }}
      />

      {/* 5. Image_BlurBand - Masked blur layer (only under caption area) */}
      {!isPlaceholder && imageUrl && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(6px)',
            // Mask to show only bottom-left area (~70% width, bottom 45% height)
            maskImage: `linear-gradient(
              135deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 25%,
              rgba(255, 255, 255, 0.6) 45%,
              rgba(255, 255, 255, 0) 65%
            )`,
            WebkitMaskImage: `linear-gradient(
              135deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 25%,
              rgba(255, 255, 255, 0.6) 45%,
              rgba(255, 255, 255, 0) 65%
            )`,
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
            maskPosition: 'bottom left',
            WebkitMaskPosition: 'bottom left',
          }}
        />
      )}

      {/* 6. Text Group (no box, direct overlay with text shadow) */}
      <div 
        className="absolute flex flex-col px-4 md:px-5 xl:px-[14px] pb-[18px]"
        style={{ 
          left: '0',
          bottom: '0',
          maxWidth: '70%',
          gap: '6px',
        }}
      >
        <h3 
          className="text-white"
          style={{
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 600,
            letterSpacing: '-0.2px',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.45)',
          }}
        >
          {name} — {company}
        </h3>
        <p 
          className="text-[#F7FAFF] line-clamp-2 sm:line-clamp-3"
          style={{
            fontSize: '13px',
            lineHeight: '20px',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.45)',
          }}
        >
          "{quote}"
        </p>

        {isPlaceholder && (
          <div className="text-[#F7FAFF] opacity-70 italic" style={{ fontSize: '10px' }}>
            Blueprint backdrop active
          </div>
        )}
      </div>

      {/* Optional Case Study Pill - Bottom Right */}
      {showCaseStudy && (
        <div className="absolute bottom-3 right-3">
          <div 
            className="inline-flex items-center px-3 rounded-full text-white backdrop-blur-sm"
            style={{
              height: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              fontSize: '11px',
              lineHeight: '16px',
            }}
          >
            Case study
          </div>
        </div>
      )}
    </div>
  );
}
