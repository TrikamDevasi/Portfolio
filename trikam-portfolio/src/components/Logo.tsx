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
        className={`${containerSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border border-white/10 group-hover:border-primary/40 transition-all duration-300 shadow-lg shadow-black/20 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated background glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
        
        <span className={`${sizes[size]} font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary via-white to-accent`}>
          T
        </span>
        <span className={`${sizes[size]} font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-accent/80 to-accent -ml-0.5`}>
          D
        </span>
      </motion.div>
      
      <span className="font-display font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors hidden sm:inline-block">
        Trikam<span className="text-muted-foreground group-hover:text-accent transition-colors">.</span>Devasi
      </span>
    </div>
  );
};

export default Logo;
