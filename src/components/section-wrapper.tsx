"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  index: number;
  total: number;
  sectionTitle: string;
  sectionSubtitle?: string;
  bgImage?: string;
  bgOverlayOpacity?: number;
  bgParallax?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  index,
  total,
  sectionTitle,
  sectionSubtitle = "THE DUBAI MALL",
  bgImage,
  bgOverlayOpacity = 0.88,
  bgParallax = true,
}: SectionWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax mechanics synced with Lenis/GSAP scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calm depth animations (restrained cinematic parallax values)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.01]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const paddedIndex = String(index).padStart(2, "0");
  const paddedTotal = String(total).padStart(2, "0");

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black border-b border-white/[0.02] select-none"
    >
      {/* Background Graphic Canvas */}
      {bgImage && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            style={{ 
              y: bgParallax ? bgY : 0, 
              scale: bgParallax ? bgScale : 1,
              backgroundImage: `url(${bgImage})`
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-center origin-center filter brightness-[0.85] contrast-[1.05]"
          />
          {/* Hermès Editorial Vignette and Dark Tint overlay */}
          <div 
            className="absolute inset-0 bg-luxury-black transition-opacity duration-500"
            style={{ opacity: bgOverlayOpacity }}
            aria-hidden="true"
          />
          
          {/* Subtle gold radial lighting effect at center */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.04)_0%,transparent_75%)] pointer-events-none" 
            aria-hidden="true"
          />
        </div>
      )}

      {/* Floating Section Index HUD - Left Coordinates */}
      <div className="absolute top-10 left-8 sm:left-12 lg:left-16 z-20 pointer-events-none flex flex-col gap-1.5">
        <span className="font-sans text-[9px] tracking-[0.35em] text-luxury-gold uppercase font-semibold">
          {sectionSubtitle}
        </span>
        <span className="font-serif italic text-xs text-luxury-grey">
          {sectionTitle}
        </span>
      </div>

      {/* Floating Section Index HUD - Right Counter */}
      <div className="absolute top-10 right-8 sm:right-12 lg:right-16 z-20 pointer-events-none">
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.25em] text-white/40">
          <span className="text-luxury-gold font-bold">{paddedIndex}</span>
          <span className="mx-2 text-white/10">/</span>
          <span>{paddedTotal}</span>
        </span>
      </div>

      {/* Content Canvas within standard luxury editorial grid */}
      <motion.div
        style={{ y: bgParallax ? contentY : 0 }}
        className="w-full relative z-10 py-20 lg:py-24"
      >
        <div className="editorial-grid w-full h-full items-center">
          <div className="col-span-12">
            {children}
          </div>
        </div>
      </motion.div>

      {/* Elegant, restrained Scroll Anchor indicator (For slide 1) */}
      {index === 1 && (
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none hidden sm:flex">
          <span className="text-[8px] uppercase tracking-[0.35em] text-white/30 font-medium">
            Begin Experience
          </span>
          <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden" aria-hidden="true">
            <motion.div 
              animate={{ 
                y: ["-100%", "100%"] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold"
            />
          </div>
        </div>
      )}
    </section>
  );
}
