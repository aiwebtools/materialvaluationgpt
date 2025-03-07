
import React, { useEffect, useRef } from 'react';

const VideoSection: React.FC = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const target = entry.target.querySelector('.fade-in-section');
          if (entry.isIntersecting && target) {
            target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }
    
    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  return (
    <section className="section bg-dark-blue relative" ref={videoContainerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 fade-in-section">
            <h2 className="section-title">See Materiumor in Action</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Watch how our AI provides accurate material valuations and insights to help you make informed decisions.
            </p>
          </div>
          
          <div className="fade-in-section">
            <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden neo-card">
              <iframe 
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/tbZu4vnsY_8?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1&hd=1"
                title="Materiumor - The Material Valuation GPT"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Overlay Border Glow Effect */}
              <div className="absolute inset-0 border border-neon-cyan/30 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
