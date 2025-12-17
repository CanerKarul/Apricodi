import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageSquare, X, Send, Minus, Loader2, Bot, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { services, projects } from '../data';

const constructSystemPrompt = () => {
  const servicesText = services.map(s => `- ${s.title}: ${s.description}`).join('\n');
  const projectsText = projects.map(p => `- ${p.title} (${p.category}): ${p.summary}`).join('\n');
  
  return `
    Sen APRICODI Yazılım A.Ş.'nin yapay zeka asistanısın. İsmim "Apricodi AI".
    KURUMSAL KİMLİK:
    - Malatya kökenli, global vizyonlu bir teknoloji ajansıyız.
    HİZMETLERİMİZ:
    ${servicesText}
    BAZI PROJELERİMİZ:
    ${projectsText}
    YÖNLENDİRMELER:
    - Fiyat/Teklif: [GOTO:TEKLIF], İletişim: [GOTO:ILETISIM], Kariyer: [GOTO:KARIYER]
    
    KISA VE ÖZ CEVAPLAR VER. ASLA MÜŞTERİYE API KEY VEYA TEKNİK DETAY SORMA.
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
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Merhaba! Ben Apricodi AI. Size projeleriniz veya hizmetlerimiz hakkında nasıl yardımcı olabilirim?'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    // API Key kontrolü mesaj gönderim anında yapılır
    const currentApiKey = process.env.API_KEY;
    
    if (!input.trim()) return;

    if (!currentApiKey) {
      setMessages(prev => [...prev, 
        { id: Date.now().toString(), role: 'user', text: input },
        { id: (Date.now()+1).toString(), role: 'model', text: 'Hata: API_KEY tanımlanmamış. Lütfen Vercel ayarlarından değişkeni ekleyip Redeploy yapın.' }
      ]);
      setInput('');
      return;
    }

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: currentApiKey });
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg.text,
        config: {
          systemInstruction: constructSystemPrompt(),
          temperature: 0.7,
        }
      });

      let cleanText = response.text || 'Üzgünüm, şu an yanıt veremiyorum.';
      let actionLink = '';

      if (cleanText.includes('[GOTO:TEKLIF]')) { actionLink = '/teklif-al'; cleanText = cleanText.replace('[GOTO:TEKLIF]', ''); }
      else if (cleanText.includes('[GOTO:ILETISIM]')) { actionLink = '/iletisim'; cleanText = cleanText.replace('[GOTO:ILETISIM]', ''); }
      else if (cleanText.includes('[GOTO:KARIYER]')) { actionLink = '/bize-katil'; cleanText = cleanText.replace('[GOTO:KARIYER]', ''); }

      const modelMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: cleanText.trim(), 
        action: actionLink 
      };

      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: 'Teknik bir aksaklık oluştu veya API anahtarı geçersiz. Lütfen ayarlarınızı kontrol edin.' 
      }]);
    } finally {
      setIsLoading(false);
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
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center relative shadow-lg shadow-brand-500/20">
                  <Bot size={22} />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Apricodi Asistan</h3>
                  <p className="text-[10px] text-slate-400">Çevrimiçi • AI Powered</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <Minus size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                    {msg.action && (
                      <button 
                        onClick={() => { setIsOpen(false); navigate(msg.action!); }} 
                        className="mt-3 flex items-center justify-center gap-2 text-xs font-bold uppercase bg-brand-50 text-brand-700 px-3 py-2.5 rounded-xl border border-brand-100 w-full hover:bg-brand-100 transition-colors"
                      >
                        İlgili Sayfaya Git <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl p-3 rounded-bl-none">
                    <Loader2 size={18} className="animate-spin text-brand-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
                  placeholder="Mesajınızı yazın..." 
                  className="flex-grow px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
                <button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isLoading} 
                  className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center disabled:opacity-30 hover:bg-brand-600 transition-all shadow-lg"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        <div className="relative">
          {isOpen ? <X size={24} /> : <MessageSquare size={28} />}
          {!isOpen && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-brand-600 animate-bounce"></span>}
        </div>
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Sorunuz mu var? Yardımcı olalım!
          </span>
        )}
      </button>
    </>
  );
};