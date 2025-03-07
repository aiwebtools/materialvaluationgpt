
import React from 'react';
import { DollarSign, Globe, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      <div className="absolute inset-0 bg-hero-gradient -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute w-40 h-40 rounded-full bg-neon-blue/10 blur-3xl top-1/4 -left-20 animate-pulse-slow"></div>
      <div className="absolute w-60 h-60 rounded-full bg-neon-magenta/10 blur-3xl bottom-1/3 -right-20 animate-pulse-slow"></div>
      
      {/* Animated Scan Line */}
      <div className="scan-line animate-laser-scan"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 mb-6 animate-slide-down">
            <span className="text-neon-magenta text-sm font-medium">Powered by AiWebTools.Ai & GPT4o Technology</span>
          </div>
          
          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="neon-text-cyan">Materiumor</span> - The Material Valuation <span className="neon-text-magenta">GPT</span>
          </h1>
          
          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl animate-slide-up">
            Your AI "World Trade Center" for All Goods and Materials - Creating a true value system for anything in an uncertain world.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <a 
              href="https://chatgpt.com/g/g-677237f84a1481919bea01ed318e6e8c-materiumor-material-valuation-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              <span>BEGIN YOUR MATERIAL VALUATION NOW</span>
            </a>
            <a 
              href="https://antiqueappraisalgpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" />
              <span>Try Antique & Collectible Appraisal</span>
            </a>
          </div>
          
          {/* Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <div className="glass-card p-6 hover:shadow-neon-glow transition-shadow duration-300 animate-scale-in">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Precise Valuations</h3>
              <p className="text-white/70">Accurate grading and market value calculations for any material or item.</p>
            </div>
            
            {/* Card 2 */}
            <div className="glass-card p-6 hover:shadow-neon-magenta transition-shadow duration-300 animate-scale-in delay-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neon-magenta/10 border border-neon-magenta/30 mb-4 mx-auto">
                <Globe className="w-6 h-6 text-neon-magenta" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Global Markets</h3>
              <p className="text-white/70">Real-time data from commodity and financial markets worldwide.</p>
            </div>
            
            {/* Card 3 */}
            <div className="glass-card p-6 hover:shadow-neon-blue transition-shadow duration-300 animate-scale-in delay-200">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neon-blue/10 border border-neon-blue/30 mb-4 mx-auto">
                <Database className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Comprehensive Analysis</h3>
              <p className="text-white/70">Deep insights into materials from precious metals to digital currencies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
