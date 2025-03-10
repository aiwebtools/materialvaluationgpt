
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DisclaimerPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if disclaimer has been accepted already
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAcceptedDisclaimer) {
      // Small delay before showing popup
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save acceptance to localStorage
    localStorage.setItem('disclaimerAccepted', 'true');
    
    // Close popup
    setIsVisible(false);
    
    // Show success toast
    toast({
      title: "Disclaimer Accepted",
      description: "Thank you for acknowledging our terms",
      variant: "default",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop overlay */}
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Popup content */}
          <motion.div 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full z-50 p-1"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="relative w-full bg-gradient-to-br from-dark-blue/95 to-dark/95 backdrop-blur-md rounded-xl p-1 overflow-hidden border border-neon-cyan/30 shadow-neon-glow">
              {/* Animated border glow effect */}
              <div className="absolute inset-0 bg-conic-gradient opacity-20 animate-rotate-slow"></div>
              
              <div className="relative z-10 bg-dark-blue/80 rounded-lg p-6 backdrop-blur-md">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mr-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-neon-yellow via-neon-magenta to-neon-cyan bg-clip-text text-transparent animate-text-flicker">
                    Material Valuation Disclaimer
                  </h2>
                </div>
                
                <div className="space-y-3 mb-6 text-white/80 font-medium">
                  <p className="text-sm md:text-base">
                    Materiumor provides material valuations for <span className="text-neon-cyan">informational and research purposes only</span>. 
                  </p>
                  
                  <p className="text-sm md:text-base">
                    AI responses may be inaccurate. Always verify with qualified experts before making financial decisions.
                  </p>
                  
                  <p className="text-sm md:text-base">
                    By clicking "I AGREE" you acknowledge you've read and understood our full disclaimer and will use this tool responsibly.
                  </p>
                </div>
                
                <button
                  onClick={handleAccept}
                  className="relative w-full py-3 px-6 overflow-hidden group bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-semibold text-lg text-white shadow-lg transition-all duration-300 hover:shadow-neon-glow active:scale-95 active:shadow-none"
                >
                  {/* Button background effects */}
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
                  
                  <span className="relative flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    I AGREE
                  </span>
                  
                  {/* Pulsing effect */}
                  <span className="absolute inset-0 border-2 border-white/30 rounded-lg animate-pulse-ring"></span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
