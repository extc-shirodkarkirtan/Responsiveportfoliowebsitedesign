import { useState, useEffect, useCallback, useRef } from "react";
import { TestimonialCardImage } from "./TestimonialCardImage";

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  imageUrl?: string;
  alt: string;
  isPlaceholder?: boolean;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Create extended array with duplicates: [1, 2, 3, 4, 5, 1', 2', 3']
  const extendedTestimonials = [...testimonials, testimonials[0], testimonials[1], testimonials[2]];
  const totalSlides = testimonials.length; // 5
  const totalVariants = 6; // indices 0-5

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      // If at index 5 (showing duplicates [1',2',3']), jump to index 0 (original [1,2,3])
      if (prev === 5) return 0;
      return prev + 1;
    });
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      // If at index 0, go to index 5 (will show duplicates, then auto-advance normally)
      if (prev === 0) return 5;
      return prev - 1;
    });
  }, []);

  // Auto-play functionality
  useEffect(() => {
    // Pause if hovered or has focus
    if (isHovered || hasFocus) {
      return;
    }

    // Auto-advance after 3.8s
    const timeout = setTimeout(() => {
      goToNext();
    }, 3800);

    return () => clearTimeout(timeout);
  }, [currentIndex, isHovered, hasFocus, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Calculate active dot index (map variant index to logical slide)
  const activeDotIndex = currentIndex % totalSlides;

  // Determine transition duration
  // index 5 → 0 should be instant to hide the loop reset
  const isInstantTransition = currentIndex === 5;
  const transitionDuration = prefersReducedMotion ? '1ms' : isInstantTransition ? '1ms' : '260ms';

  // Card dimensions
  const cardWidth = 360;
  const cardHeight = 216; // Single card with overlay text
  const gap = 24;
  const slideOffset = cardWidth + gap; // 384

  // Mobile: single card viewport (container - 6px for 3px margins each side), desktop: 3-card viewport
  // Use window width to calculate mobile card width
  const mobileCardWidth = isMobile && typeof window !== 'undefined' ? window.innerWidth - 6 : cardWidth;
  const viewportWidth = isMobile ? mobileCardWidth : (cardWidth * 3 + gap * 2); // mobile: vw-6 or 1128
  const mobileGap = 12; // Smaller gap on mobile as per spec
  const actualSlideOffset = isMobile ? mobileCardWidth + mobileGap : slideOffset;

  return (
    <div 
      className="relative flex flex-col items-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        // Resume after 1s delay
        setTimeout(() => setIsHovered(false), 1000);
      }}
      role="region"
      aria-label="Client testimonials carousel"
    >
      {/* Visually hidden announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Viewing testimonials {activeDotIndex + 1} through {Math.min(activeDotIndex + 3, totalSlides)} of {totalSlides}
      </div>

      {/* Viewport - Shows 3 cards desktop, 1 card mobile, radius 16, clip ON */}
      <div 
        className="relative overflow-hidden w-full sm:rounded-xl"
        style={{
          maxWidth: isMobile ? `${mobileCardWidth}px` : '1128px',
          height: `${cardHeight}px`,
          borderRadius: '16px',
        }}
      >
        {/* Track - Horizontal, Gap 24 desktop / 12 mobile, Padding 0, Clip OFF, Hug contents */}
        <div
          ref={trackRef}
          className="flex h-full transition-transform"
          style={{
            gap: isMobile ? `${mobileGap}px` : '24px',
            padding: '0',
            overflow: 'visible',
            transform: `translateX(-${currentIndex * actualSlideOffset}px)`,
            transitionDuration,
            transitionTimingFunction: 'ease-in-out',
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div 
              key={`slide-${index}`}
              style={{
                width: isMobile ? `${mobileCardWidth}px` : `${cardWidth}px`,
                flexShrink: 0
              }}
            >
              <TestimonialCardImage {...testimonial} isMobile={isMobile} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots - 5 dots for 5 logical positions */}
      <div 
        className="flex justify-center"
        style={{ gap: '6px', marginTop: '12px', marginBottom: '8px' }}
      >
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => goToSlide(index)}
            onFocus={() => setHasFocus(true)}
            onBlur={() => {
              // Resume after 1s delay
              setTimeout(() => setHasFocus(false), 1000);
            }}
            className="transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-600)] focus:ring-offset-2 rounded-full"
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: index === activeDotIndex ? '#2563EB' : '#CBD5E1',
            }}
            aria-label={`Go to testimonial group ${index + 1}`}
            aria-current={index === activeDotIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
