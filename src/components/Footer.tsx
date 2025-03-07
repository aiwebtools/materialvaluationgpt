
import React from 'react';
import { CreditCard, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark-blue/80 backdrop-blur-md pt-16 pb-8 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/30 group-hover:border-neon-cyan/60 transition-all duration-300">
                <CreditCard className="w-5 h-5 text-neon-cyan group-hover:text-neon-cyan/80" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight group-hover:text-neon-cyan transition-colors duration-300">Materiumor</h1>
                <p className="text-xs text-muted-foreground">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">AiWebTools.Ai</a></p>
              </div>
            </a>
            <p className="text-white/60 text-sm mb-6">
              Your AI "World Trade Center" for accurate material valuations, powered by advanced GPT4o technology.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center space-x-2 text-white/70 hover:text-neon-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact@ai-webtools.com</span>
              </a>
              <a 
                href="tel:+14758008096" 
                className="flex items-center space-x-2 text-white/70 hover:text-neon-cyan transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(475) 800-8096</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a 
                href="https://chatgpt.com/g/g-677237f84a1481919bea01ed318e6e8c-materiumor-material-valuation-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                BEGIN YOUR MATERIAL VALUATION NOW
              </a>
              <a 
                href="https://antiqueappraisalgpt.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                Also Try Antique & Sports Collectible Appraisal GPT
              </a>
              <a 
                href="#faq" 
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                FAQ
              </a>
              <a 
                href="#disclaimer" 
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                Disclaimer
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                More AI Tools
              </a>
            </nav>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <nav className="flex flex-col space-y-3">
              <a 
                href="https://openai.com/policies/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://aiwebtools.ai/terms-of-services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#disclaimer" 
                className="text-white/70 hover:text-neon-cyan transition-colors"
              >
                Disclaimer
              </a>
            </nav>
          </div>
          
          {/* More Tools Button */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Discover More</h3>
            <p className="text-white/60 text-sm mb-6">
              Explore our full suite of AI-powered tools designed to help you make better decisions.
            </p>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center rounded-full"
            >
              More AI Tools
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            "Illuminating material value in a complex world"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
