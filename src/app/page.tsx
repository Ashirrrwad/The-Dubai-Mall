"use client";

import React from "react";
import LenisProvider from "../components/lenis-provider";
import Navigation from "../components/navigation";
import AnimatedHeading from "../components/animated-heading";
import PremiumButton from "../components/premium-button";
import SectionWrapper from "../components/section-wrapper";
import { X, Building, Calendar, DollarSign, Sparkles, Clock, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const sections = [
  { id: "archetype", label: "Intro" },
  { id: "monolith", label: "Scale" },
  { id: "shop", label: "Shop" },
  { id: "dine", label: "Dine" },
  { id: "stay", label: "Stay" },
  { id: "entertain", label: "Entertain" },
  { id: "investment", label: "Legacy" },
];

export default function PresentationDeck() {

 
  const handleLearnMore = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

 
  const [activeSection, setActiveSection] = React.useState("archetype");

  React.useEffect(() => {
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", 
      threshold: 0.2,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

 
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const brandVideos = [
    {
      title: "ATRIUM & FOUNTAINS",
      url: "/videos/atrium.mp4"
    },
    {
      title: "FASHION AVENUE CURATION",
      url: "/videos/fashion.mp4"
    },
    {
      title: "EPICUREAN LIFESTYLE",
      url: "/videos/lifestyle.mp4",
    },
    {
      title: "BURJ KHALIFA & SKYLINE",
      url: "/videos/burj khalifa.mp4",
    },
  ];

 
  const videoRef = React.useRef<HTMLVideoElement>(null);

  
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {
     
    });
  }, [currentVideoIndex]);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % brandVideos.length);
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + brandVideos.length) % brandVideos.length);
  };

  const [activeOverlay, setActiveOverlay] = React.useState<null | "leasing" | "events" | "sponsorship" | "videoIntro" | "shopInfo">(null);
  const [monolithView, setMonolithView] = React.useState<"video" | "blueprint">("video");
  const [selectedLeaseCategory, setSelectedLeaseCategory] = React.useState<"luxury" | "retail" | "f&b" | "pop-up">("luxury");
  const [selectedVenue, setSelectedVenue] = React.useState<"atrium" | "plaza" | "amphitheatre">("atrium");
  const [sponsorshipTier, setSponsorshipTier] = React.useState<"platinum" | "gold" | "editorial">("platinum");
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [shopInfo, setShopInfo] = React.useState<{title:string;description:string}|null>(null);

  const openLeasingWithDistrict = (category: "luxury" | "retail" | "f&b" | "pop-up") => {
    setSelectedLeaseCategory(category);
    setFormSubmitted(false);
    setActiveOverlay("leasing");
  };

  const openShopInfo = (title: string, description: string) => {
    setShopInfo({ title, description });
    setActiveOverlay("shopInfo");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  
  const hudVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 },
    },
  };

  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.25,
      },
    },
  };

  const titleWordVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const paraVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.65 },
    },
  };

  const metricsVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.8 },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const, delay: 1.0 },
    },
  };

  return (
    <LenisProvider>
    
      <header className="fixed top-0 left-0 w-full z-40 select-none pointer-events-auto">
        <div className="flex items-center justify-between px-6 sm:px-12 py-5 sm:py-6 backdrop-blur-md bg-luxury-black/35 border-b border-white/[0.04]">
      
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.4em] font-light text-white uppercase">
              THE DUBAI MALL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/70 animate-pulse" />
          </div>

         
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[9px] uppercase tracking-[0.2em] lg:tracking-[0.25em] font-semibold">
            <button
              onClick={() => handleLearnMore("monolith")}
              className={`transition-all duration-500 cursor-pointer relative pb-1 ${activeSection === "monolith"
                ? "text-luxury-gold drop-shadow-[0_0_8px_rgba(197,168,128,0.7)] font-bold"
                : "text-white/55 hover:text-white/90"
                }`}
            >
              Scale
              {activeSection === "monolith" && (
                <motion.div layoutId="headerUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold shadow-[0_0_8px_rgba(197,168,128,0.5)]" />
              )}
            </button>
            <button
              onClick={() => handleLearnMore("shop")}
              className={`transition-all duration-500 cursor-pointer relative pb-1 ${activeSection === "shop"
                ? "text-luxury-gold drop-shadow-[0_0_8px_rgba(197,168,128,0.7)] font-bold"
                : "text-white/55 hover:text-white/90"
                }`}
            >
              Shop
              {activeSection === "shop" && (
                <motion.div layoutId="headerUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold shadow-[0_0_8px_rgba(197,168,128,0.5)]" />
              )}
            </button>
            <button
              onClick={() => handleLearnMore("dine")}
              className={`transition-all duration-500 cursor-pointer relative pb-1 ${activeSection === "dine"
                ? "text-luxury-gold drop-shadow-[0_0_8px_rgba(197,168,128,0.7)] font-bold"
                : "text-white/55 hover:text-white/90"
                }`}
            >
              Dine
              {activeSection === "dine" && (
                <motion.div layoutId="headerUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold shadow-[0_0_8px_rgba(197,168,128,0.5)]" />
              )}
            </button>
            <button
              onClick={() => handleLearnMore("stay")}
              className={`transition-all duration-500 cursor-pointer relative pb-1 ${activeSection === "stay"
                ? "text-luxury-gold drop-shadow-[0_0_8px_rgba(197,168,128,0.7)] font-bold"
                : "text-white/55 hover:text-white/90"
                }`}
            >
              Stay
              {activeSection === "stay" && (
                <motion.div layoutId="headerUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold shadow-[0_0_8px_rgba(197,168,128,0.5)]" />
              )}
            </button>
            <button
              onClick={() => handleLearnMore("entertain")}
              className={`transition-all duration-500 cursor-pointer relative pb-1 ${activeSection === "entertain"
                ? "text-luxury-gold drop-shadow-[0_0_8px_rgba(197,168,128,0.7)] font-bold"
                : "text-white/55 hover:text-white/90"
                }`}
            >
              Entertain
              {activeSection === "entertain" && (
                <motion.div layoutId="headerUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold shadow-[0_0_8px_rgba(197,168,128,0.5)]" />
              )}
            </button>
          </div>

         
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => openLeasingWithDistrict("luxury")}
              className="px-4 py-1.5 border border-luxury-gold/30 hover:border-luxury-gold text-luxury-gold hover:text-white bg-luxury-gold/5 transition-all duration-500 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-semibold rounded-none cursor-pointer animate-[pulse_3s_ease-in-out_infinite]"
            >
              Leasing Portal
            </button>
          </div>
        </div>
      </header>

      
      <Navigation sections={sections} activeSection={activeSection} />

    
      <main className="w-full relative bg-luxury-black">

       
        <style>{`
          #shop .group img,
          #dine .group img,
          #stay .group img,
          #entertain .group img,
          #investment .group img {
            filter: brightness(1.1) contrast(1.05);
          }
        `}</style>

       
        <SectionWrapper
          id="archetype"
          index={1}
          total={6}
          sectionTitle="The Archetype"
          sectionSubtitle="THE DUBAI MALL"
          bgOverlayOpacity={0.92}
        >
         
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
            <video
              key={currentVideoIndex}
              ref={videoRef}
              src={brandVideos[currentVideoIndex].url}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-right filter brightness-[0.6] contrast-[1.2]"
            />
          </div>

          
          <div className="absolute inset-0 bg-luxury-black/60 z-10" />

          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(5,5,5,0.94)_95%)] z-15" />

          
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black z-20" />

          
          <div
            className="absolute top-[25%] left-[30%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none z-10"
            aria-hidden="true"
          />

          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl relative z-20"
          >
            
            <motion.div
              variants={hudVariants}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-luxury-gold/45" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-luxury-gold font-bold">
                Global Flagship
              </span>
              <span className="text-white/10 text-xs">•</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-mono">
                25.1972° N, 55.2797° E
              </span>
            </motion.div>

           
            <motion.h1
              variants={titleContainerVariants}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-5 leading-[1.1]"
            >
              {"THE _EPICENTER_ OF RETAIL EXCELLENCE.".split(" ").map((word, index) => {
                const isItalic = word.startsWith("_") && word.endsWith("_");
                const cleanWord = isItalic ? word.slice(1, -1) : word;

                return (
                  <span key={index} className="inline-block overflow-hidden mr-[0.22em] last:mr-0 pb-[0.05em] align-top">
                    <motion.span
                      variants={titleWordVariants}
                      className={`inline-block ${isItalic
                        ? "font-serif italic font-light text-luxury-gold tracking-wide"
                        : ""
                        }`}
                    >
                      {cleanWord}
                    </motion.span>
                  </span>
                );
              })}
            </motion.h1>

         
            <motion.p
              variants={paraVariants}
              className="text-xs sm:text-sm md:text-base text-luxury-grey font-light leading-relaxed max-w-xl mb-6 tracking-wide"
            >
              An interactive digital sales framework crafted to showcase the grand proportions of luxury, architectural prestige, and commercial asset gravity. Structured for partners who prioritize immaculate execution.
            </motion.p>

            
            <motion.div
              variants={metricsVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mb-8"
            >
           
              <div className="group border border-white/[0.04] bg-white/[0.01] backdrop-blur-md px-6 py-4 flex flex-col gap-1.5 hover:border-luxury-gold/20 hover:bg-white/[0.02] transition-all duration-700">
                <span className="font-serif text-2xl font-light text-luxury-gold tracking-tight group-hover:text-luxury-gold-light transition-colors duration-500">
                  100M+
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/60 transition-colors duration-500">
                  Annual Visitors
                </span>
              </div>

           
              <div className="group border border-white/[0.04] bg-white/[0.01] backdrop-blur-md px-6 py-4 flex flex-col gap-1.5 hover:border-luxury-gold/20 hover:bg-white/[0.02] transition-all duration-700">
                <span className="font-serif text-2xl font-light text-white tracking-tight group-hover:text-luxury-gold transition-colors duration-500">
                  200+
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/60 transition-colors duration-500">
                  Luxury Brands
                </span>
              </div>

             
              <div className="group border border-white/[0.04] bg-white/[0.01] backdrop-blur-md px-6 py-4 flex flex-col gap-1.5 hover:border-luxury-gold/20 hover:bg-white/[0.02] transition-all duration-700">
                <span className="font-serif text-2xl font-light text-luxury-gold-light tracking-tight group-hover:text-white transition-colors duration-500">
                  Global
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/60 transition-colors duration-500">
                  Entertainment Hub
                </span>
              </div>
            </motion.div>

           
            <motion.div
              variants={ctaVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <PremiumButton
                variant="primary"
                onClick={() => handleLearnMore("monolith")}
              >
                Begin Overview
              </PremiumButton>
            
            </motion.div>

          </motion.div>

          
          <div
            className="absolute bottom-8 left-8 sm:left-12 lg:left-16 z-20 pointer-events-none flex-col gap-1 hidden sm:flex"
          >
            <span className="font-mono text-[7px] text-luxury-gold tracking-[0.25em] uppercase">CINEMATIC SCENE PLAYLIST</span>
            <span className="font-sans text-[10px] font-semibold text-white/50 tracking-widest uppercase">
              {String(currentVideoIndex + 1).padStart(2, "0")} / 04 — {brandVideos[currentVideoIndex].title}
            </span>
          </div>

          
          <button
            onClick={handlePrevVideo}
            className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-black/40 hover:bg-black/60 text-white/50 hover:text-luxury-gold backdrop-blur-md flex items-center justify-center transition-all duration-500 cursor-pointer pointer-events-auto group outline-none"
            aria-label="Previous Background Scene"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-500" />
          </button>

          <button
            onClick={handleNextVideo}
            className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 hover:border-luxury-gold/50 bg-black/40 hover:bg-black/60 text-white/50 hover:text-luxury-gold backdrop-blur-md flex items-center justify-center transition-all duration-500 cursor-pointer pointer-events-auto group outline-none"
            aria-label="Next Background Scene"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-500" />
          </button>
        </SectionWrapper>


       
        <SectionWrapper
          id="monolith"
          index={2}
          total={6}
          sectionTitle="The Monolith"
          sectionSubtitle="SPATIAL MONUMENT"
          bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80"
          bgOverlayOpacity={0.78}
        >
         
          <div
            className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
           
            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-6 bg-white/20" />
                <span className="text-[9px] uppercase tracking-[0.35em] text-white/50 font-semibold">
                  Architectural Bounds
                </span>
              </div>

              <AnimatedHeading
                text="BOUNDLESS _SCALE_ AND PRESENCE."
                className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-5"
              />

              <p className="text-xs sm:text-sm text-luxury-grey font-light leading-relaxed max-w-md mb-6 tracking-wide">
                Encompassing over 1.2 million square meters of premium architectural space. A modern monument where fluid design gravity intersects global curation, built to elegantly accommodate over one hundred million annual visitors.
              </p>

              <PremiumButton
                variant="secondary"
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveOverlay("events");
                }}
              >
                Explore Venues & Arts
              </PremiumButton>
            </div>

            
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
              
              <div className="flex gap-6 border-b border-white/[0.04] pb-2 text-[9px] uppercase tracking-[0.25em] font-bold">
                <button
                  onClick={() => setMonolithView("video")}
                  className={`pb-2 transition-colors duration-500 cursor-pointer relative ${
                    monolithView === "video" ? "text-luxury-gold" : "text-white/35 hover:text-white/60"
                  }`}
                >
                  Cinematic Presentation
                  {monolithView === "video" && (
                    <motion.div layoutId="monolithUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold" />
                  )}
                </button>
                <button
                  onClick={() => setMonolithView("blueprint")}
                  className={`pb-2 transition-colors duration-500 cursor-pointer relative ${
                    monolithView === "blueprint" ? "text-luxury-gold" : "text-white/35 hover:text-white/60"
                  }`}
                >
                  Technical Blueprint
                  {monolithView === "blueprint" && (
                    <motion.div layoutId="monolithUnderline" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold" />
                  )}
                </button>
              </div>

              {monolithView === "video" ? (
                <div className="relative aspect-video w-full border border-white/[0.04] bg-black shadow-2xl overflow-hidden group">
                  <video
                    src="/videos/intro.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-[4000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/35 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 z-10 text-[8px] font-mono text-white/50 tracking-widest bg-black/60 px-3 py-1.5 backdrop-blur-md border border-white/[0.03]">
                    CURATED LUXURY CAMPAIGNS & ATMOSPHERICS
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full border border-white/[0.04] bg-luxury-pitch/60 p-6 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-md">
               
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 pointer-events-none opacity-[0.15]" aria-hidden="true">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border-t border-l border-white/[0.08]" />
                    ))}
                  </div>

                 
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-luxury-gold/5 blur-[50px] pointer-events-none" aria-hidden="true" />

                  
                  <div className="flex justify-between items-start text-[8px] font-mono text-luxury-gold/45 tracking-widest relative z-10">
                    <span>DWG REF: DM-2026-ARCH</span>
                    <span>SCALE: 1 : 1200</span>
                  </div>

                  
                  <div className="relative h-32 flex items-center justify-center relative z-10">
                    
                    <div className="absolute border border-luxury-gold/20 w-44 h-24 rounded-full animate-[pulse_6s_ease-in-out_infinite]" />
                    <div className="absolute border border-white/5 w-60 h-16 rounded-full" />

                   
                    <div className="w-56 h-[1px] bg-white/[0.06] rotate-6 relative">
                      
                      <div className="absolute top-0 left-1/3 w-2 h-2 bg-luxury-gold rounded-full -translate-y-1/2 -translate-x-1/2 animate-ping" />
                      <div className="absolute top-0 left-1/3 w-1.5 h-1.5 bg-luxury-gold rounded-full -translate-y-1/2 -translate-x-1/2" />
                    </div>

                    <div className="absolute w-40 h-[1px] bg-luxury-gold/20 -rotate-30" />

            
                    <div className="absolute right-12 bottom-6 text-[8px] font-mono text-luxury-gold/40 flex flex-col gap-0.5">
                      <span>X: 144.59m</span>
                      <span>Y: 89.20m</span>
                    </div>
                  </div>

                 
                  <div className="flex justify-between items-end text-[7px] sm:text-[8px] font-mono text-white/25 tracking-widest relative z-10">
                    <span>FACADE: HIGH-PERFORMANCE GLASS</span>
                    <span>BURJ KHALIFA AXIS</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SectionWrapper>


        <SectionWrapper
          id="shop"
          index={3}
          total={7}
          sectionTitle="The Curation"
          sectionSubtitle="SHOP / FASHION AVENUE"
          bgImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
          bgOverlayOpacity={0.78}
        >
          
          <div
            className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-6xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-6 bg-white/20" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/50 font-semibold">
                COUTURE & MONOBRANDS
              </span>
            </div>

            <AnimatedHeading
              text="THE ULTIMATE HAUTE CURATION."
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
            />

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            
              <div
                onClick={() => openShopInfo("Chanel & Hermès", "Luxury fashion flagship featuring haute couture, leather goods, and high jewelry.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">01 / LUXURY COUTURE</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80"
                      alt="Chanel & Hermès Boutique"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Chanel & Hermès Flagships
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Architectural masterpieces housing absolute haute couture, rare leather goods, and high jewelry allocations.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: PRIVATE CURATION SALONS
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Exclusive collections presented in soundproofed VIP viewing suites with dedicated brand concierges.
                  </p>
                </div>
              </div>

             
              <div
                onClick={() => openShopInfo("Rolex & Patek Philippe", "High horology curation showcasing iconic timepieces and bespoke services.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">02 / HIGH HOROLOGY</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=600&q=80"
                      alt="Rolex & Patek Philippe Curation"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Rolex & Patek Monobrand
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Prestigious centers displaying micro-engineering feats, historic timepieces, and highly coveted calendar allocations.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: HOROLOGY CONCIERGE
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Bespoke appraisals, private watchmaking masterclasses, and dedicated vintage collection priority.
                  </p>
                </div>
              </div>

              
              <div
                onClick={() => openShopInfo("Louis Vuitton & Dior", "Elite ateliers presenting limited‑edition collaborations and bespoke tailoring.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">03 / MAISON ATELIERS</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
                      alt="Louis Vuitton & Dior Ateliers"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Louis Vuitton & Dior Ateliers
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Multi-level experiential spaces showcasing limited-edition collaborations, monogram baggage, and custom tailoring.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: ELITE PORTER DELIVERY
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Hands-free personal shopping followed by white-glove transport of purchases to your hotel suite or private jet.
                  </p>
                </div>
              </div>

             
              <div
                onClick={() => openShopInfo("Christian Louboutin", "Iconic French luxury house renowned for its signature red-lacquered soles, exquisite stilettos, sneakers, and leather accessories crafted with unparalleled artistry.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">04 / ICONIC FOOTWEAR</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80"
                      alt="Christian Louboutin Boutique"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Christian Louboutin
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    World-famous French luxury house celebrated for its signature red-lacquered soles, exquisite stilettos, statement sneakers, and handcrafted leather goods.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: BESPOKE ATELIER
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Private fittings with custom sole engraving, exclusive capsule previews, and made-to-order crystal-embellished pieces.
                  </p>
                </div>
              </div>

            </div>

          
            <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">
                ADDITIONAL WORLD-CLASS ATELIERS:
              </span>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-[8px] font-mono text-white/50 uppercase tracking-[0.25em]">
                <span>Gucci</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Saint Laurent</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Cartier</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Prada</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Balenciaga</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 justify-center sm:justify-start">
              <PremiumButton
                variant="primary"
                onClick={() => handleLearnMore("dine")}
              >
                Explore luxury
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                onClick={() => openLeasingWithDistrict("luxury")}
              >
                Interactive Leasing Portal
              </PremiumButton>
            </div>
          </div>
        </SectionWrapper>


        
        <SectionWrapper
          id="dine"
          index={4}
          total={7}
          sectionTitle="The Epicurean"
          sectionSubtitle="DINE / WATERFRONT PROMENADE"
          bgImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          bgOverlayOpacity={0.78}
        >
          <div
            className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-6xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-6 bg-white/20" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/50 font-semibold">
                WORLD-CLASS MICHELIN PORTFOLIO
              </span>
            </div>

            <AnimatedHeading
              text="THE ULTIMATE CULINARY DESTINATION."
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

             
              <div
                onClick={() => openLeasingWithDistrict("f&b")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">01 / SKY HEIGHT GASTRONOMY</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                      alt="CE LA VI Fine Dining"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    CÉ LA VI & At.mosphere
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Elevated Michelin-starred experiences offering modern Asian creations and contemporary European cuisine with dramatic skyline backdrops.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    {"SERVICE: CHEF'S TABLE THEATER"}
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Custom multi-course degustation menus designed live by culinary masters in absolute private penthouse dining suites.
                  </p>
                </div>
              </div>

            
              <div
                onClick={() => openLeasingWithDistrict("f&b")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">02 / WATERFRONT FINE DINING</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                      alt="Gia & Angelina Paris"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Gia & Angelina Paris
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Refined Italian elegance and Parisian salon sophistication serving handmade pastas, pastries, and artisanal culinary crafts.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: VIP WATERFRONT RESERVATION
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Guaranteed front-row terrace seating directly overlooking the fountain show coordinates with private elevator exit.
                  </p>
                </div>
              </div>

              
              <div
                onClick={() => openLeasingWithDistrict("f&b")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">03 / ARTISANAL FLAVORS</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                      alt="L'Entrecôte steakhouse"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    {"L'Entrecôte & Social Eating"}
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Bespoke steakhouse craftsmanship and trendy social eating spaces serving globally acclaimed recipes in visual setups.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: PRIVATE SOMMELIER CURATION
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Exclusive vintage tastings, custom food pairings, and private culinary masterclasses for VIP diners.
                  </p>
                </div>
              </div>

              
              <div
                onClick={() => openShopInfo("Cookie Jar", "Creative café offering coffee, snacks, bakery products, muffins, cupcakes, and more in a relaxed ambience.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">04 / CAFÉ CREATION</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                      alt="Cookie Jar Café"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Cookie Jar Café
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    A creative café serving artisanal coffee, fresh snacks, warm bakery delights, fluffy muffins, decadent cupcakes, cookies, and seasonal specials in a cozy, welcoming atmosphere.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: COFFEE &amp; BAKERY EXPERIENCE
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Cozy seating, free Wi‑Fi, daily fresh-baked goods, custom cake orders, and a curated menu perfect for casual meetings or a sweet treat.
                  </p>
                </div>
              </div>

            </div>

           
            <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">
                MICHELIN STARRED PARTNERS:
              </span>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-[8px] font-mono text-white/50 uppercase tracking-[0.25em]">
                <span>Tashas Alchemist</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>The Guild</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Orfali Bros</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Huqqa</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Din Tai Fung VIP</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 justify-center sm:justify-start">
              <PremiumButton
                variant="primary"
                onClick={() => handleLearnMore("stay")}
              >
                Explore Dining
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveOverlay("leasing");
                }}
              >
                Lease Restaurant Terraces
              </PremiumButton>
            </div>
          </div>
        </SectionWrapper>


       
        <SectionWrapper
          id="stay"
          index={5}
          total={7}
          sectionTitle="The Prestige"
          sectionSubtitle="STAY / CONNECTED LUXURY"
          bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
          bgOverlayOpacity={0.78}
        >
          <div
            className="absolute bottom-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-6xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-6 bg-white/20" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/50 font-semibold">
                ELITE HOTELS & PRIVATE RESIDENCES
              </span>
            </div>

            <AnimatedHeading
              text="CONNECTED RESIDENTIAL ELEGANCE."
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          
              <div
                onClick={() => openLeasingWithDistrict("luxury")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">01 / ARMANI BRAND CURATION</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
                      alt="Armani Hotel Dubai"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Armani Hotel Dubai
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Nestled in the iconic Burj Khalifa, this hotel features minimalist Italian lines, custom furnishings, and sophisticated textures designed by Giorgio Armani himself.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: PRIVATE BURJ PORTAL
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Direct secure keycard elevators linking Fashion Avenue directly to the high-security Armani lobby and sky suites.
                  </p>
                </div>
              </div>

             
              <div
                onClick={() => openLeasingWithDistrict("luxury")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">02 / Connected Convenience</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
                      alt="Address Dubai Mall Hotel"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Address Dubai Mall
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    An oasis of sleek metropolitan comfort directly integrated into the mall, showcasing infinity pools, high-tech lounges, and luxury cityscapes.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: LIFESTYLE BUTLER
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    A dedicated certified personal assistant managing reservations, hands-free styling, and curated family itineraries.
                  </p>
                </div>
              </div>

              
              <div
                onClick={() => openShopInfo("Address Boulevard", "Boasting an exquisite collection of custom art masterpieces and direct luxury air-conditioned travel tunnels into the mall districts.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">03 / ART DECO PRESTIGE</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                      alt="Address Boulevard Hotel"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Address Boulevard
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    Boasting an exquisite collection of custom art masterpieces and direct luxury air-conditioned travel tunnels into the mall districts.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: ELITE ROLLS-ROYCE CHAUFFEUR
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Airport transfers and shopping excursions in a custom fleet of Rolls-Royce Phantoms with private flight check-in.
                  </p>
                </div>
              </div>

              
              <div
                onClick={() => openShopInfo("Palace Downtown", "A palatial 5-star retreat blending traditional Arabian grandeur with modern luxury, offering breathtaking views of the Burj Khalifa and Dubai Fountain.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">04 / ARABIAN PALACE</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80"
                      alt="Palace Downtown Dubai"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Palace Downtown
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    A palatial 5-star retreat blending traditional Arabian grandeur with modern luxury, offering breathtaking views of the Burj Khalifa and Dubai Fountain from lush landscaped gardens.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: ROYAL CONCIERGE
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Dedicated royal butler service, private marina access, exclusive fountain-view dining terraces, and direct covered walkway to Dubai Mall.
                  </p>
                </div>
              </div>

            </div>

           
            <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">
                PREMIUM ALLIED HOSPITALITY:
              </span>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-[8px] font-mono text-white/50 uppercase tracking-[0.25em]">
                <span>Palace Downtown</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>The Address Downtown</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Kempinski Central</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Vida Residences</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 justify-center sm:justify-start">
              <PremiumButton
                variant="primary"
                onClick={() => handleLearnMore("entertain")}
              >
                Explore Stay
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveOverlay("sponsorship");
                }}
              >
                VIP Booking Portal
              </PremiumButton>
            </div>
          </div>
        </SectionWrapper>


        
        <SectionWrapper
          id="entertain"
          index={6}
          total={7}
          sectionTitle="The Marvels"
          sectionSubtitle="ENTERTAIN / IMMERSIVE ANCHORS"
          bgImage="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=1600&q=80"
          bgOverlayOpacity={0.78}
        >
          <div
            className="absolute top-[20%] right-[30%] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-6xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-6 bg-white/20" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/50 font-semibold">
                GLOBAL LEISURE & SPECTACLE WONDERS
              </span>
            </div>

            <AnimatedHeading
              text="IMPERIAL ENTERTAINMENT WONDERS."
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

             
              <div
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveOverlay("events");
                }}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">01 / WATER SPECTACLE</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80"
                      alt="Dubai Fountain Show"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    The Dubai Fountain Show
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    The world's largest choreographed fountain system, executing a complex symphony of water, laser, and light arcs shooting 150m into the air.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: VIP FOUNTAIN LAKE CHARTER
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Exclusive boardwalk access or a private traditional abra boat sailing directly into the spray zone of choreographies.
                  </p>
                </div>
              </div>

             
              <div
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveOverlay("events");
                }}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">02 / MARINE WONDER</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=600&q=80"
                      alt="Dubai Aquarium & Underwater Zoo"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Dubai Aquarium & Zoo
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    A colossal 10-million liter marine tank housing over 33,000 aquatic animals, featuring a majestic 270-degree viewing tunnel.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: PRIVATE CURATOR TOUR
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Private marine zoologist guidance, behind-the-scenes shark feeding, and private underwater gourmet dining setups.
                  </p>
                </div>
              </div>

              
              <div
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveOverlay("events");
                }}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">03 / ACTIVE LEISURE</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80"
                      alt="Dubai Ice Rink & VR Park"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    Dubai Ice Rink & VR Park
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    An Olympic-sized ice arena hosting international matches, alongside massive interactive virtual reality amusement environments.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: PRIVATE RINK COACHING
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Full stadium private hire hours accompanied by direct coaching from world-class Olympic figure skating coaches.
                  </p>
                </div>
              </div>

              
              <div
                onClick={() => openShopInfo("ARTE MUSEUM", "A next-generation immersive digital art museum featuring large-scale projections, interactive light installations, and multi-sensory experiences across 10 themed galleries.")}
                className="group border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-6 flex flex-col justify-between min-h-[440px] hover:border-luxury-gold/30 hover:bg-luxury-pitch/60 transition-all duration-700 cursor-pointer overflow-hidden relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-luxury-gold tracking-[0.2em]">04 / IMMERSIVE ART</span>
                    <span className="text-[10px] text-white/30 group-hover:text-luxury-gold transition-colors duration-500">→</span>
                  </div>
                  <div className="relative w-full h-32 overflow-hidden mb-4 border border-white/[0.03]">
                    <img
                      src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80"
                      alt="ARTE MUSEUM Dubai"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-white tracking-wide mb-2 group-hover:text-luxury-gold transition-colors duration-500">
                    ARTE MUSEUM
                  </h3>
                  <p className="text-[10px] text-white/50 tracking-relaxed leading-relaxed font-light mb-4">
                    A next-generation immersive digital art museum featuring large-scale projections, interactive light installations, and multi-sensory experiences across 10 themed galleries.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-luxury-gold font-mono pt-4 border-t border-white/[0.04]">
                    SERVICE: PRIVATE GALLERY EXPERIENCE
                  </div>
                  <p className="text-[9px] text-white/40 mt-1 leading-relaxed">
                    Exclusive after-hours private viewings, guided art tours with digital curators, and bespoke photo sessions within the immersive installations.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Marquee Entertain */}
            <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">
                ADDITIONAL WONDER SPACES:
              </span>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-[8px] font-mono text-white/50 uppercase tracking-[0.25em]">
                <span>Chinatown Dubai</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Reel Cinemas VIP Suites</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>KidZania Elite</span>
                <span className="w-1 h-1 rounded-full bg-white/10 self-center" />
                <span>Dubai Dino Fossil</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 justify-center sm:justify-start">
              <PremiumButton
                variant="primary"
                onClick={() => handleLearnMore("investment")}
              >
                Explore Entertainment
              </PremiumButton>
              <PremiumButton
                variant="secondary"
                onClick={() => {
                  setFormSubmitted(false);
                  setActiveOverlay("events");
                }}
              >
                Access Tickets Concierge
              </PremiumButton>
            </div>
          </div>
        </SectionWrapper>


        <SectionWrapper
          id="investment"
          index={7}
          total={7}
          sectionTitle="The Legacy"
          sectionSubtitle="LEGACY / EMAAR COMMERCIAL"
          bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          bgOverlayOpacity={0.78}
        >
          <div
            className="absolute top-[30%] left-[40%] w-[380px] h-[380px] rounded-full bg-luxury-gold/5 blur-[125px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center w-full">

          
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-6 bg-luxury-gold" />
                <span className="text-[9px] uppercase tracking-[0.35em] text-luxury-gold font-semibold">
                  Capital Appreciations
                </span>
              </div>

              <AnimatedHeading
                text="AN ENDURING LEGACY."
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6"
              />

              <p className="text-xs sm:text-sm text-white/60 tracking-wide leading-relaxed font-light mb-8 max-w-2xl">
                {"Dubai Mall represents far more than physical space—it is an appreciating, highly resilient commercial asset located at the core of the world's most dynamic capital market. Designed to preserve luxury wealth over generations."}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <PremiumButton
                  variant="primary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setActiveOverlay("sponsorship");
                  }}
                >
                  Request Private Prospectus
                </PremiumButton>
                <PremiumButton
                  variant="secondary"
                  onClick={() => handleLearnMore("archetype")}
                >
                  Return to Start
                </PremiumButton>
              </div>
            </div>

           
            <div className="col-span-12 lg:col-span-5">
              <div className="flex flex-col gap-6 lg:gap-8">

                <div className="relative border-b border-white/[0.04] pb-6 flex items-baseline justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    Average Occupancy
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                      98.2%
                    </span>
                    <span className="text-[8px] font-mono text-white/20 tracking-wider">
                      HISTORIC STABILITY INDEX
                    </span>
                  </div>
                </div>

                <div className="relative border-b border-white/[0.04] pb-6 flex items-baseline justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    Annual Footfall
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                      105M+
                    </span>
                    <span className="text-[8px] font-mono text-white/20 tracking-wider">
                      {"WORLD'S MOST VISITED VENUE"}
                    </span>
                  </div>
                </div>

                <div className="relative flex items-baseline justify-between">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    YoY Growth
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-luxury-gold-light tracking-tight">
                      +20.4%
                    </span>
                    <span className="text-[8px] font-mono text-white/20 tracking-wider">
                      COMPOUNDING BRAND RENTAL YIELDS
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </SectionWrapper>
      </main>

     
      <AnimatePresence>
        {activeOverlay && activeOverlay !== "videoIntro" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-luxury-black/95 backdrop-blur-xl overflow-y-auto"
          >
            <button
              onClick={() => {
                setActiveOverlay(null);
                setFormSubmitted(false);
              }}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/50 hover:text-luxury-gold transition-colors duration-500 cursor-pointer outline-none border-none bg-transparent"
            >
              <span>Close</span>
              <X className="w-4 h-4 text-white/50 hover:text-luxury-gold transition-colors duration-500" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(6px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="w-full max-w-5xl border border-white/[0.04] bg-luxury-pitch/40 backdrop-blur-md p-8 md:p-12 relative flex flex-col md:flex-row gap-10 md:gap-16 shadow-[0_30px_100px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
            >
           
              <div className="flex-1 flex flex-col justify-between">

               
                {activeOverlay === "shopInfo" && shopInfo && (
                  <div className="flex-1 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="flex items-center gap-2 mb-6 text-[9px] uppercase tracking-[0.3em] text-luxury-gold/80 font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Brand Spotlight</span>
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
                        {shopInfo.title}
                      </h2>
                      <p className="text-sm text-white/60 font-light leading-relaxed tracking-wide">
                        {shopInfo.description}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30 border-t border-white/[0.04] pt-6">
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-luxury-gold/50" /> Concierge available</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span>VIP appointments on request</span>
                    </div>
                  </div>
                )}

               
                {activeOverlay === "leasing" && (
                  <div className="flex-1 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="flex items-center gap-2 mb-6 text-[9px] uppercase tracking-[0.3em] text-luxury-gold/80 font-bold">
                        <Building className="w-3.5 h-3.5" />
                        <span>Phase II • Leasing Pathway</span>
                      </div>

                      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
                        SECURE YOUR <br />
                        <span className="italic text-luxury-gold font-light">GLOBAL FOOTPRINT</span>.
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {(["luxury", "retail", "f&b", "pop-up"] as const).map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedLeaseCategory(cat)}
                            className={`px-4 py-2 border text-[8px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 cursor-pointer ${selectedLeaseCategory === cat
                              ? "border-luxury-gold bg-luxury-gold text-luxury-black"
                              : "border-white/[0.05] bg-white/[0.01] text-white/50 hover:text-white hover:border-white/20"
                              }`}
                          >
                            {cat === "luxury" ? "Luxury Flagship" : cat === "retail" ? "High-Street" : cat === "f&b" ? "Artisan F&B" : "Bespoke Pop-Up"}
                          </button>
                        ))}
                      </div>

                      <div className="text-xs text-luxury-grey font-light leading-relaxed tracking-wide space-y-4 font-sans">
                        {selectedLeaseCategory === "luxury" && (
                          <>
                            <p className="text-white/80">
                              Positioned directly within the legendary <strong className="text-luxury-gold font-semibold font-bold">Fashion Avenue</strong> district—the global epicenter of haute couture.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Spans 5,000 to 12,000 sq ft multi-level storefront residences</li>
                              <li>• Direct exposure to 35M+ ultra-high-net-worth visitors annually</li>
                              <li>• Elite neighbor curation: Hermès, Chanel, Cartier, and Dior</li>
                            </ul>
                          </>
                        )}
                        {selectedLeaseCategory === "retail" && (
                          <>
                            <p className="text-white/80">
                              Premium exposure zones aligning the primary high-footfall <strong className="text-luxury-gold font-semibold font-bold">Grand Boulevard</strong> promenade.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Flexible architectural dimensions from 1,500 to 6,000 sq ft</li>
                              <li>• High-conversion storefront glass bounds under giant vaulted arches</li>
                              <li>• Massive demographic reach covering premium global travelers</li>
                            </ul>
                          </>
                        )}
                        {selectedLeaseCategory === "f&b" && (
                          <>
                            <p className="text-white/80">
                              Stunning culinary locations overlooking the magnificent <strong className="text-luxury-gold font-semibold font-bold">Waterfront Promenade</strong> and Fountain.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Spectacular indoor-outdoor hybrid designs with terrace bounds</li>
                              <li>• Unmatched visibility during premium night light fountain shows</li>
                              <li>• Cater to curated gourmet audiences and elite global travelers</li>
                            </ul>
                          </>
                        )}
                        {selectedLeaseCategory === "pop-up" && (
                          <>
                            <p className="text-white/80">
                              Highly visible experiential platforms situated inside central public <strong className="text-luxury-gold font-semibold font-bold">Atriums and Plazas</strong>.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Dynamic short-term lease options from 1 week to 3 months</li>
                              <li>• Perfect for product launches, capsule releases, or immersive tech activations</li>
                              <li>• Turnkey design support with complete structural flexibility</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30 border-t border-white/[0.04] pt-6 font-sans">
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-luxury-gold/50" /> 24hr response</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span>Liaison coordination</span>
                    </div>
                  </div>
                )}

                
                {activeOverlay === "events" && (
                  <div className="flex-1 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="flex items-center gap-2 mb-6 text-[9px] uppercase tracking-[0.3em] text-luxury-gold/80 font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Phase II • Elite Venue Portfolio</span>
                      </div>

                      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
                        RESERVE A <br />
                        <span className="italic text-luxury-gold font-light">GLOBAL PLATFORM</span>.
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {(["atrium", "plaza", "amphitheatre"] as const).map((ven) => (
                          <button
                            key={ven}
                            onClick={() => setSelectedVenue(ven)}
                            className={`px-4 py-2 border text-[8px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 cursor-pointer ${selectedVenue === ven
                              ? "border-luxury-gold bg-luxury-gold text-luxury-black"
                              : "border-white/[0.05] bg-white/[0.01] text-white/50 hover:text-white hover:border-white/20"
                              }`}
                          >
                            {ven === "atrium" ? "The Grand Atrium" : ven === "plaza" ? "Fashion Avenue Plaza" : "Waterfront Amphitheatre"}
                          </button>
                        ))}
                      </div>

                      <div className="text-xs text-luxury-grey font-light leading-relaxed tracking-wide space-y-4 font-sans">
                        {selectedVenue === "atrium" && (
                          <>
                            <p className="text-white/80">
                              The central focal point of the entire mall. A soaring architectural marvel capable of handling massive physical installations and massive crowds.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Capacity: Up to 5,000 attendees comfortably</li>
                              <li>• Perfect for international concerts, massive exhibitions, and vehicle debuts</li>
                              <li>• Equipped with premium overhead truss structures and high-output electrical arrays</li>
                            </ul>
                          </>
                        )}
                        {selectedVenue === "plaza" && (
                          <>
                            <p className="text-white/80">
                              A highly sophisticated, marble-detailed indoor hall tailored specifically to ultra-high-end fashion and lifestyle brands.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Capacity: Up to 1,500 VIP guests</li>
                              <li>• Optimized for runway shows, luxury gala dinners, and private art auctions</li>
                              <li>• Acoustic dampening walls and integrated cinematic spotlight arrays</li>
                            </ul>
                          </>
                        )}
                        {selectedVenue === "amphitheatre" && (
                          <>
                            <p className="text-white/80">
                              A breathtaking outdoor arena facing the iconic Dubai Fountains and the soaring Burj Khalifa skyline.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Capacity: Up to 10,000 outdoor attendees</li>
                              <li>• Legendary platform for music festivals, new year projections, and open-air brand festivals</li>
                              <li>• Built-in modular staging foundations and direct waterfront access</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30 border-t border-white/[0.04] pt-6 font-sans">
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-luxury-gold/50" /> Technical Spec Sheet</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span>Dates subject to review</span>
                    </div>
                  </div>
                )}

               
                {activeOverlay === "sponsorship" && (
                  <div className="flex-1 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="flex items-center gap-2 mb-6 text-[9px] uppercase tracking-[0.3em] text-luxury-gold/80 font-bold">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>Phase II • Brand Sponsorships Hub</span>
                      </div>

                      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
                        REQUEST PRIVATE <br />
                        <span className="italic text-luxury-gold font-light">PARTNERSHIP TERMS</span>.
                      </h2>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {(["platinum", "gold", "editorial"] as const).map((tier) => (
                          <button
                            key={tier}
                            onClick={() => setSponsorshipTier(tier)}
                            className={`px-4 py-2 border text-[8px] uppercase tracking-[0.2em] font-semibold transition-all duration-500 cursor-pointer ${sponsorshipTier === tier
                              ? "border-luxury-gold bg-luxury-gold text-luxury-black"
                              : "border-white/[0.05] bg-white/[0.01] text-white/50 hover:text-white hover:border-white/20"
                              }`}
                          >
                            {tier === "platinum" ? "Platinum Legacy" : tier === "gold" ? "Gold Editorial" : "Bespoke Activation"}
                          </button>
                        ))}
                      </div>

                      <div className="text-xs text-luxury-grey font-light leading-relaxed tracking-wide space-y-4 font-sans">
                        {sponsorshipTier === "platinum" && (
                          <>
                            <p className="text-white/80">
                              {"Our ultimate alignment package, designed to merge your brand's narrative directly with the iconic architecture of Dubai Mall."}
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Exclusive Burj Fountain video projection mapping takeovers</li>
                              <li>• Continuous digital screen naming rights across central corridors</li>
                              <li>• Expected reach: 100M+ high-conversion brand impressions</li>
                            </ul>
                          </>
                        )}
                        {sponsorshipTier === "gold" && (
                          <>
                            <p className="text-white/80">
                              An extremely prestigious editorial package, focusing heavily on highly affluent shoppers and luxury pathing.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Massive digital video wall takeovers in Fashion Avenue</li>
                              <li>• Bespoke seasonal physical pop-up installation sites</li>
                              <li>• Expected reach: 45M+ luxury shopper impressions</li>
                            </ul>
                          </>
                        )}
                        {sponsorshipTier === "editorial" && (
                          <>
                            <p className="text-white/80">
                              A highly targeted experiential package synchronized directly with major high-footfall cultural seasons.
                            </p>
                            <ul className="space-y-2 border-l border-white/[0.05] pl-4 py-2 text-[11px] text-white/40">
                              <li>• Exclusive branding of central public plaza during regional events</li>
                              <li>• VIP shopping pathing integrations and digital mobile push alignments</li>
                              <li>• Expected reach: 15M+ target customer impressions</li>
                            </ul>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30 border-t border-white/[0.04] pt-6 font-sans">
                      <span className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-luxury-gold/50" /> Premium Demographic data</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span>NDAs required</span>
                    </div>
                  </div>
                )}

              </div>

              
              {activeOverlay !== "shopInfo" && (
                <div className="w-full md:w-[380px] border-t md:border-t-0 md:border-l border-white/[0.04] pt-10 md:pt-0 md:pl-12 flex flex-col justify-center font-sans">
                  {!formSubmitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="space-y-1.5">
                        <label className="text-[8px] uppercase tracking-[0.2em] text-white/45 font-semibold block">Brand / Company Name</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. VALENTINO COUTURE"
                          className="w-full bg-white/[0.02] border border-white/[0.05] px-4 py-3 text-xs text-white placeholder-white/20 outline-none focus:border-luxury-gold/40 transition-colors duration-500 font-light"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[8px] uppercase tracking-[0.2em] text-white/45 font-semibold block">Representative Corporate Email</label>
                        <input
                          required
                          type="email"
                          placeholder="e.g. liaison@brand.com"
                          className="w-full bg-white/[0.02] border border-white/[0.05] px-4 py-3 text-xs text-white placeholder-white/20 outline-none focus:border-luxury-gold/40 transition-colors duration-500 font-light"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[8px] uppercase tracking-[0.2em] text-white/45 font-semibold block">Target Launch Date</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Q4 2026 / Q1 2027"
                          className="w-full bg-white/[0.02] border border-white/[0.05] px-4 py-3 text-xs text-white placeholder-white/20 outline-none focus:border-luxury-gold/40 transition-colors duration-500 font-light"
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full group relative flex items-center justify-center py-3.5 px-6 border border-luxury-gold bg-luxury-gold text-luxury-black font-semibold text-[9px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-transparent hover:text-white cursor-pointer overflow-hidden outline-none"
                        >
                          <span className="relative z-10">Initiate Partnership</span>
                        </button>
                      </div>

                      <p className="text-[7.5px] uppercase tracking-[0.15em] text-white/20 text-center leading-normal">
                        BY SUBMITTING, YOU AGREE TO ELITE BRAND INTEGRITY STANDARDS AND CONFIDENTIALITY AGREEMENTS.
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center text-center py-10"
                    >
                      <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-luxury-gold/5 mb-6 relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-luxury-gold" />
                        </motion.div>
                        <div className="absolute inset-0 rounded-full border border-luxury-gold/30 animate-ping opacity-25" />
                      </div>

                      <h3 className="font-serif text-lg font-light text-white mb-3 tracking-tight">
                        CREDENTIALS ARCHIVED
                      </h3>

                      <p className="text-[10px] text-luxury-grey font-light leading-relaxed max-w-[260px] tracking-wide mb-8">
                        Your acquisition metadata has been safely delivered to Emaar Commercial Curation. A dedicated liaison officer will coordinate our physical response within 24 hours.
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setActiveOverlay(null);
                          setFormSubmitted(false);
                        }}
                        className="border border-white/10 px-5 py-2 text-[8px] uppercase tracking-[0.2em] text-white/60 hover:text-white hover:border-white/30 transition-all duration-500 cursor-pointer outline-none bg-transparent"
                      >
                        Return to Deck
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

      
        
      </AnimatePresence>
    </LenisProvider>
  );
}