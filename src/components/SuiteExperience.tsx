"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Plus, Coffee, Waves, Flame, Heart, Tv } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const experiences = [
  {
    id: "01",
    title: "Huzurlu Başlangıç",
    description: "Sapanca'nın en sakin köşesinde, doğanın ve modern konforun buluştuğu eşsiz bir atmosfer.",
    image: "/images/discekim2.jpeg",
    icon: <Heart className="w-6 h-6" />,
    stats: ["Doğa Manzarası", "Huzurlu Konum", "Modern Mimari"]
  },
  {
    id: "02",
    title: "Jakuzi Keyfi",
    description: "Gün boyu sıcak bir mola. Doğanın kalbinde, tüm yorgunluğunuzu unutturacak bir deneyim.",
    image: "/images/jakuzi2.jpeg",
    icon: <Waves className="w-6 h-6" />,
    stats: ["Isıtmalı Jakuzi", "Isıtmalı Havuz", "Dinlenme Alanı"]
  },
  {
    id: "03",
    title: "Sinema ve Şömine",
    description: "Şömine sıcaklığı eşliğinde sinema keyfi. Akşamlarınızı en sevdiğiniz filmlerle, size özel ve sıcak bir atmosferde geçirin.",
    image: "/images/iccekim1.jpeg",
    icon: <Tv className="w-6 h-6" />,
    stats: ["Netflix & Smart TV", "Keyif Köşesi", "Sıcak Atmosfer"]
  },
  {
    id: "04",
    title: "Konforlu Uyku Alanı",
    description: "Huzurlu bir dinlenme deneyimi için özenle tasarlanmış, ferah ve modern uyku alanı.",
    image: "/images/yatak.jpeg",
    icon: <Heart className="w-6 h-6" />,
    stats: ["Geniş Yatak", "Ferah Alan", "Yüksek Konfor"]
  },
  {
    id: "05",
    title: "Mutfak & Lezzet",
    description: "Tam donanımlı mutfağınızda kahvenizi yudumlayacağınız sıcak bir köşe.",
    image: "/images/mutfak.jpeg",
    icon: <Coffee className="w-6 h-6" />,
    stats: ["Kahve Makinesi", "Airfryer", "Mutfak Ekipmanları"]
  },
  {
    id: "06",
    title: "Size Özel Bahçe",
    description: "Gökyüzü ile baş başa. Ateş çukuru ve havuz başında yıldızların ve sessizliğin tadını çıkarın.",
    image: "/images/havuz1.jpeg",
    icon: <Flame className="w-6 h-6" />,
    stats: ["Ateş Çukuru", "Havuz Keyfi", "Özel Bahçe"]
  },
  {
    id: "07",
    title: "Doğanın Kalbinde",
    description: "Şehrin gürültüsünden tamamen kopup, kendinizi doğanın kollarına bırakacağınız size özel bir tatil.",
    image: "/images/kedi.png",
    icon: <Heart className="w-6 h-6" />,
    stats: ["Sessiz ve İzole", "Pati Dostu", "Bahçe Keyfi"]
  }
];

export default function SuiteExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.71%"]);

  return (
    <section id="olanaklar" ref={containerRef} className="relative h-[700vh] bg-cream-luxe">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden vibe-overlay">
        <motion.div style={{ x }} className="flex h-full w-[700vw]">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative h-full w-[100vw] flex-shrink-0 flex items-center justify-center">
              
              {/* Background Backdrop */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={getAssetPath(exp.image)} 
                  alt={exp.title || "Deneyim"} 
                  fill 
                  className="object-cover brightness-105 saturate-[1.1] opacity-[0.1] contrast-75"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cream-luxe via-cream-luxe/60 to-earth-luxe/5" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                  {exp.title && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="font-display text-5xl md:text-8xl text-forest-deep leading-tight italic">
                        {exp.title}
                      </h2>
                    </motion.div>
                  )}

                  <p className="font-display text-xl md:text-2xl text-forest-deep/70 max-w-md leading-relaxed font-light italic">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.stats.map(s => (
                      <div key={s} className="px-6 py-2 rounded-full border border-forest-deep/10 font-display text-xs text-forest-deep/80 italic bg-forest-deep/5 backdrop-blur-md">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                 <div className="hidden md:flex justify-end pr-12">
                    <div className="w-[450px] aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl">
                      <Image 
                        src={getAssetPath(exp.image)} 
                        alt={exp.title || "Detay"} 
                        fill 
                        className="object-cover" 
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Simple Progress Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-forest-deep/10 z-20 rounded-full overflow-hidden">
        <motion.div 
          style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          className="h-full bg-earth-luxe"
        />
      </div>
    </section>
  );
}
