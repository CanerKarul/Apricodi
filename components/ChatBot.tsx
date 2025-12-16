import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageSquare, X, Send, Minus, Loader2, User, Bot, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { services, projects, jobPositions } from '../data';

// --- System Prompt Construction ---
const constructSystemPrompt = () => {
  const servicesText = services.map(s => `- ${s.title}: ${s.description}`).join('\n');
  const projectsText = projects.map(p => `- ${p.title} (${p.category}): ${p.summary}`).join('\n');
  
  return `
    Sen APRICODI Yazılım A.Ş.'nin yapay zeka asistanısın. İsmim "Apricodi AI".
    
    KURUMSAL KİMLİK:
    - Malatya kökenli, global vizyonlu bir teknoloji ajansıyız.
    - Değerlerimiz: Şeffaflık, Sürdürülebilirlik, Güvenlik, Performans.
    - Dil: Profesyonel, yardımsever, çözüm odaklı, "sen" dili yerine nazik bir hitap kullan.
    
    HİZMETLERİMİZ:
    ${servicesText}
    
    BAZI PROJELERİMİZ:
    ${projectsText}
    
    FİYATLANDIRMA POLİTİKASI (Tahmini Aralıklar):
    Kullanıcılar fiyat sorduğunda ASLA kesin bir rakam verme. Aşağıdaki aralıkları belirt ve net teklif için "/teklif-al" sayfasına yönlendir.
    - Web Geliştirme: Genellikle 50.000 ₺ - 100.000 ₺ başlangıç seviyesi. Kapsama göre 250.000 ₺+ çıkabilir.
    - Mobil Uygulama: Native/Cross-platform projeler genellikle 100.000 ₺ üzeri başlar.
    - E-Ticaret: Özel altyapılar 100.000 ₺ - 250.000 ₺ aralığında başlar.
    - MVP / Girişim Projeleri: 50.000 ₺ civarından başlayabilir.
    
    ÖNEMLİ YÖNLENDİRMELER:
    - Fiyat/Teklif sorulursa: Mutlaka "/teklif-al" sayfasına yönlendir.
    - İletişim/Adres sorulursa: "/iletisim" sayfasına yönlendir. (Adres: Yeşilyurt / Malatya).
    - Kariyer/İş/Staj sorulursa: "/bize-katil" sayfasına yönlendir.
    
    YANIT FORMATI:
    Cevapların kısa, net ve anlaşılır olsun.
    Eğer kullanıcıyı bir sayfaya yönlendirmen gerekirse, cümlenin sonuna parantez içinde aksiyon kodunu ekle.
    Kodlar: [GOTO:TEKLIF], [GOTO:ILETISIM], [GOTO:KARIYER], [GOTO:HIZMETLER]
  `;
};

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  action?: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Merhaba! Ben Apricodi AI asistanı. Projeleriniz, hizmetlerimiz veya fiyatlandırma politikamız hakkında size nasıl yardımcı olabilirim?'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize Chat Session
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    // Only initialize if API Key exists
    if (process.env.API_KEY) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const session = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: constructSystemPrompt(),
          temperature: 0.7,
        }
      });
      setChatSession(session);
    }
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const result: GenerateContentResponse = await chatSession.sendMessage({ message: userMsg.text });
      const responseText = result.text;
      
      // Parse Action Codes
      let cleanText = responseText;
      let actionLink = '';

      if (responseText.includes('[GOTO:TEKLIF]')) {
        cleanText = cleanText.replace('[GOTO:TEKLIF]', '');
        actionLink = '/teklif-al';
      } else if (responseText.includes('[GOTO:ILETISIM]')) {
        cleanText = cleanText.replace('[GOTO:ILETISIM]', '');
        actionLink = '/iletisim';
      } else if (responseText.includes('[GOTO:KARIYER]')) {
        cleanText = cleanText.replace('[GOTO:KARIYER]', '');
        actionLink = '/bize-katil';
      } else if (responseText.includes('[GOTO:HIZMETLER]')) {
        cleanText = cleanText.replace('[GOTO:HIZMETLER]', '');
        actionLink = '/hizmetler';
      }

      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: cleanText.trim(),
        action: actionLink
      };
      
      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: 'Üzgünüm, şu an bağlantı kuramıyorum. Lütfen daha sonra tekrar deneyin veya iletişim formunu kullanın.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // If no API key is set, don't render anything
  if (!process.env.API_KEY) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white relative">
                   <Bot size={24} />
                   <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Apricodi Asistan</h3>
                  <p className="text-xs text-slate-400">Genellikle anında yanıt verir</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                  <Minus size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-brand-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                    
                    {/* Action Button if present */}
                    {msg.action && (
                      <button 
                        onClick={() => {
                          setIsOpen(false);
                          navigate(msg.action!);
                        }}
                        className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-slate-50 text-brand-600 px-3 py-2 rounded border border-brand-100 hover:bg-brand-50 hover:border-brand-200 transition-colors w-full"
                      >
                        İlgili Sayfaya Git <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                    <Loader2 size={20} className="animate-spin text-brand-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Bir soru sorun..."
                  className="flex-grow px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-400 text-slate-700"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-slate-900/10"
                >
                  <Send size={18} className={input.trim() ? 'ml-0.5' : ''} />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Apricodi AI yanıtları bilgilendirme amaçlıdır.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-4 md:right-8 z-50 flex items-center justify-center shadow-2xl shadow-brand-500/30 transition-all duration-300 ${
           isOpen ? 'w-12 h-12 rounded-full bg-slate-800 text-white' : 'w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-brand-600 to-brand-500 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={28} className="fill-white/20" />}
        
        {/* Tooltip / Callout */}
        {!isOpen && (
           <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
             Bize Sorun 👋
           </span>
        )}
      </motion.button>
    </>
  );
};