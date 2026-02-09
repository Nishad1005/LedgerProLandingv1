import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  { question: "What is LedgerPRO?", answer: "LedgerPRO is an enterprise solution that transforms hard copy or electronic documents into digital formats that can be integrated into information systems. It helps organizations with record-keeping, transaction processing, pre-audit checks, compliance, and data analysis." },
  { question: "How does LedgerPRO work?", answer: "LedgerPRO uses a Data Processing Specialist (DBS) who coordinates the entire data transformation process. The DBS manages people, processes, and technologies to ensure smooth conversion and integration into your organization's system." },
  { question: "What types of documents can LedgerPRO process?", answer: "LedgerPRO can handle both paper-based and electronic documents. It converts these into digital formats that can be used for record-keeping, audits, compliance, or data analysis." },
  { question: "What benefits does LedgerPRO provide?", answer: "LedgerPRO streamlines document processing, ensuring faster access to records, improved compliance, and enhanced analytics capabilities. It reduces manual errors, supports audit readiness, and facilitates data-driven decision-making." },
  { question: "How does LedgerPRO ensure compliance?", answer: "LedgerPRO’s DBS performs pre-audit checks and ensures that all documents meet relevant regulatory standards, helping your organization stay compliant with industry regulations." },
  { question: "What role does the Data Processing Specialist (DBS) play?", answer: "The DBS manages the entire data transformation process, ensuring that the right people, processes, and technologies are in place to meet the specific goals of your organization. They oversee everything from document digitization to ensuring compliance and data integrity." },
  { question: "Can LedgerPRO integrate with our existing systems?", answer: "Yes, LedgerPRO is designed to work with various information systems, ensuring that the transformed data is seamlessly integrated into your current setup." },
  { question: "Is LedgerPRO suitable for small businesses?", answer: "While LedgerPRO is an enterprise-level solution, it can be tailored to meet the needs of organizations of different sizes, including small and medium-sized businesses." },
  { question: "How secure is the data processed through LedgerPRO?", answer: "LedgerPRO employs robust security measures to ensure that all data processed is protected from unauthorized access. The DBS oversees compliance with data security regulations throughout the process." },
  { question: "How do I get started with LedgerPRO?", answer: "To get started, simply click below to schedule a consultation. Our team will assess your document processing needs and guide you through the setup process." },
];

interface FAQProps {
  onOpenBooking: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-faqBg py-24 scroll-mt-24">
      <div className="max-w-[1170px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <div className="sticky top-28 text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand text-white mb-6 shadow-glow">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl font-bold text-textMain mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-textLight text-lg mb-8">
              Can't find what you're looking for? Reach out to our support team.
            </p>
            <button onClick={onOpenBooking} className="hidden lg:inline-block text-brand font-bold border-b-2 border-brand hover:text-brandDark transition-colors pb-1">
              Contact Support →
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3 space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border border-transparent rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white shadow-xl border-gray-100 scale-[1.02]' : 'bg-white/60 hover:bg-white shadow-sm'}`}
            >
              <button
                className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex gap-4">
                   <span className="text-brand font-bold opacity-50">{index + 1}.</span>
                   <span className={`text-lg font-semibold ${openIndex === index ? 'text-brand' : 'text-textMain'}`}>
                    {item.question}
                  </span>
                </div>
                <span className={`ml-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand' : 'text-gray-400'}`}>
                   {openIndex === index ? <ChevronUp size={20}/> : <ChevronDown size={20} />}
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-textLight leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;