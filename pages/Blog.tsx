
import React, { useState, useMemo } from 'react';
import { SectionHeader, Card, Badge, Button } from '../components/ui';
import { blogPosts } from '../data';
import { Calendar, Clock, ArrowRight, BookOpen, Search, Sparkles, Inbox } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const categories = ['Tümü', 'Strateji', 'Yazılım', 'Yapay Zeka', 'SEO'];

  // SEO Optimized Filtering Logic - Fixing the search bug
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'Tümü' || post.category === activeCategory;
      const normalizedSearch = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        post.title.toLowerCase().includes(normalizedSearch) || 
        post.excerpt.toLowerCase().includes(normalizedSearch) ||
        post.category.toLowerCase().includes(normalizedSearch);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Bilgi Merkezi | Malatya Yazılım & SEO Blogu" 
        description="Teknoloji, yapay zeka ve web geliştirme dünyasına dair teknik rehberler. Malatya'da dijital dönüşüm ve SEO stratejileri hakkında güncel notlar."
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white pt-40 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge variant="brand" className="mb-6">BİLGİ MERKEZİ</Badge>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight leading-tight">
            Geleceği <span className="text-brand-500">Şekillendiren</span> <br/>
            İçgörüler
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Malatya merkezli uzman kadromuzdan sektörel teknik rehberler ve teknoloji trendleri.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 pb-32">
        {/* Search/Filter Bar */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white p-6 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-black whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' 
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80 group">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${searchQuery ? 'text-brand-500' : 'text-slate-400'}`} size={18} />
              <input 
                type="text" 
                placeholder="İçeriklerde ara..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3.5 rounded-full border border-slate-100 bg-slate-50 outline-none focus:ring-2 focus:ring-brand-500 transition-all font-medium text-sm"
              />
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="h-full flex flex-col group overflow-hidden border-none shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] bg-white">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute top-6 left-6">
                          <Badge variant="brand" className="!bg-white/90 backdrop-blur-sm shadow-lg">{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-8 flex-grow flex flex-col">
                        <div className="flex items-center gap-4 text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
                          <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                          <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed font-light mb-8 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                          <span className="text-sm font-black text-brand-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                            DEVAMINI OKU <ArrowRight size={16} />
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-500 group-hover:text-white transition-all">
                            <BookOpen size={16} />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-6 text-slate-300">
                  <Inbox size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Eşleşen içerik bulunamadı</h3>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                  Aramanızı sadeleştirmeyi veya kategoriyi değiştirmeyi deneyebilirsiniz.
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-xl px-10 font-bold"
                  onClick={() => { setSearchQuery(''); setActiveCategory('Tümü'); }}
                >
                  Filtreleri Temizle
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
