import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1170px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl text-textMain font-bold leading-tight">
            Less paper, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandLight">more peace</span>
          </h1>
          <p className="text-xl text-textLight font-light border-l-4 border-brand pl-6 italic">
            "LedgerPRO turns clutter into clicks."
          </p>
          <ul className="space-y-6">
            {[
              "Simplify your workflow with less paper",
              "Integrate with your preferred CRM or database",
              "Quickly search and access your files digitally"
            ].map((item, i) => (
               <li key={i} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                <CheckCircle className="text-brand mr-4 mt-1 flex-shrink-0" size={24} />
                <span className="text-lg text-textMain font-medium">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6">
            <button 
              onClick={() => {
                const el = document.getElementById('estimator');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(98,57,236,0.3)] hover:shadow-[0_15px_30px_rgba(98,57,236,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Estimate Your Costs
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6 relative">
          <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-50 z-0 scale-90"></div>
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/3e391290-1018-4bb9-9740-66be29d60241.png"
            alt="Digital Capture Interface"
            className="relative z-10 w-full max-w-[450px] h-auto drop-shadow-2xl rounded-2xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/670f2ddf97369ce2c4eb5b3d.png"
            alt="Smart Analysis Graphic"
            className="relative z-20 w-full max-w-[320px] h-auto mt-[-100px] ml-[120px] drop-shadow-2xl rounded-2xl animate-float border-4 border-white"
            style={{ animationDelay: '2s' }}
          />
        </div>

      </div>

      <div className="max-w-[1170px] mx-auto px-6 mt-32 flex flex-col md:flex-row-reverse items-center gap-16">
         <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl text-textMain font-bold leading-tight">
              We Create A Business <span className="text-brand">That Profits</span>
            </h1>
            <p className="text-lg text-textLight leading-relaxed">
              Efficiency isn't just about saving time; it's about unlocking revenue. By digitizing your records, you streamline operations and open doors to new opportunities.
            </p>
            <div className="mt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('estimator');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 text-brand font-bold text-xl hover:gap-4 transition-all"
              >
                Estimate Your Costs <span className="bg-brand text-white rounded-full p-1"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
              </button>
            </div>
         </div>
         <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-green-50 rounded-full blur-3xl opacity-50 scale-90"></div>
            <img 
              src="https://assets.cdn.filesafe.space/ChXZVOdsRG631UXZE2jX/media/618ea164c32e7d10e3c1089e.png" 
              alt="Profit Graphic" 
              className="relative z-10 w-full max-w-[500px] h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
         </div>
      </div>
    </section>
  );
};

export default Features;