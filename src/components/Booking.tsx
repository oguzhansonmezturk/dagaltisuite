"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Calendar, Users, ShieldCheck, Check, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, addDays, isBefore } from "date-fns";
import { tr } from "date-fns/locale";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guestCount, setGuestCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [note, setNote] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleComplete = () => {
    const startStr = startDate ? format(startDate, 'dd.MM.yyyy') : '';
    const endStr = endDate ? format(endDate, 'dd.MM.yyyy') : '';
    const noteText = note.trim() ? `\n\nEk Not: ${note.trim()}` : '';
    const message = encodeURIComponent(`Merhaba! Sapanca Dağaltı Suite için ${startStr} - ${endStr} tarihleri arasında ${guestCount} yetişkin ve ${childCount} çocuk (Maks. 12 yaş) için rezervasyon detaylarımı sormak istiyorum.${noteText}`);
    window.open(`https://wa.me/905339502473?text=${message}`, '_blank');
  };

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handleDateClick = (day: Date) => {
    if (isBefore(day, new Date()) && !isToday(day)) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (isBefore(day, startDate)) {
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const isInRange = (day: Date) => {
    if (!startDate || !endDate) return false;
    return day > startDate && day < endDate;
  };

  return (
    <section id="rezervasyon" className="bg-cream-luxe pt-32 pb-64 px-6 relative overflow-hidden min-h-[1100px]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[700px]">
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-display text-5xl md:text-7xl text-forest-deep italic leading-tight">
                Eşsiz Bir Mola
              </h2>
              <div className="max-w-xl space-y-10">
                <p className="font-display text-xl md:text-3xl text-forest-deep/70 leading-relaxed font-light italic">
                  Şehrin tüm gürültüsünü geride bırakıp, sadece size özel bir atmosferde yerinizi ayırtın. 
                </p>
                <div className="pt-4 border-t border-forest-deep/5">
                  <p className="text-forest-deep/40 italic font-display text-sm">
                    * Giriş: 14:00 | Çıkış: 12:00 <br />
                    * Kahvaltı dahil değildir.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                layout: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.5 }
              }}
              className="bg-[#FDFCF9] rounded-[3rem] p-8 md:p-12 shadow-xl border border-earth-luxe/10 relative overflow-hidden flex flex-col justify-between"
            >
              <motion.div layout className="space-y-10 flex-1">
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={cn(
                      "h-1 px-4 flex-1 rounded-full transition-all duration-500",
                      step >= i ? "bg-earth-luxe" : "bg-forest-deep/5"
                    )} />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                      className="space-y-8"
                    >
                      <h3 className="font-display text-3xl text-forest-deep italic">Tarih Belirleyin</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-center justify-between px-2">
                           <button onClick={() => setCurrentMonth(addMonths(currentMonth, -1))} className="p-2 hover:bg-forest-deep/5 rounded-full transition-colors transition-all active:scale-90">
                              <ChevronRight className="w-5 h-5 rotate-180" />
                           </button>
                           <span className="font-display text-lg text-forest-deep capitalize">
                             {format(currentMonth, 'MMMM yyyy', { locale: tr })}
                           </span>
                           <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-2 hover:bg-forest-deep/5 rounded-full transition-colors transition-all active:scale-90">
                              <ChevronRight className="w-5 h-5" />
                           </button>
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center">
                          {['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'].map(d => (
                            <div key={d} className="font-display text-[10px] text-forest-deep/40 mb-2 uppercase tracking-widest">{d}</div>
                          ))}
                          {days.map((day, dIdx) => (
                            <button
                               key={day.toISOString()}
                               onClick={() => handleDateClick(day)}
                               className={cn(
                                 "h-10 w-10 mx-auto rounded-xl flex items-center justify-center font-display text-sm transition-all",
                                 !isSameMonth(day, currentMonth) && "opacity-0 pointer-events-none",
                                 (isBefore(day, new Date()) && !isToday(day)) && "opacity-20 cursor-not-allowed",
                                 isToday(day) && "text-earth-luxe font-bold",
                                 isSameDay(day, startDate!) && "bg-earth-luxe text-white",
                                 isSameDay(day, endDate!) && "bg-earth-luxe text-white",
                                 isInRange(day) && "bg-earth-luxe/10 text-earth-luxe",
                                 !isSameDay(day, startDate!) && !isSameDay(day, endDate!) && "hover:bg-forest-deep/5"
                               )}
                            >
                               {format(day, 'd')}
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                           <div className="bg-forest-deep/5 p-4 rounded-2xl">
                              <span className="block text-[10px] text-forest-deep/40 uppercase mb-1">Giriş</span>
                              <span className="font-display text-sm">{startDate ? format(startDate, 'dd MMM yyyy', { locale: tr }) : 'Seçiniz'}</span>
                           </div>
                           <div className="bg-forest-deep/5 p-4 rounded-2xl">
                              <span className="block text-[10px] text-forest-deep/40 uppercase mb-1">Çıkış</span>
                              <span className="font-display text-sm">{endDate ? format(endDate, 'dd MMM yyyy', { locale: tr }) : 'Seçiniz'}</span>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                      className="space-y-8 min-h-[420px]"
                    >
                      <h3 className="font-display text-3xl text-forest-deep italic">Kaç kişi geleceksiniz?</h3>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between p-6 bg-forest-deep/5 rounded-3xl">
                          <div className="flex items-center gap-4">
                            <Users className="w-5 h-5 text-earth-luxe" />
                            <span className="font-display text-xl text-forest-deep italic">Yetişkin</span>
                          </div>
                          <div className="flex items-center gap-6">
                            <button 
                              onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                              className="w-10 h-10 rounded-full border border-forest-deep/10 flex items-center justify-center text-forest-deep hover:bg-forest-deep hover:text-white transition-colors"
                            >-</button>
                            <span className="font-display text-xl">{guestCount}</span>
                            <button 
                              onClick={() => setGuestCount(Math.min(2, guestCount + 1))}
                              className="w-10 h-10 rounded-full border border-forest-deep/10 flex items-center justify-center text-forest-deep hover:bg-forest-deep hover:text-white transition-colors"
                            >+</button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-6 bg-forest-deep/5 rounded-3xl">
                          <div className="flex items-center gap-4">
                            <Users className="w-5 h-5 text-earth-luxe opacity-60" />
                            <div className="flex flex-col">
                              <span className="font-display text-xl text-forest-deep italic">Çocuk</span>
                              <span className="text-[10px] text-forest-deep/40 uppercase tracking-widest">(0-12 Yaş)</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <button 
                              onClick={() => setChildCount(Math.max(0, childCount - 1))}
                              className="w-10 h-10 rounded-full border border-forest-deep/10 flex items-center justify-center text-forest-deep hover:bg-forest-deep hover:text-white transition-colors"
                            >-</button>
                            <span className="font-display text-xl">{childCount}</span>
                            <button 
                              onClick={() => setChildCount(Math.min(1, childCount + 1))}
                              className="w-10 h-10 rounded-full border border-forest-deep/10 flex items-center justify-center text-forest-deep hover:bg-forest-deep hover:text-white transition-colors"
                            >+</button>
                          </div>
                        </div>
                        <p className="font-display text-sm text-forest-deep/40 text-center italic">Konaklama kapasitesi: 2 Yetişkin + 1 Çocuk.</p>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                      className="space-y-8 min-h-[420px]"
                    >
                      <h3 className="font-display text-3xl text-forest-deep italic">Eklemek İstediğiniz Notlar</h3>
                      <div className="space-y-6">
                        <div className="relative">
                           <MessageSquare className="absolute top-4 left-4 w-5 h-5 text-earth-luxe opacity-40" />
                           <textarea 
                             value={note}
                             onChange={(e) => setNote(e.target.value)}
                             placeholder="Özel isteklerinizi buraya yazabilirsiniz..."
                             className="w-full h-40 bg-forest-deep/5 rounded-3xl p-4 pl-12 font-display text-sm focus:outline-none focus:ring-2 focus:ring-earth-luxe/20 transition-all resize-none"
                           />
                        </div>
                        <p className="font-display text-xs text-forest-deep/30 italic">Notu iletmek mecburi değildir, doğrudan devam edebilirsiniz.</p>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div 
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                      className="space-y-8 min-h-[420px]"
                    >
                      <h3 className="font-display text-3xl text-forest-deep italic">Rezervasyon Özeti</h3>
                      <div className="space-y-6">
                         <div className="p-8 border-2 border-earth-luxe/10 rounded-[2rem] bg-earth-luxe/5 space-y-4">
                            <h4 className="font-display text-2xl text-forest-deep italic leading-tight">Dağaltı Suite Sapanca</h4>
                            <div className="space-y-2">
                               <p className="font-display text-base text-forest-deep/70">
                                 {startDate && endDate && `${format(startDate, 'd MMMM')} - ${format(endDate, 'd MMMM yyyy', { locale: tr })}`}
                               </p>
                               <p className="font-display text-base text-forest-deep/70">
                                 {guestCount} Yetişkin {childCount > 0 && `, ${childCount} Çocuk (Maks. 12 Yaş)`}
                               </p>
                               {note.trim() && (
                                 <div className="pt-4 mt-4 border-t border-earth-luxe/10">
                                   <p className="text-[10px] text-earth-luxe uppercase tracking-widest mb-1">Notunuz:</p>
                                   <p className="font-display text-sm text-forest-deep/60 italic leading-relaxed line-clamp-2">"{note}"</p>
                                 </div>
                               )}
                            </div>
                         </div>
                         <div className="flex items-center gap-3 px-2">
                            <ShieldCheck className="w-5 h-5 text-earth-luxe" />
                            <span className="font-display text-sm text-forest-deep/50 italic">Rezervasyonunuz WhatsApp üzerinden onaylanacaktır.</span>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <div className="pt-8 flex items-center justify-between">
                <button 
                  onClick={() => step > 1 && setStep(s => s - 1)}
                  className={cn(
                    "font-display text-sm text-forest-deep/40 hover:text-forest-deep transition-colors italic",
                    step === 1 && "opacity-0 pointer-events-none"
                  )}
                >
                  Geri Dön
                </button>
                
                <button 
                  onClick={() => step === 4 ? handleComplete() : setStep(s => s + 1)}
                  disabled={step === 1 && (!startDate || !endDate)}
                  className={cn(
                    "bg-earth-luxe px-10 py-5 rounded-full font-display text-sm text-white flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-lg",
                    step === 1 && (!startDate || !endDate) && "opacity-50 cursor-not-allowed grayscale"
                  )}
                >
                  {step === 4 ? "WHATSAPP İLE SOR" : "DEVAM ET"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
