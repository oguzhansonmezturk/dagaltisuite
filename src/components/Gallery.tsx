"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const bungalows = [
  {
    id: 1,
    title: "Lakeside Suite",
    description: "Özel havuzlu ve göl manzaralı dış mekan terası.",
    image: "https://images.unsplash.com/photo-1587061949734-75a99573aa65?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Forest Edge Cabin",
    description: "Orman sesleriyle uyanacağınız, şömineli sıcak bir yuva.",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246a?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mountain View Loft",
    description: "Modern mimari ve jakuzi keyfinin zirvesi.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Garden Retreat",
    description: "Ailenizle huzurlu vakit geçirebileceğiniz geniş bahçeli ev.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section className="py-32 px-6 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-earth text-sm font-semibold tracking-widest uppercase block mb-4">Portföyümüz</span>
          <h2 className="text-4xl md:text-6xl font-serif text-forest leading-tight">
            Konaklama <br /> Seçenekleri
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 h-[600px]">
          {bungalows.map((item) => (
            <motion.div
              key={item.id}
              layout
              onHoverStart={() => setExpandedId(item.id)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                expandedId === item.id ? "flex-[4]" : "flex-1"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover brightness-[0.8] hover:brightness-100 transition-all duration-700"
              />
              
              <div className={`absolute bottom-0 left-0 right-0 p-8 transition-opacity duration-500 ${
                expandedId === item.id ? "opacity-100" : "opacity-0"
              }`}>
                <div className="glass p-6 text-white backdrop-blur-md">
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>

              {expandedId !== item.id && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-white font-serif text-xl -rotate-90 whitespace-nowrap tracking-widest uppercase opacity-50">
                    {item.title}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
