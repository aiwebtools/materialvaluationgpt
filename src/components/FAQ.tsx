
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="glass-card mb-4 overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-neon-cyan flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neon-cyan flex-shrink-0" />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-white/70">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
    
    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Materiumor?",
      answer: "Materiumor is an advanced AI-powered tool designed to provide accurate valuations and grades for various materials, including raw materials, precious metals, gemstones, and digital currencies. It uses GPT4o technology to analyze material properties and current market data to deliver precise valuations in real-time."
    },
    {
      question: "How accurate are the valuations?",
      answer: "Materiumor provides highly accurate valuations based on real-time market data, historical trends, and material-specific grading criteria. However, for high-value transactions or legal purposes, we recommend verifying with a certified appraiser. The AI analyzes current data for each new valuation request."
    },
    {
      question: "What types of materials can Materiumor evaluate?",
      answer: "Materiumor can evaluate a wide range of materials including precious metals (gold, silver, platinum), gemstones, raw materials (lithium, quartz, etc.), collectibles, and digital currencies. The AI adapts its valuation methods to the specific characteristics of each material type."
    },
    {
      question: "Does Materiumor store my material information or valuations?",
      answer: "No, Materiumor does not store any user data, material information, or valuation history. All analyses are performed in real-time during your session, and no information about your materials or the valuations provided is retained after your session ends."
    },
    {
      question: "How does the grading system work?",
      answer: "Our grading system employs material-specific criteria. For gemstones, we use the 4Cs (carat, cut, clarity, color); for metals, we assess purity and fineness; for raw materials, we evaluate concentration and quality; and for digital currencies, we analyze tokenomics, adoption rates, and market metrics."
    },
    {
      question: "Can I use Materiumor for insurance purposes?",
      answer: "While Materiumor provides detailed valuations based on current market data, insurance companies may require certification from licensed appraisers. Our valuations can serve as preliminary assessments, but we recommend consulting with your insurance provider about their specific requirements."
    }
  ];

  return (
    <section id="faq" className="section bg-dark-blue relative">
      {/* Background Elements */}
      <div className="absolute inset-0 cyberpunk-grid -z-10 opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-section" ref={faqRef}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get answers to common questions about Materiumor's valuation capabilities.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
