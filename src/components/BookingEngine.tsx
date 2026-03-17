"use client";

import { motion } from "framer-motion";
import { Calendar, Users, MapPin, Search } from "lucide-react";
import { useState } from "react";

export default function BookingEngine() {
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });

  return (
    <div className="relative z-30 -mt-16 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-dark p-8 md:p-10 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Check-in */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-semibold uppercase tracking-widest text-earth">Giriş Tarihi</label>
            <div className="flex items-center gap-4 text-white/90 border-b border-white/10 pb-4 group cursor-pointer">
              <Calendar className="w-5 h-5 text-earth" />
              <input 
                type="text" 
                placeholder="Tarih Seçin" 
                className="bg-transparent border-none outline-none text-lg font-light placeholder:text-white/30 w-full"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-semibold uppercase tracking-widest text-earth">Çıkış Tarihi</label>
            <div className="flex items-center gap-4 text-white/90 border-b border-white/10 pb-4 group cursor-pointer">
              <Calendar className="w-5 h-5 text-earth" />
              <input 
                type="text" 
                placeholder="Tarih Seçin" 
                className="bg-transparent border-none outline-none text-lg font-light placeholder:text-white/30 w-full"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-3">
            <label className="text-xs font-semibold uppercase tracking-widest text-earth">Misafir Sayısı</label>
            <div className="flex items-center gap-4 text-white/90 border-b border-white/10 pb-4 group cursor-pointer">
              <Users className="w-5 h-5 text-earth" />
              <select className="bg-transparent border-none outline-none text-lg font-light w-full appearance-none">
                <option className="bg-forest">2 Yetişkin</option>
                <option className="bg-forest">3 Yetişkin</option>
                <option className="bg-forest">4 Yetişkin</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-end">
            <button className="w-full bg-earth hover:bg-white hover:text-earth text-white py-5 px-8 flex items-center justify-center gap-3 transition-all duration-500 font-semibold tracking-wider">
              <Search className="w-5 h-5" />
              MÜSAİTLİK DURUMU
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
