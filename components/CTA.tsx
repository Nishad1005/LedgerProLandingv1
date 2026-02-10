import React from 'react';
import { TrendingUp, FileCheck, BarChart3, ArrowUp } from 'lucide-react';

interface CTAProps {
  onOpenBooking: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#4A2BC2] to-[#6239EC]">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1170px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Custom Graphic - Left Side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
             
             {/* The "Business Growth" Composition */}
             <div className="relative w-full max-w-[450px] aspect-square">
                
                {/* Glow Effect behind the graphic */}
                <div className="absolute inset-0 bg-white/20 blur-[80px] rounded-full transform scale-75 animate-pulse"></div>
                
                {/* Main Dashboard Card */}
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl w-full h-full flex flex-col justify-between overflow-hidden animate-float">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                     <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                     <div className="text-white/80 font-mono text-xs flex items-center gap-2">
                        <BarChart3 size={14} /> Analytics_Dashboard
                     </div>
                  </div>

                  {/* Chart Area */}
                  <div className="flex-1 flex items-end justify-between px-2 gap-2 md:gap-4 relative my-4">
                      {/* Grid lines background */}
                      <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
                          <div className="w-full h-px bg-white border-dashed"></div>
                          <div className="w-full h-px bg-white border-dashed"></div>
                          <div className="w-full h-px bg-white border-dashed"></div>
                          <div className="w-full h-px bg-white border-dashed"></div>
                      </div>

                      {/* Growing Bars */}
                      {[30, 45, 40, 60, 55, 85].map((height, i) => (
                          <div key={i} className="w-full bg-gradient-to-t from-white/10 to-white/40 rounded-t-lg relative group transition-all duration-500 hover:bg-white/60" style={{ height: `${height}%` }}>
                              {/* Animated Top Line for the last bar */}
                              {i === 5 && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full flex justify-center">
                                   <div className="bg-green-400 text-brandDark text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg animate-bounce">
                                     +85%
                                   </div>
                                </div>
                              )}
                          </div>
                      ))}
                      
                      {/* Trend Line (Simulated with SVG) */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
                         <path 
                           d="M0,70 Q40,55 80,60 T160,40 T240,45 T320,15" 
                           fill="none" 
                           stroke="#4ade80" 
                           strokeWidth="3" 
                           strokeLinecap="round"
                           className="drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                         />
                      </svg>
                  </div>

                  {/* Bottom Labels */}
                  <div className="flex justify-between text-white/40 text-xs font-mono uppercase tracking-wider">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  </div>
                </div>

                {/* Floating Widget 1: Efficiency */}
                <div className="absolute -right-4 top-8 z-20 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                          <TrendingUp size={24} />
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Growth</div>
                            <div className="text-xl font-black text-gray-800 leading-none">+127%</div>
                        </div>
                    </div>
                </div>

                {/* Floating Widget 2: Tasks Completed */}
                <div className="absolute -left-8 bottom-16 z-20 bg-[#1C1041] p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 animate-float" style={{ animationDelay: '2.5s' }}>
                    <div className="flex items-center gap-3">
                        <div className="bg-brandLight/20 p-2.5 rounded-xl text-white">
                           <FileCheck size={24} />
                        </div>
                        <div>
                            <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Digitized</div>
                            <div className="text-lg font-bold text-white leading-none">14,205 <span className="text-green-400 text-xs ml-1">▲</span></div>
                        </div>
                    </div>
                </div>

             </div>

          </div>

          {/* Text Content - Right Side */}
          <div className="w-full md:w-1/2 text-center md:text-left text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Be Audit-Ready. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">Everyday.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onOpenBooking}
                className="bg-white text-brandDark font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0 group"
              >
                Schedule A Demo Call 
                <ArrowUp className="w-5 h-5 rotate-45 transition-transform group-hover:rotate-90" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;