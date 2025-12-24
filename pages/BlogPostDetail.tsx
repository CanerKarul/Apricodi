
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';
import { Badge, Button } from '../components/ui';
import { SEO } from '../components/SEO';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2, MessageSquare, Linkedin, Sparkles, ChevronRight, Zap, Check, Send, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitForm } from '../lib/submitToSheets';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubmitting(true);
    setError(null);

    const result = await submitForm('newsletter', { email: newsletterEmail });

    if (result.ok) {
      setSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setError(result.message || 'Bir hata oluştu.');
    }
    setSubmitting(false);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-slate-300 mb-6">
          <Zap size={40} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-4">İçerik Bulunamadı</h2>
        <Link to="/blog"><Button variant="outline" className="rounded-xl">Bilgi Merkezine Dön</Button></Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <SEO 
        title={`${post.title} | APRICODI Insights`} 
        description={post.excerpt}
        image={post.imageUrl}
      />
      
      <article className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10 opacity-40" />
        
        <div className="max-w-3xl mx-auto px-6">
          {/* Back Navigation */}
          <Link to="/blog" className="group inline-flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-12 hover:text-brand-600 transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Geri Dön
          </Link>

          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Badge variant="brand" className="px-4 py-1 rounded-lg border-brand-100 bg-brand-50 text-brand-600 font-black tracking-widest">
                {post.category}
              </Badge>
              <div className="h-px w-12 bg-slate-100" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-brand font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-slate-100 py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-[10px] text-white font-black shadow-lg">AP</div>
                <div>
                  <div className="text-sm font-black text-slate-900 uppercase tracking-wide">Apricodi Insights</div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime} OKUMA</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-[16/10] relative group"
          >
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Medium Style Body Content */}
          <div className="blog-content prose prose-slate max-w-none 
            prose-headings:font-brand prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
            prose-p:text-slate-700 prose-p:leading-[1.8] prose-p:text-xl md:prose-p:text-2xl prose-p:font-serif prose-p:mb-10
            prose-li:text-slate-700 prose-li:text-xl prose-li:font-serif prose-li:mb-4
            prose-strong:text-slate-900 prose-strong:font-black
            prose-em:italic prose-em:text-slate-800
            prose-h2:text-3xl md:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:leading-tight
            prose-h3:text-xl md:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-brand-600 prose-h3:font-brand
            prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-16
            prose-blockquote:border-l-[4px] prose-blockquote:border-brand-500 prose-blockquote:bg-slate-50 
            prose-blockquote:py-10 prose-blockquote:px-8 md:prose-blockquote:px-12 prose-blockquote:rounded-r-3xl 
            prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:font-sans prose-blockquote:text-xl md:prose-blockquote:text-2xl prose-blockquote:leading-relaxed prose-blockquote:my-12
            [&>p:first-of-type]:text-2xl md:[&>p:first-of-type]:text-3xl [&>p:first-of-type]:text-slate-900 [&>p:first-of-type]:leading-snug [&>p:first-of-type]:mb-12
          ">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Tags Bottom */}
            <div className="mt-24 pt-10 border-t border-slate-100 flex flex-row items-center justify-end gap-2 not-prose">
                 <Badge variant="brand" className="!bg-slate-50 !text-slate-400 !border-slate-200 !text-[10px] tracking-widest font-black uppercase">#TEKNOLOJİ</Badge>
                 <Badge variant="brand" className="!bg-slate-50 !text-slate-400 !border-slate-200 !text-[10px] tracking-widest font-black uppercase">#BLOG</Badge>
            </div>

            {/* Newsletter / CTA Strip */}
            <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden not-prose shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10 text-center">
                  <Badge variant="brand" className="mb-6 !bg-white/10 !border-white/20 !text-brand-400">ABONE OL</Badge>
                  <h3 className="text-2xl md:text-3xl font-brand font-black mb-6">En Yeni İçeriklerden Haberdar Olun</h3>
                  <p className="text-slate-400 font-light mb-8 max-w-md mx-auto">Haftalık teknoloji ve SEO içgörülerimizi doğrudan e-postanıza gönderelim.</p>
                  
                  <AnimatePresence mode="wait">
                    {success ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-500/20 border border-emerald-500/30 p-6 rounded-2xl flex flex-col items-center gap-3"
                      >
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                          <Check size={24} />
                        </div>
                        <p className="font-bold text-emerald-400">Harika! Bülten listemize başarıyla eklendiniz.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                           <input 
                              type="email" 
                              required
                              placeholder="E-posta adresiniz" 
                              value={newsletterEmail}
                              onChange={(e) => setNewsletterEmail(e.target.value)}
                              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-500 outline-none transition-all placeholder:text-slate-500" 
                           />
                           <Button 
                             type="submit" 
                             disabled={submitting}
                             className="rounded-2xl px-8 font-black disabled:opacity-50"
                           >
                             {submitting ? '...' : 'KATIL'}
                           </Button>
                        </div>
                        {error && (
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-rose-400 text-xs mt-4 flex items-center justify-center gap-2"
                          >
                            <AlertCircle size={14} /> {error}
                          </motion.p>
                        )}
                      </form>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </article>

      {/* Suggested Reading */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
               <h2 className="text-3xl font-brand font-black text-slate-900">Bunları da Okumalısınız</h2>
               <div className="h-1 w-12 bg-brand-500 mt-4 rounded-full" />
            </div>
            <Link to="/blog" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand-600 transition-colors flex items-center gap-2">
              TÜMÜ <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
              <Link key={p.id} to={`/blog/${p.slug}`}>
                <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col">
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-slate-100 relative">
                    <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <h3 className="text-xl font-brand font-black text-slate-900 mb-6 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-auto pt-6 border-t border-slate-50">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {p.date}</span>
                    <span className="flex items-center gap-2"><Clock size={14} /> {p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
