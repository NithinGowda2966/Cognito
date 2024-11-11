import React, { useEffect, useRef, useState } from 'react';
import { 
  Shield, 
  Database, 
  Cloud, 
  Zap, 
  Clock, 
  RefreshCw 
} from 'lucide-react';

const WhatIsCopystorm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Database,
      title: "Complete Data Backup",
      description: "Automatically backup all your Salesforce data, including custom objects, attachments, and metadata."
    },
    {
      icon: Zap,
      title: "Lightning-Fast Recovery",
      description: "Restore your data in minutes with point-in-time recovery and granular restore options."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with SOC 2 Type II, HIPAA, and GDPR standards."
    },
    {
      icon: Cloud,
      title: "Unlimited Storage",
      description: "Store unlimited amounts of data with no additional costs or hidden fees."
    },
    {
      icon: Clock,
      title: "Automated Backups",
      description: "Set it and forget it with automated daily backups and real-time monitoring."
    },
    {
      icon: RefreshCw,
      title: "Seamless Integration",
      description: "Easy integration with your existing Salesforce environment with no code changes required."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="what-is" 
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-sm rounded-full" />
              <span className="relative px-4 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                Enterprise-Grade Solution
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            The Most Comprehensive
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text mt-2">
              Salesforce Backup Solution
            </span>
          </h2>

          {/* Description */}
          <p className={`text-lg text-slate-300 mb-8 transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            CopyStorm is an enterprise-grade backup and recovery solution designed specifically 
            for Salesforce. With automated backups, unlimited storage, and lightning-fast 
            recovery options, we ensure your critical business data is always protected and 
            easily accessible.
          </p>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-slate-900 px-4 text-sm text-slate-500">Why Choose CopyStorm</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-slate-800/50 rounded-2xl group-hover:bg-slate-800/70 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 rounded-2xl transition-colors" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="inline-block p-3 rounded-xl bg-slate-800/50 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-emerald-400/0 group-hover:border-emerald-400/20 transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:from-emerald-600 group-hover:to-teal-600 transition-colors" />
            <span className="relative">Get Started with CopyStorm</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCopystorm;