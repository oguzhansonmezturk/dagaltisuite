"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hakkimizda" ref={containerRef} className="relative h-[120vh] w-full bg-cream-luxe overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Cinematic Backdrop with Split Reveal */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          style={{ scale: imageScale }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <Image
            src="/images/discekim1.jpeg"
            alt="Dağaltı Suite"
            fill
            className="object-cover brightness-[0.7] contrast-[1.2]"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-[1]" />
        </motion.div>

        {/* Hero Title: Natural Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: textY, opacity }}
          className="relative z-10 text-center space-y-8"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
            className="font-display text-sm md:text-base text-cream-luxe uppercase tracking-[0.4em] block italic"
          >
            Sapanca'nın kalbinde huzurlu bir mola
          </motion.span>
          
          <h1 className="font-display text-8xl md:text-[12rem] text-cream-luxe select-none leading-[1.1] drop-shadow-2xl pb-8">
            Dağaltı <br />
            <motion.span 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
               className="italic opacity-90 block mt-2 text-earth-luxe"
            >
              Suite
            </motion.span>
          </h1>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6"
        >
          <span className="font-display text-lg text-cream-luxe/80 italic tracking-widest">Aşağı Kaydırın</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-earth-luxe via-earth-luxe to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
