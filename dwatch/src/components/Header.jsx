import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, Database } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const iscopystormPage = location.pathname === '/copystorm';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <Monitor className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                DWatch
              </span>
            </Link>

            <Link to="/copystorm" className="flex items-center gap-3">
              <Database className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
                CopyStorm
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-8">
            {iscopystormPage ? (
              // CopyStorm navigation items
              <div className="hidden md:flex items-center space-x-8">
                <a href="#what-is" className="text-sm text-slate-300 hover:text-white transition-colors">What is CopyStorm</a>
                <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
                <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact</a>
                <a href="#faq" className="text-sm text-slate-300 hover:text-white transition-colors">FAQ</a>
              </div>
            ) : (
              // DWatch navigation items
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
                <a href="#docs" className="text-sm text-slate-300 hover:text-white transition-colors">Docs</a>
                <a href="#community" className="text-sm text-slate-300 hover:text-white transition-colors">Community</a>
              </div>
            )}
            
            <button className={`
              px-6 py-2 rounded-lg text-sm font-medium text-white transition-all hover:shadow-lg
              ${iscopystormPage 
                ? 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-500/25' 
                : 'bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500/25'}
            `}>
              {iscopystormPage ? 'Try Free' : 'Start Monitoring'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;