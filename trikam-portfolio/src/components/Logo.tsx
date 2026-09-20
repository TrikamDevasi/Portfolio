import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  const containerSizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14"
  };

  return (
    <div className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <div
        className={`${containerSizes[size]} relative flex items-center justify-center rounded-lg bg-surface-elevated border border-border hover:border-border-hover transition-colors duration-200 overflow-hidden`}
      >
        <span className={`${sizes[size]} font-bold tracking-tight text-foreground`}>
          T
        </span>
        <span className={`${sizes[size]} font-bold tracking-tight text-primary -ml-0.5`}>
          D
        </span>
      </div>
      
      <span className="font-semibold tracking-tight text-foreground/90 hover:text-foreground transition-colors hidden sm:inline-block">
        Trikam<span className="text-muted-foreground">.</span>Devasi
      </span>
    </div>
  );
};

export default Logo;
