import React, { useState, useEffect } from 'react';
import { 
  Activity, Server, List, Bell, 
  Timer, BarChart2 
} from 'lucide-react';
import Lottie from "lottie-react";

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
    
    <div className="relative flex flex-col gap-3 p-1">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Icon className="w-full h-full text-blue-400 group-hover:text-blue-300 transition-colors duration-300" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate-400 text-base leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesPage = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://lottie.host/bf3774d9-647c-49a8-a38f-df2e89352b0e/8HdhJhc1la.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const features = [
    {
      icon: Activity,
      title: "Jobs Monitoring",
      description: "Track job pipelines with real-time completion status and performance metrics in one centralized dashboard."
    },
    {
      icon: Server,
      title: "Server Monitoring",
      description: "Monitor server health metrics including CPU, memory, and disk space with proactive issue detection."
    },
    {
      icon: List,
      title: "Centralized Logs",
      description: "Access comprehensive job logs across all servers from a single intuitive interface for quick troubleshooting."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Receive intelligent notifications for anomalies, job failures, and critical performance issues before they escalate."
    },
    {
      icon: Timer,
      title: "SLA Management",
      description: "Track and optimize service level agreements with AI-powered recommendations and historical insights."
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Gain deep insights into system performance with comprehensive historical data analysis and trends."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 py-24 relative">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          {/* Left section with heading and Lottie animation */}
          <div className="lg:w-1/2">
            <h1 className="text-6xl font-semibold text-white leading-tight mb-8">
              Monitor and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                optimize
              </span>
              {' '}your systems faster.
            </h1>
            
            {/* Lottie animation container with gradient effects */}
            <div className="relative">
              {/* Gradient background effect */}
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              
              {/* Lottie animation */}
              <div className="relative w-full max-w-lg mx-auto p-8">
                {animationData && (
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                    style={{ transform: 'scale(1.2)' }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right section with features grid */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-xl" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 p-8">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
    </div>
  );
};

export default FeaturesPage;