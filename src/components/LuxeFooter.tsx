"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";

export default function LuxeFooter() {
  const links = [
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Olanaklar", href: "#olanaklar" },
    { name: "Galeri", href: "#galeri" },
    { name: "Yorumlar", href: "#yorumlar" },
    { name: "Konum", href: "#konum" }
  ];

  return (
    <footer id="iletisim" className="bg-forest-deep text-cream-luxe pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start opacity-80">
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-display text-xl italic opacity-40">İletişim</h4>
            <div className="space-y-4">
              <a href="tel:+905339502473" className="flex items-center gap-4 hover:opacity-100 transition-opacity">
                <Phone className="w-5 h-5 text-earth-luxe" />
                <span className="font-display text-base">+90 533 950 24 73</span>
              </a>
              <a href="mailto:info@dagaltisuite.com" className="flex items-center gap-4 hover:opacity-100 transition-opacity">
                <Mail className="w-5 h-5 text-earth-luxe" />
                <span className="font-display text-base">info@dagaltisuite.com</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-earth-luxe" />
                <span className="font-display text-base">Dibektaş, Sapanca / Sakarya</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-display text-xl italic opacity-40">Hızlı Menü</h4>
            <div className="grid grid-cols-2 gap-4">
              {links.map(link => (
                <a key={link.name} href={link.href} className="font-display text-base hover:text-earth-luxe transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-display text-xl italic opacity-40">Sosyal Medya</h4>
            <a 
              href="https://www.instagram.com/sapancadagaltibungalov/" 
              target="_blank" 
              className="group flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-6 h-6 text-earth-luxe" />
              <div>
                <span className="block font-display text-base">Instagram</span>
                <span className="block text-xs opacity-50">@sapancadagaltibungalov</span>
              </div>
            </a>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <span className="font-display text-2xl tracking-tighter">
            Dağaltı <span className="italic">Suite</span>
          </span>
          <p className="font-display text-xs italic">
            © 2026. Tüm Hakları Saklıdır.
          </p>
        </div>

      </div>
    </footer>
  );
}
