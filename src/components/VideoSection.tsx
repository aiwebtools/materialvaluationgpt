
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
    <section id="video" className="section bg-dark-blue relative py-16 md:py-24" ref={videoContainerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 fade-in-section">
            <h2 className="section-title">See Materiumor in Action</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Watch how our AI provides material valuations and insights to help you make informed decisions. Remember that results are for research purposes only.
            </p>
          </div>
          
          <div className="fade-in-section">
            <div className="relative rounded-xl overflow-hidden neo-card" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/tbZu4vnsY_8?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1&hd=1"
                title="Materiumor - The Material Valuation GPT"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
              
              {/* Overlay Border Glow Effect */}
              <div className="absolute inset-0 border border-neon-cyan/30 rounded-xl pointer-events-none"></div>
            </div>
            <div className="mt-4 text-center text-yellow-500 text-sm">
              <p><strong>Note:</strong> This tool is for informational and research purposes only. AI may provide inaccurate responses. Always verify valuations with qualified experts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
