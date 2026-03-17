"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[1000] bg-forest-deep flex items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-display text-sm tracking-[0.2em] text-earth-luxe uppercase mb-8"
            >
              Sapanca'ya Hoş Geldiniz
            </motion.div>
            
            <div className="overflow-hidden pb-4">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display text-7xl md:text-9xl text-cream-luxe flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 text-center leading-[1.2]"
              >
                Dağaltı <span className="italic text-earth-luxe">Suite</span>
              </motion.h1>
            </div>



            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="w-full h-[1px] bg-earth-luxe/30 mt-12 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
