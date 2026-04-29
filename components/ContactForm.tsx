'use client';

import { useState } from 'react';
import { Send, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessPopup(true);
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      alert('Bir hata oluştu');
    }
  };

  return (
    <>
      <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-900 mb-2 font-medium">Ad Soyad *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 font-medium">E-posta *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
            placeholder="e-posta@adresiniz.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-900 mb-2 font-medium">Telefon</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
            placeholder="+90 5XX XXX XX XX"
          />
        </div>
        <div>
          <label className="block text-gray-900 mb-2 font-medium">Şirket</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
            placeholder="Şirket Adınız"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-900 mb-2 font-medium">Konu *</label>
        <select
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all"
        >
          <option value="">Konu Seçin</option>
          <option value="erp">ERP Çözümleri</option>
          <option value="crm">CRM Çözümleri</option>
          <option value="e-donusum">E-Dönüşüm</option>
          <option value="mikro">Mikro Yazılım</option>
          <option value="dikey">Dikey Çözümler</option>
          <option value="sektorel">Sektörel Çözümler</option>
          <option value="demo">Ücretsiz Demo</option>
          <option value="teklif">Teklif Al</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-900 mb-2 font-medium">Mesajınız *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all resize-none"
          placeholder="Mesajınızı buraya yazın..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
      >
        Mesaj Gönder
        <Send className="w-5 h-5" />
      </button>
    </motion.form>

    {/* Success Popup */}
    <AnimatePresence>
      {showSuccessPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowSuccessPopup(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl text-center relative"
          >
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">Mesajınız Gönderildi!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En kısa sürede size dönüş yapacağız. İletişim bilgilerinizi kontrol edebilirsiniz.
            </p>

            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Tamam
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
