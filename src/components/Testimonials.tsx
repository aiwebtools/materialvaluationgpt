
import React, { useRef, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "As a gemstone collector, I needed accurate valuations for insurance purposes. Materiumor provided detailed assessments that were validated by professional appraisers.",
      author: "Michael Chen",
      role: "Gemstone Collector",
      color: "cyan"
    },
    {
      quote: "The valuation accuracy for my cryptocurrency portfolio was impressive. Materiumor's detailed analysis helped me make informed investment decisions during market volatility.",
      author: "Sophia Rodriguez",
      role: "Crypto Investor",
      color: "magenta"
    },
    {
      quote: "I used Materiumor to value industrial raw materials for my business. The insights on market trends and price predictions saved us thousands on procurement.",
      author: "James Wilson",
      role: "Procurement Manager",
      color: "blue"
    },
    {
      quote: "After inheriting family heirlooms, I needed to understand their value. Materiumor provided comprehensive evaluations that helped with estate planning.",
      author: "Emily Thompson",
      role: "Estate Planner",
      color: "yellow"
    }
  ];

  return (
    <section className="section relative" ref={testimonialsRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="section-title">What Users Are Saying</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See how Materiumor is helping people make informed decisions about their valuable materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 relative fade-in-section hover:shadow-neon-${testimonial.color} transition-shadow duration-300`}
            >
              {/* Quote mark decoration */}
              <div className={`absolute -top-4 -left-2 text-8xl font-serif text-neon-${testimonial.color} opacity-20`}>"</div>
              
              <blockquote className="relative z-10">
                <p className="text-white/90 text-lg mb-6">{testimonial.quote}</p>
                <footer>
                  <div className={`w-12 h-1 bg-neon-${testimonial.color} mb-4`}></div>
                  <cite className="not-italic">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
