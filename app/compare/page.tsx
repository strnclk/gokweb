'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Check, Star, Users, Zap, Shield, Database, Globe, Clock, DollarSign, Building2, TrendingUp, Package, Settings, HelpCircle, ChevronRight, Lightbulb, Cpu, Target, Award, Trophy } from 'lucide-react';

export default function ComparePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const stats = [
    { value: '3', label: 'Akıllı Soru', icon: Target },
    { value: '5+', label: 'Ürün/Hizmet', icon: Package },
    { value: '95%', label: 'Doğruluk Oranı', icon: Award },
    { value: '100%', label: 'Ücretsiz', icon: Trophy }
  ];

  const products = [
    {
      id: 'mikro-v14',
      name: 'Mikro V14',
      category: 'ERP',
      price: 'İletişime Geçin',
      rating: 4.8,
      description: 'Kapsamlı ERP çözümü için gelişmiş özellikler',
      features: ['Finansal Yönetim', 'Stok Takibi', 'CRM', 'Raporlama', 'E-Fatura'],
      pros: ['Gelişmiş özellikler', 'Kapsamlı raporlama', 'Esnek yapı'],
      cons: ['Yüksek fiyat', 'Karmaşık kurulum'],
      icon: Database,
      color: 'bg-blue-500'
    },
    {
      id: 'mikro-jump',
      name: 'Mikro Jump',
      category: 'Starter ERP',
      price: '₺9.990/ay',
      rating: 4.5,
      description: 'KOBİler için ideal başlangıç ERP çözümü',
      features: ['Finansal Yönetim', 'Stok Takibi', 'Fatura Yönetimi', 'Raporlama'],
      pros: ['Uygun fiyat', 'Kolay kullanım', 'Hızlı kurulum'],
      cons: ['Sınırlı özellikler', 'Küçük işletmeler için'],
      icon: Zap,
      color: 'bg-green-500'
    },
    {
      id: 'mikro-fly',
      name: 'Mikro Fly',
      category: 'E-Ticaret',
      price: '₺14.990/ay',
      rating: 4.6,
      description: 'E-ticaret entegrasyonu için özel çözüm',
      features: ['Pazar Yeri Entegrasyonu', 'Otomatik Sipariş', 'Stok Senkronizasyonu'],
      pros: ['Pazar yenti entegrasyonu', 'Otomasyon', 'Kolay kullanım'],
      cons: ['Sadece e-ticaret', 'Bağımlılık'],
      icon: Globe,
      color: 'bg-purple-500'
    }
  ];

  const services = [
    {
      id: 'erp-entegrasyon',
      name: 'ERP Entegrasyon Hizmeti',
      category: 'Profesyonel Hizmet',
      price: 'Proje Bazlı',
      rating: 4.7,
      description: 'Mevcut sistemlerinize ERP entegrasyonu',
      features: ['Sistem Analizi', 'Özelleştirme', 'Veri Migration', 'Eğitim', 'Destek'],
      pros: ['Tam entegrasyon', 'Özelleştirme', 'Uzman destek'],
      cons: ['Yüksek maliyet', 'Zaman alıcı'],
      icon: Users,
      color: 'bg-indigo-500'
    },
    {
      id: 'eflow-entegrasyon',
      name: 'E-Flow Entegrasyonu',
      category: 'E-Dönüşüm',
      price: '₺2.990/ay',
      rating: 4.4,
      description: 'E-fatura, e-defter, e-arşiv çözümleri',
      features: ['E-Fatura', 'E-Defter', 'E-Arşiv', 'GIB Entegrasyonu'],
      pros: ['Yasal uyum', 'Otomasyon', 'Kolay kullanım'],
      cons: ['Sadece e-dönüşüm', 'Bağımlılık'],
      icon: Shield,
      color: 'bg-red-500'
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
    const scores: Record<string, number> = {};
    
    [...products, ...services].forEach(item => {
      scores[item.id] = 0;
    });

    const companySize = userAnswers.company_size;
    if (companySize === '1-10') {
      scores['mikro-jump'] += 30;
    } else if (companySize === '11-50') {
      scores['mikro-jump'] += 30;
      scores['mikro-fly'] += 25;
    } else if (companySize === '51-200') {
      scores['mikro-v14'] += 30;
      scores['erp-entegrasyon'] += 25;
    } else if (companySize === '200+') {
      scores['mikro-v14'] += 35;
      scores['erp-entegrasyon'] += 30;
    }

    const industry = userAnswers.industry;
    if (industry === 'ecommerce') {
      scores['mikro-fly'] += 40;
    } else if (industry === 'retail') {
      scores['mikro-jump'] += 30;
    } else if (industry === 'manufacturing') {
      scores['mikro-v14'] += 35;
    }

    const mainNeed = userAnswers.main_need;
    if (mainNeed === 'finance') {
      scores['mikro-v14'] += 30;
    } else if (mainNeed === 'inventory') {
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
    setShowResults(true);
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
            Akıllı Çözüm
            <br />
            <span className="text-gray-600">Öneri Sistemi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            İşletmenizin ihtiyaçlarını analiz ederek size en uygun teknoloji ve paket önerilerini sunuyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            className="flex flex-wrap justify-center gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
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
                  <span className="text-sm font-medium text-blue-600">
                    {Math.round(((currentStep + 1) / questionnaire.length) * 100)}% Tamamlandı
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
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
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                            isSelected ? 'bg-blue-500' : 'bg-gray-100'
                          }`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                          </div>
                          <span className={`font-medium ${isSelected ? 'text-blue-600' : 'text-gray-900'}`}>
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
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === questionnaire.length - 1 ? 'Önerileri Getir' : 'Sonraki'}
                  <ChevronRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            </div>
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
                  <div key={item.id} className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                    index === 0 ? 'border-blue-500' : 'border-gray-200'
                  }`}>
                    {index === 0 && (
                      <div className="text-center mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          En Uygun
                        </span>
                      </div>
                    )}
                    
                    <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{item.rating}</span>
                      </div>
                      <span className="text-lg font-bold text-blue-600">{item.price}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Eşleşme Oranı</span>
                        <span className="text-sm font-bold text-green-600">{item.matchPercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${item.matchPercentage}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-2">Neden uygun?</div>
                      {item.pros.slice(0, 2).map((pro: string, i: number) => (
                        <div key={i} className="flex items-center text-sm text-green-600">
                          <Check className="w-3 h-3 mr-2 flex-shrink-0" />
                          {pro}
                        </div>
                      ))}
                    </div>

                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Detaylı İncele
                    </button>
                  </div>
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

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Karar Vermekte Zorlanıyor musunuz?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Uzmanlarımız size en uygun çözümü seçmenizde yardımcı olabilir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-medium">
              Ücretsiz Danışmanlık
            </button>
            <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-md hover:bg-white/20 font-medium">
              Detaylı Analiz
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
