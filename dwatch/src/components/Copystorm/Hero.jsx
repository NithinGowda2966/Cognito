import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Database, Globe, Shield, FileBox, Blocks } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width * 20;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Database, text: "Automated Salesforce Backup" },
    { icon: Globe, text: "Enterprise-Scale Solution" },
    { icon: Shield, text: "Advanced Data Security" },
    { icon: Blocks, text: "Seamless Integration" }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-30 animate-slide" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-900/80 backdrop-blur-sm" />
      </div>

      {/* Gradient orbs */}
      <div 
        className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        style={{ animationDelay: '2s' }}
      />

      {/* Main content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Rotating features banner */}
          <div className="flex justify-center mb-8">
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-2 border border-slate-700">
              <div className="flex items-center gap-4 h-6 overflow-hidden">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 transform ${
                      index === activeFeature ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <feature.icon className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-slate-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-white mb-2">Your Complete</span>
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 blur-lg opacity-30 animate-pulse" />
                <span className="relative bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Salesforce Backup
                </span>
              </span>
              <span className="block text-white mt-2">Solution</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade backup and recovery platform designed specifically for Salesforce. 
              Secure, automated, and infinitely scalable.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative px-8 py-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0.5 bg-slate-900 rounded-[10px]" />
                <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group relative px-8 py-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-slate-800 opacity-50" />
                <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                  Watch Demo
                  <FileBox className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "99.99%", label: "Backup Success Rate" },
              { number: "5000+", label: "Enterprise Customers" },
              { number: "24/7", label: "Expert Support" }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px, 0)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="absolute -inset-px bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;