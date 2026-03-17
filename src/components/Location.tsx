"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, ArrowUpRight } from "lucide-react";

const points = [
  { name: "Sapanca Dağaltı Bungalov", dist: "Sizi Bekliyor", icon: <MapPin className="w-4 h-4" /> },
  { name: "Sapanca Göl Kenarı", dist: "10 DK", icon: <Compass className="w-4 h-4" /> },
  { name: "Sapanca Şehir Merkezi", dist: "8 DK", icon: <Navigation className="w-4 h-4" /> },
  { name: "Kartepe Kayak Merkezi", dist: "25 DK", icon: <ArrowUpRight className="w-4 h-4" /> },
  { name: "Maşukiye Şelalesi", dist: "15 DK", icon: <Navigation className="w-4 h-4" /> },
  { name: "Sabiha Gökçen Havalimanı", dist: "60 DK", icon: <ArrowUpRight className="w-4 h-4" /> }
];

export default function Location() {
  return (
    <section id="konum" className="bg-cream-luxe py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-sm text-earth-luxe uppercase tracking-widest block"
          >
            Konumumuz
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-forest-deep italic"
          >
            Doğanın kalbinde, her yere yakın...
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-4">
            {points.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl flex items-center justify-between group border border-forest-deep/5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-earth-luxe">
                    {p.icon}
                  </div>
                  <span className="font-display text-2xl text-forest-deep italic">{p.name}</span>
                </div>
                <span className="font-display text-xs text-earth-luxe uppercase">{p.dist}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 h-[600px] rounded-[3rem] overflow-hidden relative border border-forest-deep/5 shadow-xl"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.245832119246!2d30.30123740000001!3d40.6905832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b731b03cd2875%3A0x3b603d35a3e60d3b!2sSapanca%20Da%C4%9Falti%20Bungalov!5e0!3m2!1str!2str!4v1773681158166!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:saturate-150 transition-all duration-1000"
              />
              
              <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-3xl max-w-sm flex items-center gap-4 shadow-lg border border-forest-deep/5">
                <div className="w-12 h-12 rounded-full bg-earth-luxe flex items-center justify-center">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                   <span className="block font-display text-[10px] text-earth-luxe uppercase mb-1">Açık Adres</span>
                   <span className="block font-display text-lg text-forest-deep italic">Yanık Mevkii, No:23 Sapanca / Sakarya</span>
                </div>
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
