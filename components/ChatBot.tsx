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
      text: 'Merhaba! Ben Apricodi AI. Size nasıl yardımcı olabilirim?'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    // Safe check for process to prevent white screen crash
    const apiKey = typeof process !== 'undefined' ? process.env?.API_KEY : null;
    if (apiKey) {
      const ai = new GoogleGenAI({ apiKey });
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
      let cleanText = result.text || '';
      let actionLink = '';
      if (cleanText.includes('[GOTO:TEKLIF]')) { actionLink = '/teklif-al'; cleanText = cleanText.replace('[GOTO:TEKLIF]', ''); }
      else if (cleanText.includes('[GOTO:ILETISIM]')) { actionLink = '/iletisim'; cleanText = cleanText.replace('[GOTO:ILETISIM]', ''); }
      else if (cleanText.includes('[GOTO:KARIYER]')) { actionLink = '/bize-katil'; cleanText = cleanText.replace('[GOTO:KARIYER]', ''); }

      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: cleanText.trim(), action: actionLink }]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: 'Şu an yanıt veremiyorum.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!(typeof process !== 'undefined' ? process.env?.API_KEY : null)) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center relative"><Bot size={24} /></div>
                <h3 className="font-bold text-sm">Apricodi Asistan</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white"><Minus size={20} /></button>
            </div>
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm ${msg.role === 'user' ? 'bg-brand-600 text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'}`}>
                    {msg.text}
                    {msg.action && (
                      <button onClick={() => { setIsOpen(false); navigate(msg.action!); }} className="mt-3 flex items-center gap-2 text-xs font-bold uppercase bg-slate-50 text-brand-600 px-3 py-2 rounded border border-brand-100 w-full">Sayfaya Git <ArrowRight size={14} /></button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && <Loader2 size={20} className="animate-spin text-brand-500 mx-auto" />}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Bir soru sorun..." className="flex-grow px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-brand-500" />
                <button onClick={handleSend} disabled={!input.trim() || isLoading} className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center disabled:opacity-50"><Send size={18} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-2xl">
        {isOpen ? <X size={24} /> : <MessageSquare size={28} />}
      </button>
    </>
  );
};