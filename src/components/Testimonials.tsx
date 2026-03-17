"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "ALPAGU HAN",
    role: "Google Yorum",
    text: "Betül Hanım gerçekten çok ilgiliydi. İhtiyaç duyabileceğimiz her şey düşünülmüştü. Havuzu ve manzarası harikaydı, yatağı da oldukça rahattı. Şömine geceyi adeta hamam gibi yaptı 😊",
    stars: 5,
  },
  {
    name: "Coşkun Soydan",
    role: "Google Yorum",
    text: "Oda, havuz, jakuzi hepsi pırıl pırıldı. Havuz sıcaklığı gayet yeterliydi. Ateş çukuru, mangal ve şömine için odunlar bile hazırdı. Merkeze 2-3 km mesafede aradığınız her şeyi bulabiliyorsunuz.",
    stars: 5,
  },
  {
    name: "Aysenur Kartal",
    role: "Google Yorum",
    text: "Sapanca gölü manzarası, ısıtmalı havuzu ve oda içindeki jakuzisi çok keyifliydi. Eve girdiğimizde tertemizdi. Bahçesindeki ateş çukuru ve şöminesi çok güzeldi. Mutfağında her türlü araç gereç mevcut.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-forest text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Quote className="w-80 h-80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-earth text-sm font-semibold tracking-widest uppercase block mb-4">Geri Bildirimler</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Misafirlerimizden <br /> Notlar
            </h2>
          </div>
          <p className="text-white/60 max-w-sm text-lg font-light leading-relaxed">
            Sizden gelen güzel yorumlar, sunduğumuz butik deneyimi her gün daha da iyileştirmemiz için bize ilham veriyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-earth text-earth" />
                ))}
              </div>
              <p className="text-xl font-light italic leading-relaxed mb-10 group-hover:text-white transition-colors">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-serif text-lg">{item.name}</h4>
                <span className="text-earth text-sm uppercase tracking-tighter">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
