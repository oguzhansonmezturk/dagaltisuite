"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const photos = [
  "/images/discekim1.jpeg",
  "/images/discekim2.jpeg",
  "/images/jakuzi1.jpeg",
  "/images/iccekim1.jpeg",
  "/images/icmekan1.jpeg",
  "/images/ates.jpeg",
  "/images/havuz1.jpeg",
  "/images/icmekan2.jpeg",
  "/images/jakuzi2.jpeg",
  "/images/mutfak.jpeg",
  "/images/somine.jpeg",
  "/images/yatak.jpeg",
  "/images/discekim3.jpeg",
  "/images/discekim9.jpeg",
  "/images/kedi.png",
];

export default function LuxeGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  
  const INITIAL_COUNT = 5;
  const visiblePhotos = photos.slice(0, INITIAL_COUNT);
  const remainingCount = photos.length - INITIAL_COUNT;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const nextPhoto = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % photos.length);
  };

  const prevPhoto = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
  };

  return (
    <section id="galeri" className="bg-cream-luxe py-32 px-6">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-forest-deep italic"
          >
            Anı Biriktirin
          </motion.h2>
          <p className="font-display text-lg text-forest-deep/60 italic">
            Tüm detaylarıyla Dağaltı Suite deneyimi.
          </p>
        </div>

        {/* Single Row 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-[500px] md:h-[400px]">
          {visiblePhotos.map((src, idx) => {
            const isLastVisible = idx === INITIAL_COUNT - 1;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedIdx(idx)}
                className={cn(
                  "relative overflow-hidden group cursor-pointer rounded-[1.5rem] shadow-luxe col-span-1 row-span-1",
                  idx === 0 && "hidden md:block", // Optimization for mobile view sometimes helps to hide first on tiny screens if you want, but user said 5 total
                )}
              >
                <Image 
                  src={src} 
                  alt="Dağaltı Suite" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/20 transition-colors duration-500 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6" />
                </div>

                {/* "+X More" Overlay for the 5th item */}
                {isLastVisible && remainingCount > 0 && (
                  <div className="absolute inset-0 bg-cream-luxe/80 backdrop-blur-[4px] flex flex-col items-center justify-center text-forest-deep group-hover:bg-cream-luxe/90 transition-all duration-500">
                    <span className="font-display text-4xl italic">+{remainingCount}</span>
                    <span className="font-display text-xs uppercase tracking-widest mt-1 opacity-70">Görüntüle</span>
                  </div>
                )}
              </motion.div>
            );
          })}
          {/* Mobile fallback for hidden items if necessary - but user wants exactly 5 on desktop row */}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-cream-luxe/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedIdx(null)}
          >
            <button 
              className="absolute top-8 right-8 text-forest-deep/40 hover:text-forest-deep transition-colors z-[1010] p-2"
              onClick={() => setSelectedIdx(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-forest-deep/20 hover:text-forest-deep transition-colors p-6 z-[1010]"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="w-12 h-12 md:w-16 md:h-16" />
            </button>

            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-forest-deep/20 hover:text-forest-deep transition-colors p-6 z-[1010]"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight className="w-12 h-12 md:w-16 md:h-16" />
            </button>

            <motion.div 
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center rounded-[2rem] overflow-hidden">
                <Image 
                  src={photos[selectedIdx]} 
                  alt="Full view" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-forest-deep/30 font-display italic tracking-[0.2em] text-xs">
              <span className="text-earth-luxe font-bold opacity-100">{(selectedIdx + 1).toString().padStart(2, '0')}</span>
              <div className="w-6 h-[1px] bg-forest-deep/10" />
              <span>{photos.length.toString().padStart(2, '0')}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
