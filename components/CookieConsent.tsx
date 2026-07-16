'use client';

import { useState, useEffect } from 'react';
import { Cookie, X, Shield } from 'lucide-react';

export function CookieConsent({ onAccept, onReject }: { onAccept?: () => void; onReject?: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
    if (onReject) onReject();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleRestore = () => {
    setIsMinimized(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ${
          isMinimized ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Cookie className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Çerez Politikamiz
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                 Web sitemizde kullanıcı deneyimini geliştirmek için Google Analytics ve Microsoft Clarity gibi analiz araçları kullanılmaktadır. Bu araçlar aracılığıyla elde edilen veriler anonimdir ve yalnızca site performansını iyileştirmek amacıyla kullanılmaktadır.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="w-3 h-3" />
                  <span>Verileriniz gizli ve güvende</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Reddet
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kabul Et
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimized Cookie Banner */}
      {isMinimized && (
        <div className="fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 max-w-sm">
          <div className="flex items-center gap-3">
            <Cookie className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700 flex-1">
              Çerez kullaniyoruz
            </span>
            <button
              onClick={handleRestore}
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              Ayarlar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Hook to manage cookie consent state
export function useCookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent');
    if (storedConsent === 'accepted') {
      setConsent(true);
    } else if (storedConsent === 'rejected') {
      setConsent(false);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent(true);
  };

  const rejectConsent = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsent(false);
  };

  return {
    consent,
    acceptConsent,
    rejectConsent,
    hasConsented: consent === true,
    hasRejected: consent === false,
    isPending: consent === null
  };
}
