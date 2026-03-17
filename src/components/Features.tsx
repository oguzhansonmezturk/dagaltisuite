"use client";

import { motion } from "framer-motion";
import { Coffee, Waves, Flame, Wifi, Tv, Wind, ShieldCheck, Dumbbell, MapPin } from "lucide-react";

const features = [
  {
    title: "Özel Isıtmalı Havuz & Bahçe",
    description: "Dört mevsim havuz keyfi için kışın ısıtmalı özel sistem ve size özel geniş bir bahçe.",
    icon: <Waves className="w-8 h-8 text-earth" />,
    size: "md:col-span-2 md:row-span-2",
    bg: "bg-forest",
    textColor: "text-white",
  },
  {
    title: "Şömine & Ateş Çukuru",
    description: "İçeride şömine, dışarıda ateş çukuru ve oturma alanı ile huzurlu akşamlar.",
    icon: <Flame className="w-8 h-8 text-earth" />,
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-offwhite",
    textColor: "text-forest",
  },
  {
    title: "Tam Donanımlı Mutfak",
    description: "Airfryer, kahve makinesi, çaycı ve tüm mutfak araç gereçleri elinizin altında.",
    icon: <Coffee className="w-8 h-8 text-earth" />,
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-stone-200",
    textColor: "text-forest",
  },
  {
    title: "Jakuzi & Konfor",
    description: "Güneşlenme alanı, barbekü/mangal alanı ve oda içinde jakuzi keyfi.",
    icon: <Wind className="w-8 h-8 text-earth" />,
    size: "md:col-span-2 md:row-span-1",
    bg: "bg-earth/10",
    textColor: "text-forest",
  },
  {
    title: "Eğlence & Bağlantı",
    description: "Yüksek hızlı Wi-Fi, Netflix ve Akıllı TV ile dijital dünyadan kopmayın.",
    icon: <Tv className="w-8 h-8 text-earth" />,
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-forest",
    textColor: "text-white",
  },
  {
    title: "Huzurlu Lokasyon",
    description: "Merkeze 5 dakika mesafede, ulaşımı kolay ama doğanın tam kalbinde.",
    icon: <MapPin className="w-8 h-8 text-earth" />,
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-offwhite border border-stone-100",
    textColor: "text-forest",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-forest mb-6"
          >
            Ayrıcalıklar & Konfor
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-earth uppercase tracking-[0.3em] text-sm font-medium"
          >
            Uluslararası standartlarda butik hizmet anlayışı
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-auto md:h-[800px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${feature.size} ${feature.bg} p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500`}
            >
              <div className="p-4 bg-white/5 inline-block w-fit group-hover:bg-earth/20 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className={`text-2xl font-serif mb-4 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${feature.textColor === "text-white" ? "text-white/60" : "text-forest/60"}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
