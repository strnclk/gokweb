'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Minimize2, Maximize2, HeadphonesIcon } from 'lucide-react';

const serviceQuickReplies = [
  'Mikro ERP',
  'E-Dönüşüm',
  'CRM Çözümleri',
  'Özel Yazılım'
];

const actionQuickReplies = [
  'Demo Talebi',
  'Fiyat Teklifi',
  'Teknik Destek',
  'İletişim Formu'
];

const getBotResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('erp') || lowerMessage.includes('mikro')) {
    return 'Mikro ERP, Türk işletmeleri için özel olarak geliştirilmiş kapsamlı bir iş kaynakları planlama sistemidir. Finansal yönetim, stok takibi, üretim planlama ve daha fazlasını içerir. Ücretsiz demo için formu doldurabilirsiniz: /contact';
  }
  
  if (lowerMessage.includes('e-dönüşüm') || lowerMessage.includes('e-fatura') || lowerMessage.includes('e-defter')) {
    return 'E-Dönüşüm çözümlerimizle GİB uyumlu e-fatura, e-defter ve e-arşiv süreçlerinizi otomatikleştiriyoruz. Detaylı bilgi için iletişim formumuzu doldurabilirsiniz: /contact';
  }
  
  if (lowerMessage.includes('crm') || lowerMessage.includes('müşteri') || lowerMessage.includes('satış')) {
    return 'CRM çözümlerimizle müşteri ilişkilerinizi güçlendirin, satış süreçlerinizi optimize edin. Özelliklerimiz hakkında bilgi almak için formu doldurabilirsiniz: /contact';
  }
  
  if (lowerMessage.includes('özel yazılım') || lowerMessage.includes('custom') || lowerMessage.includes('geliştirme')) {
    return 'İşletmenizin ihtiyaçlarına özel yazılım çözümleri geliştiriyoruz. Projenizi konuşmak için formu doldurabilirsiniz: /contact';
  }
  
  if (lowerMessage.includes('demo') || lowerMessage.includes('deneme') || lowerMessage.includes('entegrasyon')) {
    return 'Ücretsiz demo talebiniz için teşekkürler! Uzman ekibimiz size en uygun çözümü sunmak için 24 saat içinde iletişime geçecek. Formu doldurabilirsiniz: /contact';
  }
  
  if (lowerMessage.includes('fiyat') || lowerMessage.includes('teklif')) {
    return 'Fiyatlandırma, işletmenizin büyüklüğüne, kullanıcı sayısına ve ihtiyaçlarınıza göre değişmektedir. Size özel teklif almak için formu doldurabilir veya 0539 856 35 78 numarasından bizi arayabilirsiniz. /contact';
  }
  
  if (lowerMessage.includes('destek') || lowerMessage.includes('yardım')) {
    return 'Teknik destek ekibimiz 7/24 hizmetinizdedir. Acil bir durum varsa 0539 856 35 78 numarasını arayabilir veya destek@gokkusagiyazilim.com.tr adresine mail atabilirsiniz.';
  }
  
  if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam')) {
    return 'Merhaba! Ben Gökkuşağı Yazılım sanal asistanıyım. Size ERP, CRM ve dijital dönüşüm çözümlerimiz hakkında yardımcı olabilirim. Ne öğrenmek istersiniz?';
  }
  
  return 'Mesajınızı aldım. Size en doğru bilgiyi sağlamak için uzman ekibimize yönlendiriyorum. İletişim formunu doldurabilirsiniz: /contact';
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Merhaba! 👋\nHangi hizmetimizle ilgileniyorsunuz?', isBot: true, time: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showServiceReplies, setShowServiceReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = message;
      setMessage('');
      setMessages(prev => [...prev, { id: prev.length + 1, text: userMessage, isBot: false, time: new Date() }]);
      
      setIsTyping(true);
      
      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        setIsTyping(false);
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          text: botResponse, 
          isBot: true,
          time: new Date()
        }]);
      }, 1000 + Math.random() * 500);
    }
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
    setShowServiceReplies(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-28 z-40"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 bg-[#7f1d1d] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(127, 29, 29, 0.3)' }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <HeadphonesIcon className="w-7 h-7" />
              </motion.div>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#7f1d1d]" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg whitespace-nowrap text-sm font-medium"
              style={{ boxShadow: '0 4px 20px rgba(127, 29, 29, 0.15)' }}
            >
              Size yardımcı olalım mı?
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`fixed bottom-8 right-28 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 z-40 transition-all duration-300 ${
              isMinimized ? 'w-[360px] h-14' : 'w-[360px] h-[580px]'
            }`}
            style={{ boxShadow: '0 8px 40px rgba(127, 29, 29, 0.15)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#7f1d1d] to-[#9f2424] text-white px-5 py-4 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#7f1d1d]" />
                </div>
                <div>
                  <span className="font-semibold text-sm">Canlı Destek</span>
                  <span className="text-xs text-white/80 block flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Çevrimiçi
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/10 p-2 rounded-xl transition-colors duration-200"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-2 rounded-xl transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-gray-50/50 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed rounded-2xl transition-all duration-200 ${
                          msg.isBot
                            ? 'bg-gray-100 text-gray-800 rounded-tl-none'
                            : 'bg-[#7f1d1d] text-white rounded-tr-none'
                        }`}
                        style={{ boxShadow: msg.isBot ? '0 1px 2px rgba(0,0,0,0.05)' : '0 2px 8px rgba(127, 29, 29, 0.2)' }}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1.5">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-3 bg-white border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {showServiceReplies ? (
                      serviceQuickReplies.map((reply: string, index: number) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, backgroundColor: '#f8f8f8' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 bg-[#7f1d1d] text-white rounded-full text-xs font-medium transition-all duration-200"
                          style={{ boxShadow: '0 2px 8px rgba(127, 29, 29, 0.2)' }}
                        >
                          {reply}
                        </motion.button>
                      ))
                    ) : (
                      actionQuickReplies.map((reply: string, index: number) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, backgroundColor: '#f8f8f8' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium transition-all duration-200"
                        >
                          {reply}
                        </motion.button>
                      ))
                    )}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-100 rounded-b-3xl">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Mesajınızı yazın..."
                      className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#7f1d1d] focus:ring-1 focus:ring-[#7f1d1d]/20 text-sm transition-all duration-200"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#9f2424' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      className="px-4 py-3 bg-[#7f1d1d] text-white rounded-2xl hover:bg-[#9f2424] transition-all duration-200"
                      style={{ boxShadow: '0 2px 8px rgba(127, 29, 29, 0.2)' }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
