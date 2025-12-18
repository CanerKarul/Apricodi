
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Minus, Bot, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

interface Option {
  label: string;
  value: string;
  action?: () => void;
}

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  options?: Option[];
  isLoading?: boolean;
}

const SYSTEM_INSTRUCTION = `
Sen APRICODI Yazılım A.Ş.'nin resmi yapay zeka asistanısın. Görevin, kullanıcıların APRICODI, hizmetlerimiz, projelerimiz ve kariyer fırsatları hakkındaki sorularını profesyonel, yardımsever ve marka diline uygun bir şekilde yanıtlamaktır.

KAPSAM VE BİLGİLER:
1. HİZMETLERİMİZ: 
   - Kurumsal Web Yazılım (React, Next.js, SEO uyumlu mimari).
   - Mobil Uygulama Geliştirme (iOS & Android, React Native, Flutter).
   - UI/UX Tasarım (Modern, kullanıcı odaklı, Design System).
   - E-Ticaret Çözümleri (B2B, B2C, ödeme sistemleri).
   - Bakım & SLA Destek (7/24 izleme, güvenlik güncellemeleri).

2. EKİBİMİZ: 
   - Caner Karul (Kurucu, Frontend, Otomasyon).
   - Nisa Üstündağ (Fullstack, LLM, İletişim).
   - Hatice Arslan (Backend, Siber Güvenlik).

3. LOKASYON: Malatya Teknopark, Yeşilyurt, Malatya.

4. DEĞERLER: Şeffaflık, sürdürülebilir mimari, güvenlik, sürekli öğrenme.

5. ÜCRETLENDİRME: Projeye özeldir. Kullanıcıyı "Teklif Al" formuna yönlendir.

6. KARİYER: Staj ve Junior pozisyonlar önceliklidir. "Bize Katıl" sayfasından başvuru alınır.

KRİTİK KURALLAR:
- SADECE APRICODI ile ilgili konulara cevap ver. 
- Eğer kullanıcı APRICODI dışı bir konu (yemek tarifi, genel kültür, başka şirketler, siyaset vb.) sorarsa şu cevabı ver: "Ben sadece APRICODI ve hizmetlerimiz hakkında bilgi verebilen bir asistanım. Size projeniz, hizmetlerimiz veya kariyer fırsatlarımız hakkında nasıl yardımcı olabilirim?"
- Cevapların kısa, net ve profesyonel olsun.
- "Selam", "Merhaba" gibi selamlamalara sıcak ve kurumsal bir karşılık ver.
- Markdown formatını kullanabilirsin (kalın yazı, liste vb.).
`;

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const mainOptions: Option[] = [
    { label: '🚀 Yeni Proje Başlat', value: 'new_project', action: () => navigate('/teklif-al') },
    { label: '🛠 Hizmetleri İncele', value: 'services', action: () => navigate('/hizmetler') },
    { label: '👨‍💻 Bize Katıl (Kariyer)', value: 'career', action: () => navigate('/bize-katil') },
    { label: '📞 İletişime Geç', value: 'contact', action: () => navigate('/iletisim') },
  ];

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'bot',
          text: 'Merhaba! Ben Apricodi Asistan. Size nasıl yardımcı olabilirim? Projeniz hakkında konuşabiliriz veya merak ettiklerinizi sorabilirsiniz.',
          options: mainOptions,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isTyping]);

  const callGemini = async (userText: string) => {
    setIsTyping(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: userText,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const botText = response.text || "Üzgünüm, şu an yanıt veremiyorum. Lütfen biraz sonra tekrar deneyin.";
      
      const botMsg: Message = {
        id: Date.now().toString(),
        role: 'bot',
        text: botText,
        options: botText.length < 150 ? mainOptions : [{ label: 'Ana Menüye Dön', value: 'main' }]
      };
      
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'bot',
        text: "Bağlantıda bir sorun oluştu. Bize doğrudan iletişim sayfamızdan ulaşabilirsiniz.",
        options: [{ label: 'İletişime Geç', value: 'contact', action: () => navigate('/iletisim') }]
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    
    callGemini(currentInput);
  };

  const handleOptionClick = (option: Option) => {
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: option.label };
    setMessages(prev => [...prev, userMsg]);
    
    if (option.action) {
      setTimeout(() => option.action!(), 500);
    } else {
      callGemini(option.label);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[420px] h-[650px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Apricodi Asistan</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-slate-400 font-medium">Yapay Zeka (Gemini 3 Pro)</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1">
                <Minus size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-4 space-y-6 bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                  
                  {msg.role === 'bot' && msg.options && !isTyping && (
                    <div className="flex flex-wrap gap-2 mt-3 w-full">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-white hover:bg-brand-50 text-slate-700 border border-slate-200 hover:border-brand-300 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 group"
                        >
                          {opt.label}
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="bg-white text-slate-400 border border-slate-200 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-brand-500" />
                    <span className="text-xs font-medium">Apricodi düşünüyor...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                  placeholder="Mesajınızı yazın..." 
                  disabled={isTyping}
                  className="flex-grow px-4 py-3 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all disabled:opacity-50"
                />
                <button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isTyping} 
                  className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center disabled:opacity-30 hover:bg-brand-600 transition-all shadow-lg active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">
                Apricodi AI Assistant v2.0 • Powered by Gemini 3 Pro
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`fixed bottom-6 right-4 md:right-8 z-50 w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-brand-600'
        }`}
      >
        <div className="relative">
          {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={28} className="text-white" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-4 border-brand-600 animate-ping"></span>
          )}
        </div>
        
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-white text-slate-900 text-xs font-bold py-3 px-5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-xl border border-slate-100 translate-x-4 group-hover:translate-x-0">
            👋 Size nasıl yardımcı olabilirim?
          </div>
        )}
      </button>
    </>
  );
};
