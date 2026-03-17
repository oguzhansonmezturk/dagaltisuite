"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Merve Y.",
    rating: 5,
    text: "Çok güzel iki gün geçirdik. Havuz her daim sıcak ve temizdi. Şömine ve klima olması çok iyiydi, hiç üşümedik. Kahvaltımız sıcacık geldi, her şey için teşekkürler.",
    date: "Google Yorum"
  },
  {
    name: "Selin K.",
    rating: 5,
    text: "Tek kelimeyle mükemmel bir tatildi. Havuz suyu her zaman sıcaktı, ev tertemizdi ve ihtiyacınız olan her şey vardı. İşletmeciler çok kibar ve ilgililer, manzarası da çok güzel.",
    date: "Google Yorum"
  },
  {
    name: "Coşkun S.",
    rating: 5,
    text: "Ocak ayında gitmemize rağmen oda ve havuz sıcaktı. Ateş çukuru ve şömine için her şey hazırdı. Betül Hanım her şeyimizle ilgilendi, gönül rahatlığıyla konaklayabilirsiniz.",
    date: "Google Yorum"
  }
];

export default function LuxeReviews() {
  return (
    <section id="yorumlar" className="bg-cream-luxe py-40 px-6 relative overflow-hidden">
      {/* Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-earth-luxe/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-sm text-earth-luxe uppercase tracking-widest block"
          >
            Misafirlerimizin Gözünden
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-forest-deep italic"
          >
            Sizden Dinleyelim
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] space-y-6 shadow-sm border border-forest-deep/5 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-earth-luxe fill-earth-luxe" />
                  ))}
                </div>
                <p className="font-display text-xl text-forest-deep/80 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-forest-deep/5 space-y-1">
                <p className="font-display text-sm text-forest-deep uppercase tracking-widest">{review.name}</p>
                <p className="font-display text-[10px] text-earth-luxe/60 uppercase tracking-widest italic">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
