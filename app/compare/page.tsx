'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Check, Star, Users, Zap, Shield, Database, Globe, Clock, DollarSign, Building2, TrendingUp, Package, Settings, HelpCircle, ChevronRight, Lightbulb, Cpu, Target, Award, Trophy } from 'lucide-react';

export default function ComparePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const stats = [
    { value: '3', label: 'Akıllı Soru', icon: Target },
    { value: '5+', label: 'Çözüm Seçeneği', icon: Package },
    { value: '95%', label: 'Doğruluk Oranı', icon: Award }
  ];

  const products = [
    {
      id: 'mikro-run',
      name: 'Mikro Run',
      category: 'Performans ERP',
      rating: 4.7,
      description: 'Büyüyen işletmeler için gelişmiş muhasebe ve yönetim çözümü',
      features: ['Finansal Yönetim', 'Stok Takibi', 'Raporlama', 'Banka Entegrasyonu', 'Çoklu Kullanıcı'],
      pros: ['Gelişmiş özellikler', 'Performans analizi', 'Çoklu kullanıcı'],
      cons: ['Orta seviye kurulum'],
      icon: Cpu
    },
    {
      id: 'mikro-jump',
      name: 'Mikro Jump',
      category: 'Başlangıç ERP',
      rating: 4.5,
      description: 'KOBİler için ideal başlangıç ERP çözümü',
      features: ['Finansal Yönetim', 'Stok Takibi', 'Fatura Yönetimi', 'Raporlama'],
      pros: ['Kolay kullanım', 'Hızlı kurulum'],
      cons: ['Sınırlı özellikler'],
      icon: Zap
    },
    {
      id: 'mikro-fly',
      name: 'Mikro Fly',
      category: 'E-Ticaret ERP',
      rating: 4.6,
      description: 'E-ticaret entegrasyonu için özel çözüm',
      features: ['Pazar Yeri Entegrasyonu', 'Otomatik Sipariş', 'Stok Senkronizasyonu'],
      pros: ['Pazar yeri entegrasyonu', 'Otomasyon'],
      cons: ['Sadece e-ticaret'],
      icon: Globe
    },
    {
      id: 'mikro-v14',
      name: 'Mikro V14',
      category: 'Kurumsal ERP',
      rating: 4.8,
      description: 'Kapsamlı ERP çözümü için gelişmiş özellikler',
      features: ['Finansal Yönetim', 'Stok Takibi', 'CRM', 'Raporlama', 'E-Fatura'],
      pros: ['Gelişmiş özellikler', 'Kapsamlı raporlama', 'Esnek yapı'],
      cons: ['Karmaşık kurulum'],
      icon: Database
    }
  ];

  const services = [
    {
      id: 'erp-entegrasyon',
      name: 'ERP Entegrasyon Hizmeti',
      category: 'Profesyonel Hizmet',
      rating: 4.7,
      description: 'Mevcut sistemlerinize ERP entegrasyonu',
      features: ['Sistem Analizi', 'Özelleştirme', 'Veri Migration', 'Eğitim', 'Destek'],
      pros: ['Tam entegrasyon', 'Özelleştirme', 'Uzman destek'],
      cons: ['Zaman alıcı'],
      icon: Users
    },
    {
      id: 'eflow-entegrasyon',
      name: 'E-Flow Entegrasyonu',
      category: 'E-Dönüşüm',
      rating: 4.4,
      description: 'E-fatura, e-defter, e-arşiv çözümleri',
      features: ['E-Fatura', 'E-Defter', 'E-Arşiv', 'GIB Entegrasyonu'],
      pros: ['Yasal uyum', 'Otomasyon'],
      cons: ['Sadece e-dönüşüm'],
      icon: Shield
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
    console.log('Generating recommendations...');
    setIsAnalyzing(true);
    
    // Simulate analysis time
    setTimeout(() => {
      const scores: Record<string, number> = {};
      
      [...products, ...services].forEach(item => {
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
        scores['mikro-v14'] += 30;
        scores['erp-entegrasyon'] += 25;
      } else if (companySize === '200+') {
        scores['mikro-run'] += 25;
        scores['mikro-v14'] += 35;
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
        scores['mikro-v14'] += 35;
      }

      const mainNeed = userAnswers.main_need;
      if (mainNeed === 'finance') {
        scores['mikro-run'] += 25;
        scores['mikro-v14'] += 30;
      } else if (mainNeed === 'inventory') {
        scores['mikro-run'] += 25;
        scores['mikro-jump'] += 30;
      } else if (mainNeed === 'ecommerce_integration') {
        scores['mikro-fly'] += 45;
      } else if (mainNeed === 'legal_compliance') {
        scores['eflow-entegrasyon'] += 40;
      }

      const sortedItems = Object.entries(scores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([id, score]) => {
          const item = [...products, ...services].find(p => p.id === id);
          return { ...item, score, matchPercentage: Math.round((score / 100) * 100) };
        });

      console.log('Recommendations generated:', sortedItems);
      setRecommendations(sortedItems);
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleAnswer = (questionId: string, answer: string) => {
    console.log('Answer selected:', questionId, answer);
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
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-gray-900"
          >
            İşletmeniz İçin
            <br />
            <span className="text-gray-600">Doğru Çözümü Bulun</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            İşletmenizin ihtiyaçlarını analiz ederek size en uygun ERP ve e-dönüşüm çözümlerini öneriyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {!showResults && (
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Soru {currentStep + 1} / {questionnaire.length}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {Math.round(((currentStep + 1) / questionnaire.length) * 100)}% Tamamlandı
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-900 h-2 rounded-full transition-all"
                    style={{ width: `${((currentStep + 1) / questionnaire.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {questionnaire[currentStep].question}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questionnaire[currentStep].options.map((option) => {
                    const Icon = option.icon;
                    const isSelected = userAnswers[questionnaire[currentStep].id] === option.value;
                    
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          console.log('Button clicked:', option.value);
                          handleAnswer(questionnaire[currentStep].id, option.value);
                        }}
                        className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all text-left ${
                          isSelected 
                            ? 'border-gray-900 bg-gray-50' 
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-1">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            isSelected ? 'bg-gray-900' : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                          </div>
                          <span className={`font-medium ${isSelected ? 'text-gray-900' : 'text-gray-900'}`}>
                            {option.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4 mr-2 rotate-180 inline" />
                  Önceki
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={!userAnswers[questionnaire[currentStep].id]}
                  className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === questionnaire.length - 1 ? 'Önerileri Gör' : 'Sonraki'}
                  <ChevronRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {isAnalyzing && (
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border-4 border-gray-200 border-t-gray-900 rounded-full"
                />
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              İhtiyaçlarınız Analiz Ediliyor
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600"
            >
              En uygun çözümleri belirlemek için verilerinizi inceliyoruz...
            </motion.p>
          </div>
        </section>
      )}

      {showResults && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                İşletmeniz İçin En Uygun Çözümler
              </h2>
              <p className="text-lg text-gray-600">
                Yapay zeka destekli algoritmamız ihtiyaçlarınıza en uygun {recommendations.length} çözümü belirledi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {recommendations.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`bg-white rounded-lg shadow-sm p-6 border-2 relative ${
                      index === 0 ? 'border-gray-900 shadow-lg scale-105 z-10' : 'border-gray-200'
                    }`}
                  >
                    {index === 0 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.15 }}
                        className="text-center mb-4"
                      >
                        <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                          EN UYGUN
                        </span>
                      </motion.div>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.15 }}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gray-100`}
                    >
                      <Icon className="w-6 h-6 text-gray-900" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-gray-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-600">{item.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Eşleşme Oranı</span>
                        <span className="text-sm font-bold text-gray-900">{item.matchPercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.matchPercentage}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                          className="bg-gray-900 h-2 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-2">Neden uygun?</div>
                      {item.pros.slice(0, 2).map((pro: string, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.15 + i * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Check className="w-3 h-3 mr-2 flex-shrink-0 text-gray-900" />
                          {pro}
                        </motion.div>
                      ))}
                    </div>

                    <motion.button 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.15 }}
                      onClick={() => {
                        if (item.id === 'mikro-run') router.push('/mikro-run');
                        else if (item.id === 'mikro-jump') router.push('/mikro-jump');
                        else if (item.id === 'mikro-fly') router.push('/mikro-fly');
                        else if (item.id === 'mikro-v14') router.push('/mikro-run');
                        else if (item.id === 'erp-entegrasyon') router.push('/services');
                        else if (item.id === 'eflow-entegrasyon') router.push('/eflow-detail');
                      }}
                      className="w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
                    >
                      Detaylı İncele
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <button
                onClick={resetQuestionnaire}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Testi Tekrarla
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mikro Ürün Karşılaştırması
            </h2>
            <p className="text-lg text-gray-600">
              İşletmenizin ihtiyaçlarına en uygun Mikro çözümünü karşılaştırın
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left font-medium">Özellik</th>
                  <th className="px-6 py-4 text-center font-medium">Mikro Run</th>
                  <th className="px-6 py-4 text-center font-medium">Mikro Jump</th>
                  <th className="px-6 py-4 text-center font-medium">Mikro Fly</th>
                  <th className="px-6 py-4 text-center font-medium">Mikro V14</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-700 font-medium">Hedef Kitle</td>
                  <td className="px-6 py-4 text-center text-gray-600">Büyüyen İşletmeler</td>
                  <td className="px-6 py-4 text-center text-gray-600">KOBİler</td>
                  <td className="px-6 py-4 text-center text-gray-600">E-Ticaret</td>
                  <td className="px-6 py-4 text-center text-gray-600">Büyük İşletmeler</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Finansal Yönetim</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-700 font-medium">Stok Takibi</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">CRM</td>
                  <td className="px-6 py-4 text-center"><span className="text-gray-400">-</span></td>
                  <td className="px-6 py-4 text-center"><span className="text-gray-400">-</span></td>
                  <td className="px-6 py-4 text-center"><span className="text-gray-400">-</span></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-700 font-medium">E-Fatura</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Pazar Yeri Entegrasyonu</td>
                  <td className="px-6 py-4 text-center"><span className="text-gray-400">-</span></td>
                  <td className="px-6 py-4 text-center"><span className="text-gray-400">-</span></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 mx-auto text-gray-900" /></td>
                  <td className="px-6 py-4 text-center"><span className="text-gray-400">-</span></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-700 font-medium">Raporlama</td>
                  <td className="px-6 py-4 text-center">Performans</td>
                  <td className="px-6 py-4 text-center">Temel</td>
                  <td className="px-6 py-4 text-center">E-Ticaret Odaklı</td>
                  <td className="px-6 py-4 text-center">Gelişmiş</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">Kurulum Zorluğu</td>
                  <td className="px-6 py-4 text-center text-gray-600">Orta</td>
                  <td className="px-6 py-4 text-center text-gray-600">Düşük</td>
                  <td className="px-6 py-4 text-center text-gray-600">Orta</td>
                  <td className="px-6 py-4 text-center text-gray-600">Yüksek</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Karar Vermekte Zorlanıyor musunuz?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Uzmanlarımız size en uygun çözümü seçmenizde yardımcı olabilir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 font-medium">
              Ücretsiz Danışmanlık
            </button>
            <button className="px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-md hover:bg-gray-700 font-medium">
              Detaylı Analiz
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
