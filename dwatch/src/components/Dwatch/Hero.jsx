import React, { useEffect, useState } from 'react';
import { ArrowRight, Activity, BarChart2, Server } from 'lucide-react';
import DashboardImage from '../../images/Dwatch_dashboard.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900 to-slate-900" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? '#60A5FA' : i === 1 ? '#818CF8' : '#A78BFA'} 0%, transparent 70%)`,
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animation: `float-orb-${i} ${10 + i * 2}s infinite ease-in-out`,
              transform: `translate(${mousePosition.x * (0.2 + i * 0.1)}px, ${mousePosition.y * (0.2 + i * 0.1)}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative container mx-auto px-6 pt-20">
        {/* Dashboard Preview - Moved up and made larger */}
        <div 
          className="absolute left-1/2 top-[90%] w-[90%] max-w-[1400px] -translate-x-1/2 z-0"
          style={{
            transform: `
              translate(-50%, -10%)
              perspective(1000px) 
              rotateX(${20 + mousePosition.y * 0.2}deg) 
              rotateY(${mousePosition.x * 0.2}deg)
            `,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-blue-500/10">
            <img 
              src={DashboardImage}
              alt="Dashboard Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          </div>

          {/* Floating Feature Icons */}
          {[Activity, BarChart2, Server].map((Icon, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${15 + index * 30}%`,
                top: `${-20 - (index % 2) * 15}%`,
                animation: `float-delayed-${index} 3s infinite ease-in-out ${index * 0.5}s`,
                zIndex: 20,
              }}
            >
              <div className="relative bg-slate-800/90 p-3 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl" />
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Text Content - Moved up and added backdrop blur */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">
              More than
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
              Observability Platform
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 mx-auto max-w-2xl">
            Monitor, understand and optimize your systems and services in real-time
          </p>

          <button 
            className="relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl px-8 py-4 hover:from-blue-600 hover:to-indigo-600 transition-all group overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-30 flex items-center gap-2">
              Start Monitoring
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;