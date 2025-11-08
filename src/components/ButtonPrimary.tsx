import { ReactNode } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function ButtonPrimary({
  children,
  onClick,
  icon,
  disabled = false,
  type = "button",
}: ButtonPrimaryProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-xl bg-[#2563EB] text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 disabled:opacity-56 disabled:cursor-not-allowed hover:bg-[#1E55C5] active:bg-[#1849AD] w-full xl:w-[320px] h-[44px] xl:h-[48px]"
      style={{
        padding: "10px 18px",
        fontSize: "15px",
        fontWeight: 600,
        lineHeight: "24px",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
        gap: "8px",
        borderRadius: "12px",
      }}
    >
      {children}
      {icon && (
        <span
          style={{
            width: "18px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </span>
      )}
    </button>
  );
}
