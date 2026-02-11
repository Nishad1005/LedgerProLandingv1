import React, { useState, useEffect } from 'react';
import { Layers, FileText, Calendar, Users, Clock, DollarSign, Activity, Zap, ArrowRight, TrendingDown } from 'lucide-react';
import { cn } from '../lib/utils';

// Animated Counter Component
const AnimatedNumber = ({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let timer = setInterval(() => {
      start += (end - start) / 10;
      if (Math.abs(end - start) < 1) {
        start = end;
        clearInterval(timer);
      }
      setDisplayValue(start);
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return <>{prefix}{Math.floor(displayValue).toLocaleString()}{suffix}</>;
};

const Estimator: React.FC = () => {
  // State for Inputs - Logic preserved exactly
  const [pagesPerDoc, setPagesPerDoc] = useState(1);
  const [linesPerPage, setLinesPerPage] = useState(1);
  const [docsPerDay, setDocsPerDay] = useState(22);
  const [teamSize, setTeamSize] = useState(1);

  // Constants - Preserved exactly
  const PER_OPERATOR_RATE = 750;
  const BASE_MONTHLY_FEE = 950;
  const SETUP_FEE = 1200;
  const WORKING_DAYS = 22;
  const LINES_PER_PERSON_PER_DAY = 147; 

  // --- Calculations --- Preserved exactly
  const linesPerDay = docsPerDay * pagesPerDoc * linesPerPage;
  const docsPerMonth = docsPerDay * WORKING_DAYS;
  const linesPerMonth = linesPerDay * WORKING_DAYS;

  const teamDailyCapacity = teamSize * LINES_PER_PERSON_PER_DAY;
  const processingDays = teamDailyCapacity > 0 ? linesPerDay / teamDailyCapacity : 0;
  const totalMonthlyCost = (teamSize * PER_OPERATOR_RATE) + BASE_MONTHLY_FEE + SETUP_FEE;
  const costPerLine = linesPerMonth > 0 ? totalMonthlyCost / linesPerMonth : 0;

  // Custom slider component for reuse
  const CustomSlider = ({ 
    label, icon: Icon, value, min, max, step, onChange, unit 
  }: { 
    label: string, icon: any, value: number, min: number, max: number, step: number, onChange: (val: number) => void, unit?: string 
  }) => {
    const percentage = ((value - min) * 100) / (max - min);
    
    return (
      <div className="group relative bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-brand/30 transition-all duration-300">
         <div className="flex justify-between items-start mb-4">
            <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
               <div className="p-1.5 rounded-lg bg-brand/10 text-brand">
                  <Icon size={16} />
               </div>
               {label}
            </label>
            <div className="text-xl font-bold text-white tracking-tight">
               {value.toLocaleString()} <span className="text-xs text-gray-500 font-normal ml-0.5">{unit}</span>
            </div>
         </div>
         
         <div className="relative h-6 flex items-center">
            <input 
              type="range" min={min} max={max} step={step}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="absolute w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer z-20 opacity-0"
            />
            {/* Custom Track */}
            <div className="absolute w-full h-1.5 bg-gray-800 rounded-full overflow-hidden z-10">
               <div 
                 className="h-full bg-gradient-to-r from-brandDark to-brand transition-all duration-100 ease-out"
                 style={{ width: `${percentage}%` }}
               ></div>
            </div>
            {/* Custom Thumb */}
            <div 
               className="absolute w-5 h-5 bg-white rounded-full shadow-[0_0_15px_rgba(98,57,236,0.5)] border-2 border-brand z-10 pointer-events-none transition-all duration-100 ease-out transform -translate-x-1/2"
               style={{ left: `${percentage}%` }}
            ></div>
         </div>
      </div>
    );
  };

  return (
    <section id="estimator" className="relative py-24 bg-[#0B0C15] overflow-hidden scroll-mt-24">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brandLight text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Zap size={14} className="fill-current" /> Cost Estimator
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-white">ROI</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
              Adjust the sliders to match your current document volume and see how LedgerPRO optimizes costs.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Panel: Inputs (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
               <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center text-brandLight">
                        <Layers size={20} />
                     </div>
                     Volume Parameters
                  </h3>
                  
                  <div className="space-y-4">
                     <CustomSlider 
                        label="Pages per Document" 
                        icon={FileText} 
                        value={pagesPerDoc} 
                        min={1} max={50} step={1} 
                        onChange={setPagesPerDoc} 
                     />
                     <CustomSlider 
                        label="Lines per Page" 
                        icon={Activity} 
                        value={linesPerPage} 
                        min={1} max={100} step={1} 
                        onChange={setLinesPerPage} 
                     />
                     <CustomSlider 
                        label="Documents per Day" 
                        icon={Calendar} 
                        value={docsPerDay} 
                        min={1} max={5000} step={10} 
                        onChange={setDocsPerDay} 
                     />
                  </div>
               </div>

               {/* Team Size Slider */}
               <div className="bg-gradient-to-br from-brand/10 to-brandDark/5 backdrop-blur-md border border-brand/20 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                     <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                           <Users size={20} />
                        </div>
                        Resource Allocation
                     </h3>
                     <div className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-brand/20 border border-brand/30 text-brandLight text-xs font-bold uppercase tracking-wider">
                        Active Operators
                     </div>
                  </div>

                  <div className="relative z-10">
                      <div className="flex items-end justify-between mb-4">
                         <span className="text-gray-400 text-sm">Team Size</span>
                         <span className="text-3xl font-bold text-white">{teamSize} <span className="text-sm font-normal text-gray-400">FTEs</span></span>
                      </div>
                      <input 
                         type="range" min="1" max="50" step={1}
                         value={teamSize}
                         onChange={(e) => setTeamSize(Number(e.target.value))}
                         className="w-full h-3 rounded-full appearance-none cursor-pointer bg-white/10 bg-gradient-to-r from-blue-500 to-brand bg-no-repeat transition-all
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:[&::-webkit-slider-thumb]:scale-110"
                         style={{ backgroundSize: `${((teamSize - 1) * 100) / 49}% 100%` }}
                      />
                      <p className="mt-3 text-xs text-gray-500">
                         Adjusting team size impacts daily processing capacity and total cost.
                      </p>
                  </div>
               </div>
            </div>

            {/* Right Panel: Visualization & Results (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
               
               {/* Visual Stats Block */}
               <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
                   {/* Background Graph Graphic */}
                   <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
                      <div className="flex items-end justify-between px-8 h-full gap-2">
                         {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-full bg-white rounded-t-sm" style={{ height: `${20 + Math.random() * 60}%`, opacity: 0.3 + (i/20) }}></div>
                         ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 gap-6 relative z-10">
                      
                      {/* Stat 1 */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-4">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-800 rounded-lg text-gray-400"><Activity size={18}/></div>
                            <div>
                               <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Daily Load</div>
                               <div className="text-white font-medium text-sm">Lines to process</div>
                            </div>
                         </div>
                         <div className="text-2xl font-bold text-white">
                            <AnimatedNumber value={linesPerDay} />
                         </div>
                      </div>

                      {/* Stat 2 */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-4">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-800 rounded-lg text-gray-400"><Calendar size={18}/></div>
                            <div>
                               <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Monthly Load</div>
                               <div className="text-white font-medium text-sm">Total lines</div>
                            </div>
                         </div>
                         <div className="text-2xl font-bold text-white">
                            <AnimatedNumber value={linesPerMonth} />
                         </div>
                      </div>

                      {/* Processing Speed Indicator */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                         <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400 font-bold uppercase">Processing Velocity</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${processingDays <= 1 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                               {processingDays <= 1 ? 'OPTIMAL' : 'DELAYED'}
                            </span>
                         </div>
                         <div className="text-3xl font-bold text-white mb-1">
                            {processingDays < 0.01 && processingDays > 0 ? '< 0.01' : processingDays.toFixed(2)}
                            <span className="text-sm font-normal text-gray-500 ml-1">days backlog</span>
                         </div>
                         <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${processingDays <= 1 ? 'bg-green-500' : 'bg-yellow-500'}`}
                              style={{ width: `${Math.min((1/processingDays) * 100, 100)}%` }}
                            ></div>
                         </div>
                      </div>

                   </div>
               </div>

               {/* Cost Result Card */}
               <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                      <DollarSign size={80} className="text-black transform rotate-12" />
                   </div>
                   
                   <div className="relative z-10">
                      <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Estimated Monthly Cost</h4>
                      <div className="flex items-baseline gap-1 mb-4">
                         <span className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            $<AnimatedNumber value={totalMonthlyCost} />
                         </span>
                         <span className="text-gray-500 font-medium">/mo</span>
                      </div>
                      
                      <div className="space-y-3">
                         <div className="flex justify-between items-center text-sm py-2 border-t border-gray-200">
                             <span className="text-gray-600 flex items-center gap-2"><TrendingDown size={14} className="text-green-600"/> Cost per line</span>
                             <span className="font-bold text-gray-800">${costPerLine.toFixed(3)}</span>
                         </div>
                         <div className="flex justify-between items-center text-sm py-2 border-t border-gray-200">
                             <span className="text-gray-600">One-time Setup</span>
                             <span className="font-bold text-gray-800">${SETUP_FEE.toLocaleString()}</span>
                         </div>
                      </div>

                      <div className="mt-6">
                         <button className="w-full py-3 bg-brand hover:bg-brandDark text-white font-bold rounded-xl shadow-lg shadow-brand/20 transition-all flex items-center justify-center gap-2 group">
                            Lock In This Rate <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                      </div>
                   </div>
               </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Estimator;