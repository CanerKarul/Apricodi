import React, { useState, useEffect } from 'react';
import { Button } from './ui';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('apricodi_cookie_consent');
    if (!consent) {
      // Small delay to show animation smoothly after load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('apricodi_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('apricodi_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-100 text-brand-600 rounded-full hidden sm:block">
                <Cookie size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Çerez Tercihleriniz</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Sizlere daha iyi bir deneyim sunmak ve site trafiğini analiz etmek için çerezleri kullanıyoruz. 
                  Detaylı bilgi için <Link to="/cerez-politikasi" className="text-brand-600 font-semibold hover:underline">Çerez Politikası</Link> sayfamızı inceleyebilirsiniz.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3 w-full md:w-auto shrink-0">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleDecline}
                className="flex-1 md:flex-none border-slate-300 text-slate-600 hover:bg-slate-50"
              >
                Reddet
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={handleAccept}
                className="flex-1 md:flex-none shadow-brand-500/20"
              >
                Tümünü Kabul Et
              </Button>
            </div>

            {/* Close Icon for quick dismiss (optional, treats as decline or remind later) */}
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 md:hidden"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};