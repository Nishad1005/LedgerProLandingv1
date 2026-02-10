import React from 'react';
import ScannerHoverCard from './ui/scanner-hover-card';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="pt-32 pb-16 px-4 md:px-0 max-w-[1170px] mx-auto min-h-[700px] flex items-center">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 w-full">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left animate-fade-in-up z-30">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg tracking-tight">
           Prevention is better than<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">Cure</span>
          </h1>
          <div className="text-white text-lg md:text-xl font-medium opacity-95 drop-shadow-md space-y-4">
            <h3 className="bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-lg border border-white/10">
              LedgerPro prevents <span className="text-green-300 font-bold">Losses</span> before they hit your books.
            </h3>
          </div>
          
          <div className="mt-6 flex justify-center md:justify-start">
            <button 
              onClick={onOpenBooking}
              className="group relative bg-white text-brand font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Schedule A Demo Call</span>
              <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>

        {/* New Interactive Scanner Graphic */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative h-[500px] animate-fade-in-up z-20" style={{ animationDelay: '0.3s' }}>
           <ScannerHoverCard />
        </div>

      </div>
    </section>
  );
};

export default Hero;