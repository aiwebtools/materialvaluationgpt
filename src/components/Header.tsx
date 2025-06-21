
import React, { useState, useEffect } from 'react';
import { CreditCard, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for header style change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/30 group-hover:border-neon-cyan/60 transition-all duration-300">
            <CreditCard className="w-5 h-5 text-neon-cyan group-hover:text-neon-cyan/80" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight group-hover:text-neon-cyan transition-colors duration-300">Materiumor</h1>
            <p className="text-xs text-muted-foreground">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-677237f84a1481919bea01ed318e6e8c-materiumor-material-valuation-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-neon-cyan transition-colors"
          >
            BEGIN YOUR MATERIAL VALUATION NOW
          </a>
          <a 
            href="https://antiqueappraisalgpt.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-neon-cyan transition-colors"
          >
            Also Try Antique & Sports Collectible Appraisal GPT
          </a>
          <a 
            href="https://docs.google.com/document/d/e/2PACX-1vRCroJHvrdJpxXv6u72FOMtj5ttNzmohJ0UDIF-80WUxY8sxxEn8sJf_ChTtYz5VoVTIbVzF1tJTqun/pub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-neon-cyan transition-colors"
          >
            OPEN SOURCE PROMPT
          </a>
          <a 
            href="#disclaimer" 
            className="text-white/80 hover:text-neon-cyan transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-neon-cyan transition-colors"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white/80 hover:text-neon-cyan transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          fixed top-[72px] left-0 w-full bg-dark/95 backdrop-blur-md border-b border-white/10 
          transition-all duration-300 overflow-hidden md:hidden
          ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}
        `}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="https://chatgpt.com/g/g-677237f84a1481919bea01ed318e6e8c-materiumor-material-valuation-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2 text-white/80 hover:text-neon-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BEGIN YOUR MATERIAL VALUATION NOW
          </a>
          <a 
            href="https://antiqueappraisalgpt.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2 text-white/80 hover:text-neon-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Also Try Antique & Sports Collectible Appraisal GPT
          </a>
          <a 
            href="https://docs.google.com/document/d/e/2PACX-1vRCroJHvrdJpxXv6u72FOMtj5ttNzmohJ0UDIF-80WUxY8sxxEn8sJf_ChTtYz5VoVTIbVzF1tJTqun/pub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2 text-white/80 hover:text-neon-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            OPEN SOURCE PROMPT
          </a>
          <a 
            href="#disclaimer" 
            className="py-2 text-white/80 hover:text-neon-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2 text-white/80 hover:text-neon-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            More AI Tools
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
