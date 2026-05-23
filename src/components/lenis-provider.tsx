"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4, // Slower, more elegant deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    // Synchronize Lenis scroll updates with ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Hook Lenis into GSAP's requestAnimationFrame pipeline
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);

    // Disable lag smoothing for high-frequency synchronization
    gsap.ticker.lagSmoothing(0);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  return <>{children}</>;
}
