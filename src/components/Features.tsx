
import React, { useRef, useEffect } from 'react';
import { DollarSign, Database, Globe, Network, Cpu, Code, BarChart4, Shield, AlertTriangle } from 'lucide-react';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const targets = entry.target.querySelectorAll('.fade-in-section');
          if (entry.isIntersecting) {
            targets.forEach((target, index) => {
              setTimeout(() => {
                target.classList.add('is-visible');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-neon-cyan" />,
      title: "Universal Valuation",
      description: "Accurate pricing for any material - from precious metals and gems to digital currencies and unconventional items.",
      color: "cyan"
    },
    {
      icon: <BarChart4 className="w-6 h-6 text-neon-magenta" />,
      title: "Advanced Grading System",
      description: "Standardized quality assessment for materials based on purity, rarity, and market-specific criteria.",
      color: "magenta"
    },
    {
      icon: <Globe className="w-6 h-6 text-neon-blue" />,
      title: "Global Market Integration",
      description: "Real-time data from international commodity and financial markets for the most current valuations.",
      color: "blue"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-neon-yellow" />,
      title: "For Research Purposes",
      description: "Provided for informational and research use only. All valuations should be verified with certified professionals.",
      color: "yellow"
    },
    {
      icon: <Cpu className="w-6 h-6 text-neon-yellow" />,
      title: "GPT4o Technology",
      description: "Powered by cutting-edge AI to deliver assessments and insights for material valuation (may contain inaccuracies).",
      color: "yellow"
    },
    {
      icon: <Shield className="w-6 h-6 text-neon-green" />,
      title: "Privacy-Focused",
      description: "No data storage of your materials or valuations - all analysis happens in real-time during your session.",
      color: "green"
    },
    {
      icon: <Network className="w-6 h-6 text-neon-cyan" />,
      title: "Predictive Analytics",
      description: "Forward-looking market insights to help understand potential value changes and investment opportunities.",
      color: "cyan"
    },
    {
      icon: <Code className="w-6 h-6 text-neon-magenta" />,
      title: "Digital Currency Analysis",
      description: "Specialized blockchain analytics for evaluation of cryptocurrencies and digital assets.",
      color: "magenta"
    }
  ];

  return (
    <section className="section relative" ref={featuresRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 fade-in-section">
          <h2 className="section-title">Powerful Valuation Features</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Materiumor combines cutting-edge technology with comprehensive market knowledge to deliver valuations for research purposes.
          </p>
        </div>
        
        <div className="p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-md max-w-3xl mx-auto mb-12 fade-in-section">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <p className="text-yellow-500 text-sm">
              <strong>Important:</strong> AI systems may provide inaccurate information. All valuations should be verified with qualified professionals before making any financial decisions. This tool is designed for informational and research purposes only.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-scale fade-in-section"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-neon-${feature.color}/10 border border-neon-${feature.color}/30 mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
