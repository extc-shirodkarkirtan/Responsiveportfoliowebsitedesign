import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  summary: string;
  bullets: string[];
  range: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

export function ServiceCard({ title, summary, bullets, range, onCtaClick, backgroundImage }: ServiceCardProps) {
  return (
    <div 
      className="rounded-2xl border border-[#E5E7EB] transition-all hover:shadow-lg flex flex-col w-full sm:rounded-xl p-4 md:p-5 xl:p-7 h-full relative overflow-hidden"
      style={{ 
        gap: '12px',
        boxShadow: '0 8px 24px rgba(17, 24, 39, 0.06)'
      }}
    >
      {/* Background Image Layer */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
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
      
      {/* Content - positioned above background */}
      <div className="relative z-10 flex flex-col h-full" style={{ gap: '12px' }}>
        {/* Title - H4 22/30 semibold, max 2 lines */}
        <h4 
          className="line-clamp-2"
          style={{
            fontSize: '22px',
            lineHeight: '30px',
            fontWeight: 600,
            minHeight: '60px'
          }}
        >
          {title}
        </h4>
        
        {/* Summary - Body 16/24, margin-top 8 */}
        <p 
          className="text-[#374151]"
          style={{
            marginTop: '8px',
            fontSize: '16px',
            lineHeight: '24px',
            minHeight: '48px'
          }}
        >
          {summary}
        </p>
        
        {/* Bullets - spacing 8, exactly 4 bullets */}
        <ul 
          className="flex flex-col"
          style={{
            gap: '8px',
            marginTop: '12px'
          }}
        >
          {bullets.slice(0, 4).map((bullet, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2 text-[#374151]"
              style={{
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              <span 
                className="rounded-full bg-[#2563EB] flex-shrink-0"
                style={{
                  width: '4px',
                  height: '4px',
                  marginTop: '10px',
                  opacity: 0.6
                }}
              />
              <span className="flex-1">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Spacer - fills remaining space to push footer to bottom */}
        <div className="flex-grow" />

        {/* Footer row - height 44, space-between */}
        <div 
          className="flex items-center justify-between gap-3"
          style={{
            minHeight: '44px',
            marginTop: '24px'
          }}
        >
          {/* Range pill - height 32, radius 999, padding 8/14, type 14/20 */}
          <div 
            className="inline-flex items-center rounded-full bg-[#F6F8FB] text-[#111827]"
            style={{
              height: '32px',
              paddingLeft: '14px',
              paddingRight: '14px',
              fontSize: '14px',
              lineHeight: '20px'
            }}
          >
            {range}
          </div>
          
          {/* CTA Link - 16/24 semibold, hover underline */}
          <button
            onClick={onCtaClick}
            className="text-[var(--accent-600)] hover:text-[var(--accent-700)] hover:underline transition-colors flex items-center gap-1 font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--accent-600)] focus:ring-offset-2 rounded"
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              minHeight: '44px'
            }}
          >
            View Scope
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}