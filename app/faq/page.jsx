'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="glassmorphism rounded-lg mb-4 overflow-hidden"
      initial={false}
    >
      <button
        className="flex justify-between items-center w-full p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-iw-text-primary">{question}</span>
        {isOpen ? <FaChevronUp className="text-iw-accent-orange" /> : <FaChevronDown className="text-iw-accent-orange" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6 text-iw-text-secondary leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const faqs = [
    {
      q: "How long does the entire import process take?",
      a: "From initial consultation to handover, the 'on-demand' import process typically takes 8-12 weeks. This includes 1-2 weeks for sourcing, 4-6 weeks for shipping, and 2-4 weeks for customs, compliance, and registration in Sri Lanka."
    },
    // ... (rest of the FAQs are the same)
    {
      q: "Can you find a specific rare or classic car for me?",
      a: "Absolutely. This is our specialty. Our 'on-demand' sourcing service is perfect for car enthusiasts looking for specific or rare models. Our partners have access to exclusive auctions and private collections not available to the public."
    }
  ];

  return (
    <motion.div 
      className="bg-iw-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-main">
        <h1 className="text-center mb-12 text-glow">Frequently Asked Questions</h1>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}