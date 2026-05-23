"use client";

import React from "react";

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function PremiumButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: PremiumButtonProps) {
  // Shared base layout styles
  const baseStyles = 
    "group relative inline-block px-8 py-3.5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-500 rounded-none cursor-pointer overflow-hidden outline-none select-none";

  if (variant === "primary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} border border-luxury-gold text-luxury-gold bg-transparent ${className}`}
      >
        {/* Background slide-fill panel */}
        <span 
          className="absolute inset-0 bg-luxury-gold origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" 
          aria-hidden="true"
        />
        
        {/* Dynamic vertical rolling text */}
        <span className="relative z-10 block overflow-hidden h-[16px] leading-none w-full">
          <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[16px]">
            {/* Default State */}
            <span className="h-[16px] flex items-center justify-center text-luxury-gold group-hover:text-luxury-black font-semibold leading-none text-center">
              {children}
            </span>
            {/* Hover State (Serif Italic) */}
            <span className="h-[16px] flex items-center justify-center text-luxury-black font-serif italic font-medium lowercase leading-none text-center">
              {children}
            </span>
          </span>
        </span>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} border border-white/10 text-luxury-light bg-transparent hover:border-white/30 ${className}`}
      >
        {/* Subtle background glow */}
        <span 
          className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          aria-hidden="true"
        />
        
        {/* Dynamic vertical rolling text */}
        <span className="relative z-10 block overflow-hidden h-[16px] leading-none w-full">
          <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[16px]">
            {/* Default State */}
            <span className="h-[16px] flex items-center justify-center text-luxury-light font-semibold leading-none text-center">
              {children}
            </span>
            {/* Hover State (Muted Gold Serif Italic) */}
            <span className="h-[16px] flex items-center justify-center text-luxury-gold font-serif italic font-medium lowercase leading-none text-center">
              {children}
            </span>
          </span>
        </span>
      </button>
    );
  }

  // Text variant: Minimalist inline CTA with line swap
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-luxury-gold hover:text-luxury-light transition-colors duration-500 font-semibold cursor-pointer outline-none select-none ${className}`}
    >
      <span className="relative block overflow-hidden h-[16px] leading-none">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[16px]">
          <span className="h-[16px] flex items-center leading-none text-center">{children}</span>
          <span className="h-[16px] flex items-center font-serif italic text-luxury-light lowercase leading-none text-center">{children}</span>
        </span>
      </span>
      
      {/* Swapping Underline Effect */}
      <span 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold/30 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300 ease-out" 
        aria-hidden="true"
      />
      <span 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-light origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out delay-100" 
        aria-hidden="true"
      />
    </button>
  );
}
