import React from 'react';

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Updated for more corporate feel: slightly less rounded, cleaner focus rings
  const baseStyle = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-500/20 focus:ring-brand-500 border border-transparent",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10 focus:ring-slate-900 border border-transparent",
    outline: "bg-white border-2 border-slate-200 text-slate-700 hover:border-brand-600 hover:text-brand-600 hover:bg-brand-50",
    ghost: "bg-transparent text-slate-600 hover:text-brand-600 hover:bg-slate-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg" // Larger touch targets for main CTAs
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Badge ---
export const Badge: React.FC<{ children: React.ReactNode; variant?: 'brand' | 'slate' }> = ({ children, variant = 'brand' }) => {
  const styles = variant === 'brand' 
    ? "bg-brand-50 text-brand-700 border-brand-200"
    : "bg-slate-100 text-slate-700 border-slate-200";
    
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide border ${styles}`}>
      {children}
    </span>
  );
};

// --- Card ---
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    // Cleaner border, less shadow by default, white bg
    <div className={`bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

// --- Section Header ---
export const SectionHeader: React.FC<{ 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center' 
}> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} max-w-4xl mx-auto`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      {/* Decorative Line */}
      <div className={`h-1 w-20 bg-brand-500 mt-8 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

// --- Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-slate-900 mb-2">{label}</label>}
      <input
        className={`w-full px-4 py-3.5 rounded-md border bg-slate-50 ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500'} focus:ring-1 outline-none transition-colors placeholder:text-slate-400 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// --- TextArea ---
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-slate-900 mb-2">{label}</label>}
      <textarea
        className={`w-full px-4 py-3.5 rounded-md border bg-slate-50 ${error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500'} focus:ring-1 outline-none transition-colors min-h-[140px] placeholder:text-slate-400 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};