import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Database, 
  Cloud, 
  Clock, 
  RefreshCw, 
  Search,
  Settings,
  Save,
  FileJson,
  Lock,
  Activity,
  BarChart2
} from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 0,
      title: "Automated Backup",
      icon: Database,
      description: "Set up automated daily backups of your entire Salesforce org",
      benefits: [
        "Scheduled daily, weekly, or custom interval backups",
        "Incremental backup support for efficient storage",
        "Real-time backup monitoring and notifications",
        "Automatic retry mechanisms for failed backups"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 1,
      title: "Data Recovery",
      icon: RefreshCw,
      description: "Restore your data quickly and accurately when needed",
      benefits: [
        "Point-in-time recovery options",
        "Granular restore capabilities",
        "Bulk data restoration",
        "Cross-org data migration support"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Security",
      icon: Shield,
      description: "Enterprise-grade security for your sensitive data",
      benefits: [
        "SOC 2 Type II compliant",
        "End-to-end encryption",
        "Role-based access control",
        "Audit logging and compliance reporting"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  const detailedFeatures = [
    {
      icon: Save,
      title: "Smart Compression",
      description: "Optimize storage with intelligent data compression while maintaining data integrity"
    },
    {
      icon: FileJson,
      title: "Metadata Support",
      description: "Complete backup of all metadata including custom fields, workflows, and page layouts"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Quickly find and restore specific records with powerful search capabilities"
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Tailor backup schedules and retention policies to your needs"
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      description: "Minimal impact on your Salesforce org's performance during backups"
    },
    {
      icon: BarChart2,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting on backup status, storage usage, and restoration activities"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Powerful Features for
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text mt-2">
              Enterprise Data Protection
            </span>
          </h2>
          <p className={`text-lg text-slate-300 transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            CopyStorm provides comprehensive backup and recovery features designed to keep 
            your Salesforce data safe, secure, and always accessible.
          </p>
        </div>

        {/* Main Features Tabs */}
        <div className="mb-20">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === index 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Background */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20'
                    : 'bg-slate-800/0 group-hover:bg-slate-800/50'
                }`} />
                
                {/* Border */}
                <div className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                  activeTab === index
                    ? 'border-emerald-500/20'
                    : 'border-transparent group-hover:border-slate-700'
                }`} />

                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <feature.icon className="w-5 h-5" />
                  <span className="font-medium">{feature.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Feature Description */}
            <div className={`transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-3xl font-bold text-white mb-6">
                {features[activeTab].title}
              </h3>
              <p className="text-lg text-slate-300 mb-8">
                {features[activeTab].description}
              </p>
              <ul className="space-y-4">
                {features[activeTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-emerald-500/10">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature Image */}
            <div className={`relative transition-all duration-700 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-2xl" />
              <img 
                src={features[activeTab].image}
                alt={features[activeTab].title}
                className="relative rounded-2xl border border-slate-700/50 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-slate-800/50 rounded-2xl group-hover:bg-slate-800/70 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/5 group-hover:to-teal-400/5 rounded-2xl transition-colors" />
              
              {/* Content */}
              <div className="relative">
                <div className="inline-block p-3 rounded-xl bg-slate-800/50 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;