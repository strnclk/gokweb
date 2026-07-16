'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Target, Users, Code, Shield, Zap, Star } from 'lucide-react';

interface CounterProps {
  target: string;
  duration?: number;
  suffix?: string;
  colorClass?: string;
  trigger: boolean;
}

function Counter({ target, duration = 1600, suffix = "", colorClass = "from-blue-600 to-indigo-600", trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0); // Reset count back to 0 when section is out of view
      return;
    }

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end) || start === end) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Ease out quad formula for smooth deceleration
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * end);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [trigger, target, duration]);

  return (
    <motion.div 
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.1 }}
      className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r ${colorClass} bg-clip-text text-transparent mb-2`}
      style={{ display: 'inline-block' }}
    >
      {count}{suffix}
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track viewport intersection of the entire section to trigger counters simultaneously
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <>
      {/* 1. About Section: WARM LINEN/IVORY background (#FAF8F5) to ease eyes, matching light layout, while letting dark bento glow pop */}
      <section 
        ref={sectionRef}
        id="hakkimizda" 
        className="relative py-16 sm:py-24 overflow-hidden bg-[#FAF8F5] border-t border-slate-200/60 scroll-mt-24"
      >
        {/* Soft, warm dotted pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        {/* Soft background glows - warm and pleasant pastel tones */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          
          <div className="text-center md:text-left mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4"
            >
              Hakkımızda
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full origin-left mx-auto md:mx-0"
            />
          </div>

          {/* Bento Grid Layout - Sleek rounded-2xl corners for corporate feel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Core Company Description (Spans 2 columns on desktop) - Crisp Light Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 bg-white/90 border border-slate-200/40 p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(230,225,215,0.25)] flex flex-col justify-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-5 flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-blue-600 rounded-full" />
                Dijital Dönüşüm Yolculuğunuzda Güvenilir Ortağınız
              </h3>
              <p className="text-base md:text-lg text-slate-600 mb-5 leading-relaxed font-semibold">
                Gökkuşağı Yazılım olarak 19 yılı aşkın süredir işletmelerin dijital dönüşüm yolculuklarında yanınızdayız. Mikro ERP, e-dönüşüm çözümleri ve özel yazılım geliştirme alanlarında uzman ekibimizle müşterilerimize değer katıyoruz.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-semibold">
                İstanbul merkezli ofisimizden Türkiye genelinde hizmet veriyor, yerel ve küresel standartlarda çözümler sunuyoruz. Müşteri memnuniyeti odaklı yaklaşımımızla iş süreçlerinizi optimize etmenize yardımcı oluyoruz.
              </p>
            </motion.div>

            {/* Box 2: Experience Counter (Spans 1 column on desktop) - Crisp Light Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="md:col-span-1 bg-white/90 border border-slate-200/40 p-8 rounded-2xl shadow-[0_8px_30px_rgba(230,225,215,0.25)] flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <Counter target="20" suffix="+" colorClass="from-blue-600 via-indigo-600 to-blue-700" trigger={isSectionInView} />
              <div className="text-slate-800 font-extrabold text-lg uppercase tracking-wider">Yıl Deneyim</div>
              <div className="text-slate-500 text-sm mt-2 font-semibold">2007'den beri kurumsal güvenle</div>
            </motion.div>

            {/* Box 3: Projects Counter (Spans 1 column on desktop) - Crisp Light Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="md:col-span-1 bg-white/90 border border-slate-200/40 p-8 rounded-2xl shadow-[0_8px_30px_rgba(230,225,215,0.25)] flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <Counter target="500" suffix="+" colorClass="from-purple-600 via-pink-600 to-purple-700" trigger={isSectionInView} />
              <div className="text-slate-800 font-extrabold text-lg uppercase tracking-wider">Tamamlanan Proje</div>
              <div className="text-slate-500 text-sm mt-2 font-semibold">Farklı ölçekte yüzlerce başarı</div>
            </motion.div>

            {/* Box 4: Why Us List with Rainbow Border Frame (Spans 2 columns on desktop) - Styled Dark as an Accent Card to maintain neon reflection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-2 p-[2px] bg-gradient-to-r from-[#FF007F] via-[#7B2CBF] via-[#4361EE] via-[#4CC9F0] to-[#FF007F] rounded-2xl shadow-[0_15px_40px_rgba(168,85,247,0.25)] overflow-visible"
            >
              <div className="w-full h-full bg-[#0E121F] rounded-[14px] p-8 md:p-10 relative overflow-hidden text-white flex flex-col justify-center">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-xl md:text-2xl font-bold mb-8 relative z-10 flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-purple-500 rounded-full" />
                  Neden Gökkuşağı Yazılım?
                </h3>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {/* Blue - Users */}
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Users size={22} />
                    </div>
                    <span className="text-slate-200 text-sm md:text-base font-bold group-hover:text-white transition-colors leading-snug">
                      Uzman teknik ekibimizle profesyonel destek
                    </span>
                  </li>

                  {/* Purple - Code */}
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Code size={22} />
                    </div>
                    <span className="text-slate-200 text-sm md:text-base font-bold group-hover:text-white transition-colors leading-snug">
                      Özelleştirilebilir çözümler
                    </span>
                  </li>

                  {/* Pink - Shield */}
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Shield size={22} />
                    </div>
                    <span className="text-slate-200 text-sm md:text-base font-bold group-hover:text-white transition-colors leading-snug">
                      7/24 kesintisiz teknik destek
                    </span>
                  </li>

                  {/* Orange - Zap */}
                  <li className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-400 border border-orange-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Zap size={22} />
                    </div>
                    <span className="text-slate-200 text-sm md:text-base font-bold group-hover:text-white transition-colors leading-snug">
                      Yenilikçi teknolojiler
                    </span>
                  </li>

                  {/* Emerald - Star */}
                  <li className="flex items-center gap-4 group sm:col-span-2">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Star size={22} />
                    </div>
                    <span className="text-slate-200 text-sm md:text-base font-bold group-hover:text-white transition-colors leading-snug">
                      Müşteri memnuniyeti odaklı ve veri odaklı iş ortağı yaklaşımı
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Vision Mission Section: Shared warm background (#FAF8F5) with separate top border to mark section boundary */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-[#FAF8F5] border-t border-slate-200/80 border-b border-slate-200/60">
        {/* Soft, warm dotted pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        {/* Soft background light süzmeleri (blur blobs) */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-purple-100/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center md:text-left mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4"
            >
              Vizyonumuz & Misyonumuz
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full origin-left mx-auto md:mx-0"
            />
          </div>

          {/* Cards wrapped in max-w-6xl (one step below max-w-7xl) to slightly reduce their width by user demand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            {/* Vizyonumuz - Rainbow Glow Dark Card with rounded-2xl edges and massive padding */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="p-[2px] bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 rounded-2xl shadow-[0_12px_35px_rgba(139,92,246,0.18)] overflow-visible"
            >
              <div className="w-full h-full bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 rounded-[14px] p-10 md:p-14 text-slate-800 relative overflow-hidden flex flex-col justify-between">
                {/* Subtle background mesh on dark bento card */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />
                
                <div>
                  <div className="w-16 h-16 bg-white/80 border border-blue-200 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Vizyonumuz</h3>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    Türkiye'nin önde gelen yazılım çözümleri sağlayıcısı olarak, işletmelerin dijital dönüşümünde lider rol oynamak ve yenilikçi teknolojilerle sektör standartlarını belirlemek.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Misyonumuz - Rainbow Glow Dark Card with rounded-2xl edges and massive padding */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="p-[2px] bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 rounded-2xl shadow-[0_12px_35px_rgba(139,92,246,0.18)] overflow-visible"
            >
              <div className="w-full h-full bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 rounded-[14px] p-10 md:p-14 text-slate-800 relative overflow-hidden flex flex-col justify-between">
                {/* Subtle background mesh on dark bento card */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />
                
                <div>
                  <div className="w-16 h-16 bg-white/80 border border-purple-200 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Misyonumuz</h3>
                  <p className="text-slate-700 leading-relaxed text-base font-medium">
                    Müşterilerimizin iş hedeflerine ulaşmaları için güvenilir, ölçeklenebilir ve kullanıcı dostu yazılım çözümleri sunarak sürdürülebilir büyüme sağlamak.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Works Section: Rich royal violet-purple background (#4A3572), with bottom padding increased (pb-28 sm:pb-40) to add dikey boşluk (breathing margin-bottom) */}
      <section className="relative pt-16 pb-28 sm:pt-24 sm:pb-40 overflow-hidden bg-[#4A3572] border-t border-[#3B285C] text-white">
        {/* Subtle light purple grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
        
        {/* Soft background purple-blue ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-16">
            {/* Highly readable, bold/black heading structure */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white"
            >
              Başarı Hikayeleri
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-slate-100 font-semibold max-w-2xl mx-auto"
            >
              İş ortaklarımızla gerçekleştirdiğimiz dönüşüm projeleri
            </motion.p>
          </div>

          {/* Crisp, light white cards with enlarged icons and highly readable corporate typography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full">
            {/* Story 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-white rounded-2xl p-8 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden group text-slate-800"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Glowing blue themed icon badge - Enlarged to w-14 h-14 with size={26} icon */}
                  <div className="w-14 h-14 bg-blue-50 border border-blue-100/80 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                    <TrendingUp size={26} />
                  </div>
                  {/* Highly visible modern gradient number from the button palette */}
                  <span className="text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-mono select-none">01</span>
                </div>
                
                {/* Premium Corporate Typography: font-extrabold title and font-medium dark-gray body */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Üretim ERP Entegrasyonu</h3>
                <p className="text-slate-700 text-[14.5px] leading-relaxed font-medium mb-6">Büyük ölçekli üretim firması için uçtan uca ERP dönüşümü. 6 ayda tamamlanan proje ile %40 verimlilik artışı.</p>
              </div>
              
              {/* Aligned border-t and sector info - Indigo tinted tag structure */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="text-[10px] font-extrabold text-indigo-600 tracking-widest uppercase">SEKTÖR</div>
                <div className="text-sm font-bold text-slate-800 mt-1">Otomotiv Yan Sanayi</div>
              </div>
            </motion.div>

            {/* Story 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white rounded-2xl p-8 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden group text-slate-800"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Glowing indigo themed icon badge - Enlarged to w-14 h-14 with size={26} icon */}
                  <div className="w-14 h-14 bg-indigo-50 border border-indigo-100/80 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                    <Zap size={26} />
                  </div>
                  {/* Highly visible modern gradient number from the button palette */}
                  <span className="text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-mono select-none">02</span>
                </div>
                
                {/* Premium Corporate Typography: font-extrabold title and font-medium dark-gray body */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">Pazaryeri Entegrasyonu</h3>
                <p className="text-slate-700 text-[14.5px] leading-relaxed font-medium mb-6">Perakende zinciri için 12 pazaryeri entegrasyonu. Otomatik sipariş yönetimi ile %25 satış artışı.</p>
              </div>
              
              {/* Aligned border-t and sector info - Indigo tinted tag structure */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="text-[10px] font-extrabold text-indigo-600 tracking-widest uppercase">SEKTÖR</div>
                <div className="text-sm font-bold text-slate-800 mt-1">Perakende</div>
              </div>
            </motion.div>

            {/* Story 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-white rounded-2xl p-8 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden group text-slate-800"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Glowing purple themed icon badge - Enlarged to w-14 h-14 with size={26} icon */}
                  <div className="w-14 h-14 bg-purple-50 border border-purple-100/80 text-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                    <Shield size={26} />
                  </div>
                  {/* Highly visible modern gradient number from the button palette */}
                  <span className="text-4xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-mono select-none">03</span>
                </div>
                
                {/* Premium Corporate Typography: font-extrabold title and font-medium dark-gray body */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">E-Dönüşüm Dönüşümü</h3>
                <p className="text-slate-700 text-[14.5px] leading-relaxed font-medium mb-6">Lojistik şirketi için e-fatura ve e-defter sistemi. Aylık %15 operasyonel maliyet tasarrufu.</p>
              </div>
              
              {/* Aligned border-t and sector info - Indigo tinted tag structure */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="text-[10px] font-extrabold text-indigo-600 tracking-widest uppercase">SEKTÖR</div>
                <div className="text-sm font-bold text-slate-800 mt-1">Lojistik</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
