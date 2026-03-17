"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-offwhite pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif text-forest mb-6 tracking-widest">DAĞALTI</h2>
            <p className="text-forest/60 max-w-sm mb-8 leading-relaxed">
              Sapanca'nın kalbinde, lükse ve doğaya modern bir pencere açıyoruz. 
              Ruhunuzu dinlendirmek için tasarlanmış, dijital detoksun yeni adresi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-forest/10 text-forest hover:bg-forest hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-forest/10 text-forest hover:bg-forest hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-forest mb-6">İletişim & Konaklama</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-forest/60">
                <MapPin className="w-5 h-5 text-earth shrink-0" />
                <span>Sapanca, Sakarya (Merkeze 5 dk)</span>
              </li>
              <li className="flex items-center gap-3 text-forest/60">
                <Phone className="w-5 h-5 text-earth shrink-0" />
                <span>+90 533 950 24 73</span>
              </li>
              <li className="flex items-center gap-3 text-forest/60 pt-4 border-t border-forest/5">
                <span className="text-xs font-bold text-forest uppercase tracking-widest">Giriş:</span>
                <span className="text-forest/60">14:00</span>
              </li>
              <li className="flex items-center gap-3 text-forest/60">
                <span className="text-xs font-bold text-forest uppercase tracking-widest">Çıkış:</span>
                <span className="text-forest/60">12:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-forest mb-6">Hızlı Linkler</h4>
            <ul className="space-y-4 text-forest/60">
              <li className="hover:text-earth cursor-pointer transition-colors block">Bungalowlarımız</li>
              <li className="hover:text-earth cursor-pointer transition-colors block">Hakkımızda</li>
              <li className="hover:text-earth cursor-pointer transition-colors block">SSS</li>
              <li className="hover:text-earth cursor-pointer transition-colors block">İletişim</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-forest/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-forest/40 uppercase tracking-widest">
            © 2026 SAPANCA DAĞALTI SUITE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-forest/40 uppercase tracking-widest">
            <span className="hover:text-forest cursor-pointer transition-colors">KVKK Aydınlatma Metni</span>
            <span className="hover:text-forest cursor-pointer transition-colors">Gizlilik Politikası</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
