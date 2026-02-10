import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, MessageSquare, CheckCircle2, Clock, FileText, User, ArrowRight } from 'lucide-react';

// Custom hook to check if an element is in the viewport
const useIsVisible = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// --- Custom UI Visualizations for Steps 3 & 4 ---

const Step3Visual = () => (
  <div className="relative w-full max-w-[450px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden font-sans select-none transform transition-transform hover:scale-[1.02] duration-500">
    {/* Header */}
    <div className="bg-gray-50/80 backdrop-blur-sm border-b border-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
         <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
         <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Discrepancy Detected</span>
      </div>
      <div className="px-2 py-1 bg-white rounded border border-gray-200 text-[10px] font-mono text-gray-400">#ERR-402</div>
    </div>
    
    {/* Body */}
    <div className="p-6 space-y-5 relative">
       
       {/* Field Row: Vendor */}
       <div className="flex items-center justify-between group">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-gray-50 rounded-lg text-gray-400"><User size={16}/></div>
             <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase">Vendor</div>
                <div className="text-sm font-semibold text-gray-700">Acme Supplies Ltd.</div>
             </div>
          </div>
          <div className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">Matched</div>
       </div>

       {/* Field Row: Amount (Problem) */}
       <div className="relative p-3 rounded-xl bg-red-50/50 border border-red-100">
          <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-white rounded-lg text-red-500 shadow-sm"><FileText size={16}/></div>
                 <div>
                    <div className="text-[10px] font-bold text-red-500 uppercase">Invoice Amount</div>
                    <div className="text-sm font-bold text-gray-800">$4,250.00</div>
                 </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-red-600 font-bold bg-white px-2 py-1 rounded-md shadow-sm border border-red-100">
                 <AlertCircle size={12} />
                 Mismatch
              </div>
          </div>
          
          {/* Query Box Overlay */}
          <div className="mt-3 bg-white rounded-lg p-3 shadow-sm border border-brand/10 flex gap-3 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand"></div>
              <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex-shrink-0 flex items-center justify-center">
                 <MessageSquare size={14} />
              </div>
              <div>
                 <div className="text-[11px] font-bold text-brand uppercase mb-0.5">Automated Query</div>
                 <p className="text-xs text-gray-600 leading-relaxed">
                    Entry differs from PO #992 ($4,000). Variance exceeds 5%. Please clarify.
                 </p>
              </div>
          </div>
       </div>

       {/* Action Buttons */}
       <div className="flex gap-2 pt-1">
          <div className="h-8 w-24 bg-gray-100 rounded-lg"></div>
          <div className="h-8 flex-1 bg-brand/10 rounded-lg border border-brand/20 flex items-center justify-center text-xs font-bold text-brand">Resolve Query</div>
       </div>
    </div>
  </div>
);

const Step4Visual = () => (
  <div className="relative w-full max-w-[450px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden font-sans select-none transform transition-transform hover:scale-[1.02] duration-500">
     {/* Header */}
     <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-4 flex justify-between items-center">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
           <Clock size={14} /> Audit Trail
        </span>
        <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 flex items-center gap-1">
           <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> LIVE
        </div>
     </div>

     {/* Body */}
     <div className="p-6 bg-white relative">
        {/* Timeline Line */}
        <div className="absolute left-[39px] top-6 bottom-6 w-0.5 bg-gray-100"></div>

        <div className="space-y-6 relative z-10">
           
           {/* Item 1: Query */}
           <div className="flex gap-4 opacity-60">
              <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white shadow-sm flex items-center justify-center text-gray-400 z-10">
                 <MessageSquare size={14} />
              </div>
              <div>
                 <div className="text-[10px] text-gray-400 font-bold mb-0.5">10:23 AM</div>
                 <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded-lg border border-gray-100">
                    Query raised on INV #402
                 </div>
              </div>
           </div>

           {/* Item 2: Resolution */}
           <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center text-blue-600 z-10">
                 <User size={14} />
              </div>
              <div className="w-full">
                 <div className="text-[10px] text-blue-600 font-bold mb-0.5">10:45 AM • Operational User</div>
                 <div className="text-xs text-gray-800 bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm">
                    "Vendor confirmed price update. Attached email proof."
                 </div>
              </div>
           </div>

           {/* Item 3: Approval Action */}
           <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand text-white border-4 border-white shadow-md flex items-center justify-center z-10 ring-2 ring-brand/10">
                 <CheckCircle2 size={16} />
              </div>
              <div className="w-full">
                 <div className="text-[10px] text-brand font-bold mb-1">ACTION REQUIRED</div>
                 <div className="bg-white border border-brand/20 shadow-[0_4px_20px_-5px_rgba(98,57,236,0.15)] p-3 rounded-xl">
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-gray-800">Approve Variance?</span>
                        <span className="text-[10px] text-gray-400">HQ Level</span>
                     </div>
                     <div className="flex gap-2">
                        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1">
                           <CheckCircle2 size={12} /> Approve
                        </button>
                        <button className="px-3 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                           <span className="sr-only">Reject</span>
                           X
                        </button>
                     </div>
                 </div>
              </div>
           </div>

        </div>
     </div>
  </div>
);


