import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-3 
    font-medium rounded transition-all duration-300 
    ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden
    before:content-[''] before:absolute before:top-0 before:-left-full 
    before:w-full before:h-full before:bg-gradient-to-r 
    before:from-transparent before:via-white/10 before:to-transparent 
    before:transition-[left] before:duration-600
    hover:before:left-full active:-translate-y-px
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  const variants = {
    primary: `
      text-white/80 no-underline bg-white/[0.03] border border-white/[0.173]
      hover:text-purple hover:bg-[rgba(161,150,223,0.15)] 
      hover:border-[rgba(161,150,223,0.3)] hover:-translate-y-1
      hover:shadow-[0_8px_25px_rgba(161,150,223,0.2),0_4px_12px_rgba(0,0,0,0.1)]
    `,
    secondary: `
      text-purple border border-purple/30 bg-purple/5
      hover:bg-purple/10 hover:border-purple/50 hover:-translate-y-1
      hover:shadow-[0_8px_25px_rgba(161,150,223,0.15)]
    `,
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const buttonClasses = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  const ExternalIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );

  const content = (
    <>
      {children}
      {external && <ExternalIcon />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
