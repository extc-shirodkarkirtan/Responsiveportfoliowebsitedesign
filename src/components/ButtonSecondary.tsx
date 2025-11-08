import { ReactNode } from "react";

interface ButtonSecondaryProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function ButtonSecondary({ 
  children, 
  onClick, 
  icon, 
  disabled = false,
  type = "button"
}: ButtonSecondaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-xl bg-[#F4F5F7] text-[#0F172A] border border-[#E5E7EB] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 disabled:opacity-56 disabled:cursor-not-allowed hover:bg-[#ECEFF3] w-full xl:w-[180px] h-[44px] xl:h-[48px]"
      style={{
        padding: '10px 16px',
        fontSize: '15px',
        fontWeight: 600,
        lineHeight: '24px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        gap: '8px',
        borderRadius: '12px'
      }}
    >
      {children}
      {icon && <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>}
    </button>
  );
}
