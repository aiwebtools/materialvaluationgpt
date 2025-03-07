
import React from 'react';
import { DollarSign, AlertTriangle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="section bg-dark-blue relative overflow-hidden py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-neon-cyan/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-neon-magenta/5 blur-3xl animate-pulse-slow delay-150"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-6 md:p-8 lg:p-12 backdrop-blur-lg border border-white/10 text-center animate-scale-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 animate-text-flicker">
            <span className="neon-text-cyan">Secure Your Material's</span> <span className="neon-text-magenta">True Value</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-2xl mx-auto">
            Get precise valuations for your materials with our AI-powered technology.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8 p-3 border border-yellow-500/30 bg-yellow-500/10 rounded-md max-w-3xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <p className="text-sm text-yellow-500">
              <strong>Important:</strong> This tool is for informational and research purposes only. AI may provide inaccurate responses. Always verify material valuations with qualified experts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://chatgpt.com/g/g-677237f84a1481919bea01ed318e6e8c-materiumor-material-valuation-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 w-full sm:min-w-[200px]"
            >
              <DollarSign className="w-5 h-5" />
              <span>START YOUR VALUATION</span>
            </a>
            <a 
              href="https://antiqueappraisalgpt.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 w-full sm:min-w-[200px]"
            >
              <span>Try Antique & Collectible Appraisal</span>
            </a>
          </div>
          
          <div className="mt-6 md:mt-8 text-white/60 text-sm">
            "Veritas in virtute materiae" — Truth in the value of materials
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