const StepCard: React.FC<{ 
  step: string; 
  title: React.ReactNode; 
  description: string; 
  imageSrc?: string; 
  customVisual?: React.ReactNode;
  reverse?: boolean; 
  onOpenBooking: () => void;
}> = ({ step, title, description, imageSrc, customVisual, reverse, onOpenBooking }) => {
  const { ref, isVisible } = useIsVisible(0.15);

  return (
    <div 
      ref={ref} 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20 py-16 group`}
    >
      {/* Visual Section - Enters first */}
      <div 
        className={`w-full md:w-1/2 flex justify-center perspective-1000 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'
        }`}
      >
        {customVisual ? (
           <div className="transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105">
             {customVisual}
           </div>
        ) : (
          <img 
            src={imageSrc} 
            alt={step} 
            className="max-w-full h-auto max-h-[350px] drop-shadow-2xl rounded-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1" 
          />
        )}
      </div>
      
      {/* Text Section - Enters with delay */}
      <div 
        className={`w-full md:w-1/2 flex flex-col gap-5 text-left transition-all duration-1000 ease-out delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="inline-flex items-center space-x-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold shadow-lg shadow-brand/30">
            {step.replace(/[^0-9]/g, '')}
          </span>
          <h3 className="text-brand font-semibold text-xl tracking-wide uppercase">{step}</h3>
        </div>
        <h2 className="text-3xl md:text-4xl text-textMain font-bold leading-tight">{title}</h2>
        <p className="text-textLight text-lg leading-relaxed border-l-4 border-gray-200 pl-6 group-hover:border-brand transition-colors duration-300">
          {description}
        </p>
        <div className="mt-6">
          <button onClick={onOpenBooking} className="inline-flex items-center text-brand font-bold text-lg hover:translate-x-2 transition-transform">
            Start This Step <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface StepsProps {
  onOpenBooking: () => void;
}

const Steps: React.FC<StepsProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
       {/* Optional decorative background elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

      <div className="max-w-[1170px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
             <div className="inline-block mb-4">
              <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">Process Flow</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-textMain leading-tight mb-4">
              How <span className="text-brand">Ledger Pro</span> Works
            </h2>
            <p className="text-lg text-textLight">
              A transparent, efficient workflow that puts you in control.
            </p>
        </div>
        
        {/* Step 1: Capture */}
        <StepCard 
          step="Step 1" 
          title={<span><strong>Capture</strong><br/><span className="text-gray-500 font-light text-2xl">Digital Entry</span></span>}
          description="Documents, photos, registers, approvals — linked to entries."
          imageSrc="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/3e391290-1018-4bb9-9740-66be29d60241.png"
          onOpenBooking={onOpenBooking}
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent my-4"></div>

        {/* Step 2: Scrutinize */}
        <StepCard 
          step="Step 2" 
          title={<span><strong>Scrutinize</strong><br/><span className="text-gray-500 font-light text-2xl">Smart Analysis</span></span>}
          description="Checks for mismatches, missing evidence, duplicates, and irregularities."
          imageSrc="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/670f2ddf97369ce2c4eb5b3d.png"
          reverse={true}
          onOpenBooking={onOpenBooking}
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent my-4"></div>

        {/* Step 3: Raise Queries */}
        <StepCard 
          step="Step 3" 
          title={<span><strong>Raise Queries</strong><br/><span className="text-gray-500 font-light text-2xl">Flagging Issues</span></span>}
          description="Discrepancies are flagged and structured queries are raised."
          customVisual={<Step3Visual />}
          onOpenBooking={onOpenBooking}
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent my-4"></div>

        {/* Step 4: Review & Decide */}
        <StepCard 
          step="Step 4" 
          title={<span><strong>Review & Decide</strong><br/><span className="text-gray-500 font-light text-2xl">Full Traceability</span></span>}
          description="HQ reviews, approves resolutions, and clears entries with full traceability."
          customVisual={<Step4Visual />}
          reverse={true}
          onOpenBooking={onOpenBooking}
        />

        {/* Micro-line */}
        <div className="mt-20 text-center animate-fade-in-up">
             <div className="bg-brand/5 border border-brand/10 rounded-3xl p-8 md:p-14 inline-flex flex-col items-center shadow-lg relative overflow-hidden group">
                {/* Decorative blob behind the text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-2 md:gap-3 text-2xl md:text-3xl">
                    <span className="font-medium text-textMain">Ledger Pro highlights the issue.</span>
                    <span className="hidden md:inline-block w-2 h-2 bg-brand rounded-full"></span>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandLight">Management decides the action.</span>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Steps;