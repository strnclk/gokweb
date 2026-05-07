'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollIndicator from '@/components/ScrollIndicator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { Check, Star, Users, Zap, Shield, Database, Globe, DollarSign, Building2, TrendingUp, Package, Settings, HelpCircle, ChevronRight, Lightbulb, Cpu, Target, Award, Trophy, ArrowRight, Sparkles, BarChart3, RefreshCw, Minus, CheckCircle2 } from 'lucide-react';

export default function ComparePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const stats = [
    { value: '3', label: 'Akıllı Soru', icon: Target, color: 'from-blue-500 to-blue-600' },
    { value: '5+', label: 'Çözüm Seçeneği', icon: Package, color: 'from-emerald-500 to-emerald-600' },
    { value: '95%', label: 'Doğruluk Oranı', icon: Award, color: 'from-amber-500 to-amber-600' }
  ];

  const products = [
    {
      id: 'mikro-fly',
      name: 'Mikro Fly',
      category: 'E-Ticaret ERP',
      rating: 4.9,
      description: 'E-ticaret entegrasyonu için pazar yeri bağlantılı özel çözüm',
      features: ['Pazar Yeri Entegrasyonu', 'Otomatik Sipariş', 'Stok Senkronizasyonu', 'Kargo Entegrasyonu', 'Ön Muhasebe', 'E-Dönüşüm', 'CRM', 'Karar Destek'],
      pros: ['Pazar yeri entegrasyonu', 'Otomasyon', 'Çoklu platform', 'Gelişmiş analitik'],
      cons: ['E-ticaret odaklı'],
      icon: Globe,
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      recommended: true
    },
    {
      id: 'mikro-jump',
      name: 'Mikro Jump',
      category: 'KOBİ ERP',
      rating: 4.5,
      description: '5-15 çalışanlı KOBİ\'ler için ideal başlangıç ERP çözümü',
      features: ['Stok/Ürün Yönetimi', 'Hizmet ve Masraf', 'Satın Alma ve Tedarikçi', 'Satış ve Müşteri', 'Ön Muhasebe', 'E-Dönüşüm', 'Genel Muhasebe', 'Çek/Senet'],
      pros: ['Kolay kullanım', 'Hızlı kurulum', 'Genel muhasebe'],
      cons: ['Orta seviye özellikler'],
      icon: Zap,
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      id: 'mikro-run',
      name: 'Mikro Run',
      category: 'Küçük İşletme ERP',
      rating: 4.7,
      description: "5'ten az çalışanlı küçük ölçekli işletmeler için hızlı ve pratik muhasebe çözümü",
      features: ['Stok/Ürün Yönetimi', 'Hizmet ve Masraf', 'Satın Alma ve Tedarikçi', 'Satış ve Müşteri', 'Ön Muhasebe', 'E-Dönüşüm'],
      pros: ['Hızlı kurulum', 'Kolay kullanım', 'Uygun fiyat'],
      cons: ['Sınırlı kullanıcı sayısı'],
      icon: Cpu,
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    }
  ];

  const services = [
    {
      id: 'erp-entegrasyon',
      name: 'ERP Entegrasyon Hizmeti',
      category: 'Profesyonel Hizmet',
      rating: 4.7,
      description: 'Mevcut sistemlerinize tam ERP entegrasyonu ve özelleştirme',
      features: ['Sistem Analizi', 'Özelleştirme', 'Veri Migration', 'Eğitim', 'Destek'],
      pros: ['Tam entegrasyon', 'Özelleştirme', 'Uzman destek'],
      cons: ['Zaman alıcı'],
      icon: Users,
      color: 'amber'
    },
    {
      id: 'eflow-entegrasyon',
      name: 'E-Flow BPM',
      category: 'E-Dönüşüm',
      rating: 4.4,
      description: 'E-fatura, e-defter, e-arşiv ve süreç otomasyonu çözümleri',
      features: ['E-Fatura', 'E-Defter', 'E-Arşiv', 'GIB Entegrasyonu', 'Süreç Otomasyonu'],
      pros: ['Yasal uyum', 'Otomasyon', 'Süreç yönetimi'],
      cons: ['Sadece e-dönüşüm'],
      icon: Shield,
      color: 'teal'
    }
  ];

  const questionnaire = [
    {
      id: 'company_size',
      question: 'Şirketiniz kaç çalışana sahip?',
      options: [
        { value: '1-10', label: '1-10 Çalışan (Küçük İşletme)', icon: Users },
        { value: '11-50', label: '11-50 Çalışan (Orta Ölçekli)', icon: Building2 },
        { value: '51-200', label: '51-200 Çalışan (Büyük)', icon: Building2 },
        { value: '200+', label: '200+ Çalışan (Kurumsal)', icon: TrendingUp }
      ]
    },
    {
      id: 'industry',
      question: 'Hangi sektörde faaliyet gösteriyorsunuz?',
      options: [
        { value: 'retail', label: 'Perakende / Mağazacılık', icon: Package },
        { value: 'manufacturing', label: 'Üretim / Sanayi', icon: Settings },
        { value: 'service', label: 'Hizmet Sektörü', icon: Users },
        { value: 'ecommerce', label: 'E-Ticaret', icon: Globe },
        { value: 'other', label: 'Diğer', icon: HelpCircle }
      ]
    },
    {
      id: 'main_need',
      question: 'En çok hangi ihtiyacınız var?',
      options: [
        { value: 'finance', label: 'Finansal yönetim', icon: DollarSign },
        { value: 'inventory', label: 'Stok takibi', icon: Package },
        { value: 'ecommerce_integration', label: 'E-ticaret entegrasyonu', icon: Globe },
        { value: 'automation', label: 'Süreç otomasyonu', icon: Zap },
        { value: 'legal_compliance', label: 'E-dönüşüm uyumu', icon: Shield }
      ]
    }
  ];

  const generateRecommendations = () => {
    setIsAnalyzing(true);
    
    // Simulate analysis time
    setTimeout(() => {
      const scores: Record<string, number> = {};
      
      products.forEach(item => {
        scores[item.id] = 0;
      });

      const companySize = userAnswers.company_size;
      if (companySize === '1-10') {
        scores['mikro-jump'] += 30;
      } else if (companySize === '11-50') {
        scores['mikro-run'] += 25;
        scores['mikro-jump'] += 30;
        scores['mikro-fly'] += 25;
      } else if (companySize === '51-200') {
        scores['mikro-run'] += 30;
        scores['mikro-jump'] += 25;
        scores['erp-entegrasyon'] += 25;
      } else if (companySize === '200+') {
        scores['mikro-run'] += 25;
        scores['mikro-jump'] += 30;
        scores['erp-entegrasyon'] += 30;
      }

      const industry = userAnswers.industry;
      if (industry === 'ecommerce') {
        scores['mikro-fly'] += 40;
      } else if (industry === 'retail') {
        scores['mikro-run'] += 25;
        scores['mikro-jump'] += 30;
      } else if (industry === 'manufacturing') {
        scores['mikro-run'] += 30;
        scores['mikro-jump'] += 35;
      }

      const mainNeed = userAnswers.main_need;
      if (mainNeed === 'finance') {
        scores['mikro-run'] += 25;
        scores['mikro-jump'] += 30;
      } else if (mainNeed === 'inventory') {
        scores['mikro-run'] += 25;
        scores['mikro-jump'] += 30;
      } else if (mainNeed === 'ecommerce_integration') {
        scores['mikro-fly'] += 45;
      }

      // MikroFly'i her zaman öner
      scores['mikro-fly'] += 100;

      const sortedItems = Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([id, score]) => {
          const item = products.find(p => p.id === id);
          return { ...item, score, matchPercentage: Math.round((score / 100) * 100) };
        });

      setRecommendations(sortedItems);
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextStep = () => {
    if (currentStep < questionnaire.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentStep(0);
    setUserAnswers({});
    setRecommendations([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white py-12 md:py-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-8"
          >
            <Lightbulb size={14} />
            Akıllı Çözüm Danışmanı
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900"
          >
            İşletmeniz İçin
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Doğru Çözümü Bulun</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            İşletmenizin ihtiyaçlarını analiz ederek size en uygun ERP ve e-dönüşüm çözümlerini öneriyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {!showResults && !isAnalyzing && (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-12"
            >
              <div className="mb-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Soru {currentStep + 1} / {questionnaire.length}
                  </span>
                  <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {Math.round(((currentStep + 1) / questionnaire.length) * 100)}% Tamamlandı
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questionnaire.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  {questionnaire[currentStep].question}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questionnaire[currentStep].options.map((option, idx) => {
                    const Icon = option.icon;
                    const isSelected = userAnswers[questionnaire[currentStep].id] === option.value;
                    
                    return (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => handleAnswer(questionnaire[currentStep].id, option.value)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all text-left group ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-50/50 shadow-md' 
                            : 'border-gray-200 hover:border-blue-300 bg-white hover:shadow-sm'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-1">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-colors ${
                            isSelected ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-100 group-hover:bg-blue-100'
                          }`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'}`} />
                          </div>
                          <span className={`font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                            {option.label}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium"
                >
                  <ChevronRight className="w-4 h-4 mr-1 rotate-180 inline" />
                  Önceki
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={!userAnswers[questionnaire[currentStep].id]}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium shadow-md hover:shadow-lg"
                >
                  {currentStep === questionnaire.length - 1 ? 'Önerileri Gör' : 'Sonraki'}
                  <ChevronRight className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {isAnalyzing && (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-4 border-blue-100 border-t-blue-600 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              İhtiyaçlarınız Analiz Ediliyor
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              En uygun çözümleri belirlemek için verilerinizi inceliyoruz...
            </motion.p>

            <div className="space-y-3 max-w-sm mx-auto">
              {[
                { text: 'Şirket profili analiz ediliyor', delay: 0.6 },
                { text: 'Sektör ihtiyaçları eşleştiriliyor', delay: 1.0 },
                { text: 'En uygun çözümler belirleniyor', delay: 1.4 },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.delay }}
                  className="flex items-center gap-3 text-sm text-gray-500"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: step.delay, repeat: Infinity, repeatDelay: 2 }}
                    className="w-2 h-2 rounded-full bg-blue-600"
                  />
                  {step.text}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showResults && (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 md:mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Analiz Tamamlandı
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                İşletmeniz İçin En Uygun Çözümler
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Akıllı algoritmamız ihtiyaçlarınıza en uygun {recommendations.length} çözümü belirledi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
              {recommendations.map((item, index) => {
                const Icon = item.icon;
                const isTop = index === 0;
                const gradientColor = isTop ? 'from-blue-600 to-purple-600' : item.color || 'from-gray-600 to-gray-700';
                
                const logoMap: Record<string, string> = {
                  'mikro-run': '/mikro-run-logo.png',
                  'mikro-jump': '/mikro-jump-logo.png',
                  'mikro-fly': '/mikro-fly-logo.png'
                };
                const logoUrl = logoMap[item.id];
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    {isTop && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-1 text-xs font-bold shadow-lg">
                          <Trophy className="w-3 h-3 mr-1" />
                          EN UYGUN
                        </Badge>
                      </div>
                    )}

                    <Card className={`h-full pt-8 ${isTop ? 'border-2 border-blue-200 shadow-xl shadow-blue-100/50 ring-1 ring-blue-100' : 'border border-gray-200 shadow-md hover:shadow-lg'} transition-shadow`}>
                      <CardHeader className="items-center text-center pb-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.15 }}
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-white shadow-lg overflow-hidden"
                        >
                          {logoUrl ? (
                            <img src={logoUrl} alt={item.name} className="w-10 h-10 object-contain" />
                          ) : (
                            <Icon className="w-7 h-7 text-gray-600" />
                          )}
                        </motion.div>
                        <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.category}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-5">
                        <p className="text-gray-600 text-sm leading-relaxed text-center">{item.description}</p>

                        <div className="flex items-center justify-center gap-1">
                          {[1,2,3,4,5].map(s => (
                            <Star key={s} className={`w-4 h-4 ${s <= Math.round(item.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                          ))}
                          <span className="ml-2 text-sm font-semibold text-gray-700">{item.rating}</span>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Eşleşme Oranı</span>
                            <span className={`text-sm font-bold ${isTop ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-900'}`}>
                              {item.matchPercentage}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.matchPercentage}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                              className={`bg-gradient-to-r ${gradientColor} h-2.5 rounded-full`}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-gray-700">Öne Çıkan Özellikler</div>
                          {item.pros.slice(0, 3).map((pro: string, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.15 + i * 0.1 }}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle2 className={`w-4 h-4 mr-2 flex-shrink-0 ${isTop ? 'text-blue-600' : 'text-emerald-500'}`} />
                              {pro}
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter>
                        <motion.button 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.15 }}
                          onClick={() => {
                            if (item.id === 'mikro-run') router.push('/mikro-run');
                            else if (item.id === 'mikro-jump') router.push('/mikro-jump');
                            else if (item.id === 'mikro-fly') router.push('/mikro-fly');
                            else if (item.id === 'erp-entegrasyon') router.push('/services');
                            else if (item.id === 'eflow-entegrasyon') router.push('/eflow-bpm');
                          }}
                          className={`w-full px-4 py-3 rounded-xl font-medium transition-all ${
                            isTop 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                              : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                          }`}
                        >
                          Detaylı İncele
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </motion.button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                onClick={resetQuestionnaire}
                variant="outline"
                className="px-6 py-3 rounded-xl border-gray-300 hover:bg-gray-100 font-medium"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Testi Tekrarla
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
              <BarChart3 size={14} />
              Detaylı Karşılaştırma
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mikro Ürün Karşılaştırması
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına en uygun Mikro çözümünü karşılaştırın
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="px-4 md:px-6 py-4 md:py-5 text-left font-semibold min-w-[140px] md:min-w-[180px] text-sm md:text-base">Özellik</th>
                    {products.map((product) => {
                      const logoMap: Record<string, string> = {
                        'mikro-run': '/mikro-run-logo.png',
                        'mikro-jump': '/mikro-jump-logo.png',
                        'mikro-fly': '/mikro-fly-logo.png'
                      };
                      const logoUrl = logoMap[product.id];
                      return (
                        <th key={product.id} className={`px-4 md:px-6 py-4 md:py-5 text-center font-semibold min-w-[120px] md:min-w-[140px] text-sm md:text-base ${product.recommended ? 'bg-gradient-to-b from-blue-600 to-blue-700' : ''}`}>
                          <div className="flex flex-col items-center gap-2">
                            {product.recommended && (
                              <div className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                ÖNERİLEN
                              </div>
                            )}
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden ${product.recommended ? 'bg-amber-100 ring-2 ring-amber-400' : 'bg-white'}`}>
                              <img src={logoUrl} alt={product.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                            </div>
                            <span className={`text-xs md:text-sm font-bold ${product.recommended ? 'text-amber-100' : ''}`}>{product.name}</span>
                            <span className={`text-[10px] md:text-xs ${product.recommended ? 'text-amber-200' : 'opacity-70'}`}>{product.category}</span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Stok/Ürün Yönetimi', values: [true, true, true] },
                    { label: 'Hizmet ve Masraf', values: [true, true, true] },
                    { label: 'Satın Alma ve Tedarikçi', values: [true, true, true] },
                    { label: 'Satış ve Müşteri', values: [true, true, true] },
                    { label: 'Ön Muhasebe', values: [true, true, true] },
                    { label: 'E-Dönüşüm', values: [true, true, true] },
                    { label: 'CRM', values: [true, false, false] },
                    { label: 'Karar Destek', values: [true, false, false] },
                    { label: 'Pazar Yeri Entegrasyonu', values: [true, false, false] },
                    { label: 'Kargo Entegrasyonu', values: [true, false, false] },
                    { label: 'Otomatik Sipariş', values: [true, false, false] },
                    { label: 'Stok Senkronizasyonu', values: [true, false, false] },
                  ].map((row, rowIdx) => (
                    <tr key={row.label} className={`border-b border-gray-100 transition-colors hover:bg-blue-50/30 ${rowIdx % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-gray-700 font-medium text-xs md:text-sm">{row.label}</td>
                      {row.values.map((val: any, colIdx: number) => {
                        const isRecommended = colIdx === 0 && products[0].recommended;
                        return (
                          <td key={colIdx} className={`px-4 md:px-6 py-3 md:py-4 text-center ${isRecommended ? 'bg-blue-50/50' : ''}`}>
                            {typeof val === 'boolean' ? (
                              val ? (
                                <CheckCircle2 className={`w-4 h-4 md:w-5 md:h-5 mx-auto ${isRecommended ? 'text-blue-600' : 'text-emerald-500'}`} />
                              ) : (
                                <Minus className="w-4 h-4 md:w-5 md:h-5 mx-auto text-gray-300" />
                              )
                            ) : (
                              <span className={`text-xs md:text-sm font-medium ${
                                val === 'Düşük' ? 'text-emerald-600' : 
                                val === 'Orta' ? 'text-amber-600' : 
                                val === 'Yüksek' ? 'text-red-500' : 'text-gray-600'
                              }`}>{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product) => {
              const logoMap: Record<string, string> = {
                'mikro-run': '/mikro-run-logo.png',
                'mikro-jump': '/mikro-jump-logo.png',
                'mikro-fly': '/mikro-fly-logo.png'
              };
              const logoUrl = logoMap[product.id];
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <button
                    onClick={() => router.push(`/${product.id}`)}
                    className="w-full p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-left flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-md flex-shrink-0 overflow-hidden">
                      <img src={logoUrl} alt={product.name} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.category}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gray-600 transition-colors" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 md:p-16 rounded-3xl text-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
                <Lightbulb size={14} />
                Uzman Desteği
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Karar Vermekte Zorlanıyor musunuz?
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Uzmanlarımız size en uygun çözümü seçmenizde yardımcı olabilir. Ücretsiz danışmanlık için hemen iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push('/contact')}
                  className="px-8 py-6 bg-white text-gray-900 rounded-xl hover:bg-gray-100 font-semibold shadow-xl text-base transition-all"
                >
                  Ücretsiz Danışmanlık
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={() => router.push('/contact')}
                  variant="outline"
                  className="px-8 py-6 bg-white/10 border-white/30 text-white rounded-xl hover:bg-white/20 font-semibold text-base transition-all"
                >
                  Detaylı Analiz
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
