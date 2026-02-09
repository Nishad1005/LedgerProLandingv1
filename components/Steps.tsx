import React, { useState, useEffect, useRef } from 'react';

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

const StepCard: React.FC<{ 
  step: string; 
  title: React.ReactNode; 
  description: string; 
  imageSrc: string; 
  reverse?: boolean; 
  onOpenBooking: () => void;
}> = ({ step, title, description, imageSrc, reverse, onOpenBooking }) => {
  const { ref, isVisible } = useIsVisible(0.15);

  return (
    <div 
      ref={ref} 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20 py-16 group`}
    >
      {/* Image Section - Enters first */}
      <div 
        className={`w-full md:w-1/2 flex justify-center perspective-1000 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'
        }`}
      >
        <img 
          src={imageSrc} 
          alt={step} 
          className="max-w-full h-auto max-h-[350px] drop-shadow-2xl rounded-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1" 
        />
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
            Start This Step <span className="ml-2">→</span>
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
          imageSrc="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/5ddb3690-368d-4b53-bb12-b45c740213d1.png"
          onOpenBooking={onOpenBooking}
        />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent my-4"></div>

        {/* Step 4: Review & Decide */}
        <StepCard 
          step="Step 4" 
          title={<span><strong>Review & Decide</strong><br/><span className="text-gray-500 font-light text-2xl">Full Traceability</span></span>}
          description="HQ reviews, approves resolutions, and clears entries with full traceability."
          imageSrc="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/69384457-d5cd-4d78-92f5-a98d6937dd60.png"
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