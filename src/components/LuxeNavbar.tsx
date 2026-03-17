"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Hakkımızda", href: "#hakkimizda" },
  { name: "Olanaklar", href: "#olanaklar" },
  { name: "Galeri", href: "#galeri" },
  { name: "Yorumlar", href: "#yorumlar" },
  { name: "Konum", href: "#konum" },
  { name: "İletişim", href: "#iletisim" }
];


export default function LuxeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (e: React.MouseEvent<any>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[500] transition-all duration-500 px-4 py-6 md:px-12",
          isScrolled ? "py-4" : "py-8"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-6 md:px-12",
          isScrolled ? "bg-cream-luxe/80 backdrop-blur-2xl border border-forest-deep/5 shadow-spatial py-4" : "bg-transparent py-2"
        )}>
          {/* Brand */}
          <a href="#hakkimizda" onClick={(e) => scrollToSection(e, "#hakkimizda")} className="group">
            <span className={cn(
              "font-display text-2xl md:text-3xl tracking-tighter transition-all group-hover:opacity-60",
              isScrolled ? "text-forest-deep" : "text-cream-luxe"
            )}>
              Dağaltı <span className="italic">Suite</span>
            </span>
          </a>

          {/* Links - Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "font-display text-base opacity-60 hover:opacity-100 transition-opacity italic",
                  isScrolled ? "text-forest-deep" : "text-cream-luxe"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="#rezervasyon" 
                onClick={(e) => scrollToSection(e, "#rezervasyon")}
                className="bg-earth-luxe text-white px-8 py-3 rounded-full font-display text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Rezervasyon Yapın
              </a>
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden w-10 h-10 rounded-full border flex flex-col items-center justify-center gap-1.5 transition-colors",
                  isScrolled ? "border-forest-deep/10" : "border-cream-luxe/10"
                )}
              >
                <div className={cn(
                  "w-4 h-[1px] transition-all", 
                  isScrolled ? "bg-forest-deep" : "bg-cream-luxe",
                  isMobileMenuOpen && "rotate-45 translate-y-[3.5px]"
                )} />
                <div className={cn(
                  "w-4 h-[1px] transition-all", 
                  isScrolled ? "bg-forest-deep" : "bg-cream-luxe",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[3.5px]"
                )} />
              </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
        className="fixed inset-0 z-[499] bg-cream-luxe flex flex-col items-center justify-center p-12 lg:hidden"
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ y: 20, opacity: 0 }}
              animate={isMobileMenuOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-display text-4xl text-forest-deep hover:italic transition-all"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
