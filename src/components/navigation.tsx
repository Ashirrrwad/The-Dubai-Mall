"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  sections: { id: string; label: string }[];
  activeSection: string;
}

export default function Navigation({ sections, activeSection }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Lenis automatically intercepts standard scrollIntoView to apply its luxury physics
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 select-none pointer-events-auto">
      <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/[0.05] bg-luxury-black/45 backdrop-blur-lg shadow-[0_24px_50px_-15px_rgba(0,0,0,0.9)]">
        {sections.map((section, idx) => {
          const isActive = activeSection === section.id;
          const paddedIndex = String(idx + 1).padStart(2, "0");

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center px-4 py-1.5 text-[9px] uppercase tracking-[0.25em] font-medium transition-colors duration-500 outline-none cursor-pointer"
              aria-label={`Navigate to slide ${idx + 1}: ${section.label}`}
            >
              {/* Framer Motion Shared Layout Gold Capsule Glow */}
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-luxury-gold/[0.06] border border-luxury-gold/30 rounded-full z-0 shadow-[0_0_15px_rgba(197,168,128,0.25)]"
                  transition={{ 
                    type: "spring", 
                    stiffness: 350, 
                    damping: 28 
                  }}
                />
              )}

              {/* Coordinates & Expanding text with intense gold drop-shadow glow */}
              <span 
                className={`relative z-10 flex flex-col items-center gap-1 transition-colors duration-500 py-1 ${
                  isActive 
                    ? "text-luxury-gold drop-shadow-[0_0_8px_rgba(197,168,128,0.65)] font-semibold" 
                    : "text-white/35 group-hover:text-white/80"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">{paddedIndex}</span>
                  
                  {/* Horizontal slide-reveal label */}
                  <span 
                    className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans tracking-[0.2em] text-[8px]"
                  >
                    {section.label}
                  </span>
                </div>

                {/* Snapping luxury gold glow underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-0.5 left-1 right-1 h-[1.5px] bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(197,168,128,0.7)]"
                    transition={{ 
                      type: 
                        "spring", 
                      stiffness: 350, 
                      damping: 28 
                    }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
