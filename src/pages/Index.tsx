
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index: React.FC = () => {
  useEffect(() => {
    // Implementation for fade-in sections
    const handleScroll = () => {
      const fadeSections = document.querySelectorAll('.fade-in-section');
      
      fadeSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const isVisible = sectionTop < window.innerHeight - 100 && sectionBottom > 0;
        
        if (isVisible) {
          section.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in viewport
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-dark min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
