
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader, Card, Badge, Button, Input } from '../components/ui';
import { projects } from '../data';
import { ExternalLink, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectIllustration } from '../components/ProjectIllustration';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Web', 'Social Impact', 'Fashion', 'Food & Beverage', 'Content', 'Forms'];

  const filteredProjects = projects.filter(p => {
    const matchesFilter = filter === 'All' || p.categoryTags.includes(filter);
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-slate-900 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Projelerimiz</h1>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             Ürettiğimiz işler; sonuç, süreç ve kalite. Her satır kodda ve her pikselde tutku var.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Controls Card */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === f 
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-auto min-w-[300px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Proje ara..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none bg-white text-slate-900 placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group h-full flex flex-col hover:shadow-xl transition-all duration-300">
                  <Link to={`/projeler/${project.slug}`} className="block relative overflow-hidden h-56">
                    <ProjectIllustration projectId={project.id} className="transform group-hover:scale-105 transition-transform duration-700" />
                    
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-20">
                      <Button variant="primary" size="sm" className="rounded-full">
                        İncele
                      </Button>
                    </div>
                  </Link>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{project.category}</span>
                      <span className="text-xs text-slate-400">{project.year}</span>
                    </div>
                    
                    <Link to={`/projeler/${project.slug}`} className="group-hover:text-brand-600 transition-colors">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    </Link>
                    
                    <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                      {project.categoryTags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] uppercase font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Link to={`/projeler/${project.slug}`}>
                        <Button variant="outline" fullWidth size="sm" className="group/btn">
                          Detayları Gör <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-slate-600">Aradığınız kriterlere uygun proje bulunamadı.</h3>
            <button onClick={() => {setFilter('All'); setSearchQuery('');}} className="text-brand-500 hover:underline mt-2">
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
