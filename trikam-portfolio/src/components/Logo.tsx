import React from 'react';
import { motion } from 'framer-motion';

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
    <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${containerSizes[size]} relative flex items-center justify-center rounded-lg bg-surface-elevated border border-border group-hover:border-border-hover transition-all duration-200 overflow-hidden`}
      >
        <span className={`${sizes[size]} font-bold tracking-tight text-foreground`}>
          T
        </span>
        <span className={`${sizes[size]} font-bold tracking-tight text-primary -ml-0.5`}>
          D
        </span>
      </motion.div>
      
      <span className="font-semibold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors hidden sm:inline-block">
        Trikam<span className="text-muted-foreground">.</span>Devasi
      </span>
    </div>
  );
};

export default Logo;
