import React, { useState, useCallback, useEffect } from 'react';
import Dwatch_unified from '../../images/Dwatch_unified.png';
import Dwatch_unified_bg from '../../images/Dwatch_unified_bg.jpg';
import Dwatch_tailored from '../../images/Dwatch_tailored.png';
import Dwatch_ai from '../../images/Dwatch_ai.png';
import Dwatch_ai_bg from '../../images/Dwatch_ai_bg.jpg';

const FeatureCard = ({ 
  title, 
  description, 
  fullImageUrl, 
  backgroundImageUrl, 
  cutoutImageUrl,
  className = '',
  borderStyle = 'border-left-behind',
  index
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timeout);
  }, [index]);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;
    const x = ((posX / (rect.width / 2)) * 20);
    const y = ((posY / (rect.height / 2)) * 20);
    setRotation({ x: -y, y: x });
  }, []);

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`relative h-[24rem] w-[18rem] aspect-[5/7] text-white perspective-[0rem] transition-all duration-700 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Background with Gradient */}
      <div 
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-slate-950/80 
          backdrop-blur-xl border border-white/10 shadow-2xl"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(0, 0, -4rem)`,
        }}
      />

      {/* Shadow Layer */}
      <div 
        className="absolute inset-5 bg-cover bg-center opacity-20 blur-3xl saturate-90 -translate-y-8"
        style={{
          backgroundImage: `url(${fullImageUrl})`,
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(0, 2rem, -2rem)`,
          boxShadow: '0 -1.5rem 2rem -0.5rem rgba(0, 0, 0, 0.7)',
          filter: 'blur(15px) brightness(0.7)'
        }}
      />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(${backgroundImageUrl || fullImageUrl})`,
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(0, 0, 0rem)`
        }}
      />

      {/* Cutout Layer */}
      <div 
  className="absolute inset-5 bg-cover bg-center z-0 scale-[0.92] opacity-90 -translate-y-8"
  style={{
    backgroundImage: `url(${cutoutImageUrl})`,
    maskImage: `url(${cutoutImageUrl})`,
    maskSize: 'cover',
    maskPosition: 'center',
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(0, -2rem, 4rem)`,
  }}
/>

      {/* Content Container with Glass Effect */}
      <div 
        className="absolute inset-x-4 bottom-4 rounded-lg backdrop-blur-sm bg-gradient-to-t from-black/80 via-black/60 to-transparent 
          p-3 z-30 border-t border-white/10"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(0, 0, 6rem)`,
        }}
      >
        <h2 className="text-2xl font-bold mb-3 text-white tracking-wide">
          {title}
        </h2>
        <p className="text-sm font-light text-slate-200 leading-relaxed opacity-90">
          {description}
        </p>
      </div>

      {/* Border Decorations */}
      <div 
        className={`absolute inset-5 border-2 border-[#e2c044] z-40 rounded-lg transition-colors duration-300
          hover:border-blue-400 group-hover:border-opacity-70
          ${borderStyle === 'border-left-behind' ? 'border-l-transparent' : ''}
          ${borderStyle === 'border-right-behind' ? 'border-r-transparent' : ''}
          ${borderStyle === 'border-bottom-behind' ? 'border-b-transparent' : ''}
        `}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(0, 0, 2rem)`
        }}
      />
    </div>
  );
};

const FeatureCards = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Unified Visibility and Proactive Monitoring",
      description: "DWatch consolidates all system metrics for real-time insights and proactive issue detection.",
      fullImageUrl: Dwatch_unified,
      backgroundImageUrl: Dwatch_unified_bg,
      cutoutImageUrl: Dwatch_unified,
      borderStyle: "border-right-behind border-bottom-behind"
    },
    {
      title: "Tailored to Your Team's Needs",
      description: "Customizable dashboards, alerts, and self-service options to match your workflow.",
      fullImageUrl: Dwatch_tailored,
      backgroundImageUrl: "https://i.ibb.co/ZdGBm4K/m-background.png",
      cutoutImageUrl: Dwatch_tailored,
      borderStyle: "border-right-behind border-bottom-behind"
    },
    {
      title: "On-Demand Insights with AI-Powered Chatbot",
      description: "Leverage AI-powered insights and instant answers to your monitoring questions.",
      fullImageUrl: Dwatch_ai,
      backgroundImageUrl: Dwatch_ai_bg,
      cutoutImageUrl: Dwatch_ai,
      borderStyle: "border-right-behind border-bottom-behind"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      </div>

      <div className="relative flex flex-col items-center justify-center py-20 px-4">
        {/* Header */}
        <div 
          className="text-center mb-20 opacity-0 animate-fade-in"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
            Why DWatch?
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Experience the next generation of monitoring and insights
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              index={index}
              style={{ transform: `translateY(${scrollY * 0.1 * (index + 1)}px)` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;

// Add these keyframes to your global CSS
/*
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s forwards;
}
*/