"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
  delay?: number;
  direction?: "up" | "down" | "fade";
}

export default function AnimatedHeading({
  text,
  className = "",
  tag = "h2",
  delay = 0,
  direction = "up",
}: AnimatedHeadingProps) {
  const words = text.split(" ");

  // Container variant to handle cascading staggers
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  // Restrained movement, luxury ease-out
  const childVariants = {
    hidden: {
      y: direction === "up" ? "110%" : direction === "down" ? "-110%" : 0,
      opacity: direction === "fade" ? 0 : 1,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as const, // Classic Hermès/Apple fluid decelerating ease
      },
    },
  };

  const Tag = tag;

  return (
    <Tag className={`relative block leading-[1.1] ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-block flex-wrap w-full"
      >
        {words.map((word, idx) => {
          // Check for luxury editorial italic tags (e.g., _The_ _Monolith_)
          const isItalic = word.startsWith("_") && word.endsWith("_");
          const cleanWord = isItalic ? word.slice(1, -1) : word;

          return (
            <span
              key={idx}
              className="inline-block overflow-hidden mr-[0.22em] last:mr-0 pb-[0.05em] align-top"
            >
              <motion.span
                variants={childVariants}
                className={`inline-block ${
                  isItalic 
                    ? "font-serif italic font-light text-luxury-gold tracking-wide" 
                    : ""
                }`}
              >
                {cleanWord}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
