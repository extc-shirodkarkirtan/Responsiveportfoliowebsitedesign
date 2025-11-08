interface CubeLogoProps {
  size?: number;
}

export function CubeLogo({ size = 32 }: CubeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top face - lightest */}
      <path
        d="M16 4L27 10L16 16L5 10L16 4Z"
        fill="#3B82F6"
      />
      
      {/* Left face - medium */}
      <path
        d="M5 10L5 22L16 28L16 16L5 10Z"
        fill="#1A4CE0"
      />
      
      {/* Right face - darkest */}
      <path
        d="M16 16L16 28L27 22L27 10L16 16Z"
        fill="#1742C7"
      />
      
      {/* Edge highlights for depth */}
      <path
        d="M16 4L27 10L16 16L5 10L16 4Z"
        stroke="#60A5FA"
        strokeWidth="0.5"
        strokeLinejoin="miter"
        fill="none"
      />
    </svg>
  );
}
