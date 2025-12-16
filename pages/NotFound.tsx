import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-700 px-4 py-2 text-sm font-semibold mb-6">
        404 • Sayfa bulunamadı
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Aradığınız sayfaya ulaşamadık
      </h1>
      <p className="text-slate-600 max-w-2xl mb-8">
        Bağlantı değişmiş, silinmiş veya yanlış yazılmış olabilir. Ana sayfaya dönerek devam
        edebilir ya da bir önceki sayfaya geri gidebilirsiniz.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 font-semibold transition-colors"
        >
          <Home className="w-5 h-5" />
          Ana sayfaya dön
        </Link>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 text-slate-800 px-6 py-3 font-semibold hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Geri git
        </button>
      </div>
    </div>
  );
};
