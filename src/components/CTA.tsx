
import React from 'react';
import { DollarSign } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="section bg-dark-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-neon-cyan/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-neon-magenta/5 blur-3xl animate-pulse-slow delay-150"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 backdrop-blur-lg border border-white/10 text-center animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-text-flicker">
            <span className="neon-text-cyan">Secure Your Material's</span> <span className="neon-text-magenta">True Value</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't navigate uncertain markets alone. Get precise valuations for your materials with our AI-powered technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://chatgpt.com/g/g-677237f84a1481919bea01ed318e6e8c-materiumor-material-valuation-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 min-w-[200px]"
            >
              <DollarSign className="w-5 h-5" />
              <span>START YOUR VALUATION</span>
            </a>
            <a 
              href="https://antiqueappraisalgpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 min-w-[200px]"
            >
              <span>Try Antique & Collectible Appraisal</span>
            </a>
          </div>
          
          <div className="mt-8 text-white/60 text-sm">
            "Veritas in virtute materiae" — Truth in the value of materials
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
