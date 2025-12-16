import React from 'react';
import { SectionHeader, Card, Badge, Button } from '../components/ui';
import { blogPosts } from '../data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Blog & İçgörüler" subtitle="Teknoloji, tasarım ve dijital dünyaya dair notlarımız." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col group cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-2xl">
                 <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="brand">{post.category}</Badge>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="text-brand-600 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Oku <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};