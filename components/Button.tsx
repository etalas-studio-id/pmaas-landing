import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  fullWidth = false,
  className = '',
  href,
  ...props
}) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] group hover:scale-[1.02]";
  
  const variants = {
    // Primary: Uses primary color for background (Black in Light, White in Dark) and background color for text
    primary: "bg-primary text-background hover:opacity-90 focus:ring-primary shadow-[0_4px_14px_0_rgba(var(--primary),0.2)] hover:shadow-[0_6px_20px_rgba(var(--primary),0.3)]",
    
    // Secondary: Uses surface highlight. Text must be primary to be visible on light grey (Light Mode) or dark grey (Dark Mode).
    secondary: "bg-surfaceHighlight text-primary hover:bg-surfaceHighlight/80 focus:ring-muted border border-transparent hover:border-border",
    
    // Ghost: Transparent background, muted text that turns to primary on hover.
    ghost: "bg-transparent text-muted hover:text-primary hover:bg-surfaceHighlight/50",
    
    // Outline: Border color matches theme border, text is primary.
    outline: "border border-border bg-transparent text-primary hover:border-primary/50 hover:bg-primary/5",

    // Accent: Brand blue color, always white text. Good for call-to-actions that need to stand out from the monochrome theme.
    accent: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_4px_14px_0_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] border-transparent focus:ring-blue-500",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
      )}
    </>
  );

  if (href) {
    // Casting props to any to avoid TS conflict between ButtonHTMLAttributes and AnchorHTMLAttributes, 
    // though in a real strict env we should separate the interface.
    return (
      <a href={href} className={combinedClassName} {...(props as any)}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};