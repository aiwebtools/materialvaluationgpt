
import React, { useRef, useEffect } from 'react';

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Submit Your Material",
      description: "Upload images or provide detailed descriptions of the material you want to have valued."
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Materiumor analyzes your submission using GPT4o technology, comparing it with global market data."
    },
    {
      number: "03",
      title: "Comprehensive Grading",
      description: "Receive a detailed grade based on material-specific criteria like purity, condition, and rarity."
    },
    {
      number: "04",
      title: "Precise Valuation",
      description: "Get an accurate market value with supporting data and comparative market analysis."
    }
  ];

  return (
    <section className="section bg-dark-blue relative" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-title">How Materiumor Works</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our AI-powered process delivers accurate valuations in four simple steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-blue opacity-30 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="fade-in-section">
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Step Number with Glow */}
                  <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <div className="w-20 h-20 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full bg-neon-cyan/10 animate-pulse-ring"></div>
                      <div className="relative z-10 w-16 h-16 rounded-full bg-dark flex items-center justify-center border border-neon-cyan/50">
                        <span className="text-2xl font-bold text-neon-cyan">{step.number}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="md:w-1/2">
                    <div className={`glass-panel p-6 md:p-8 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <a 
            href="https://chatgpt.com/g/g-677237f84a1481919bea01ed318e6e8c-materiumor-material-valuation-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center"
          >
            Get Your Valuation Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
