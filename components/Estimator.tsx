import React, { useState } from 'react';
import { Layers, FileText, Calendar, Users, Clock, DollarSign, Activity, Zap } from 'lucide-react';

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

  // Modern slider style helper
  const getSliderStyle = (value: number, min: number, max: number) => {
    const percentage = ((value - min) * 100) / (max - min);
    return {
      backgroundSize: `${percentage}% 100%`,
    };
  };

  return (
    <section id="estimator" className="relative py-24 bg-[#0B0C15] overflow-hidden scroll-mt-24">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brandLight text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Zap size={14} className="fill-current" /> ROI Calculator
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-white">Savings</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
              Discover how much time and resources you can reclaim by optimizing your document processing with LedgerPRO.
            </p>
        </div>

        {/* Main Dashboard Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10 flex flex-col font-sans">
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Panel: Inputs */}
            <div className="flex-1 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
               <h3 className="flex items-center gap-3 text-xl font-bold text-slate-800 mb-10">
                  <div className="p-2 bg-brand/10 rounded-lg text-brand">
                    <Layers size={20} />
                  </div>
                  Workload Parameters
               </h3>

               <div className="space-y-12">
                  
                  {/* Pages Per Doc Slider */}
                  <div className="group">
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-slate-500 font-medium flex items-center gap-2">
                        <FileText size={16} className="text-slate-400"/> Pages per Document
                      </label>
                      <div className="w-16 h-8 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-md font-bold text-slate-700">
                        {pagesPerDoc}
                      </div>
                    </div>
                    <input 
                      type="range" min="1" max="50" step="1"
                      value={pagesPerDoc}
                      onChange={(e) => setPagesPerDoc(Number(e.target.value))}
                      style={getSliderStyle(pagesPerDoc, 1, 50)}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer bg-slate-100 bg-gradient-to-r from-brand to-brandLight bg-no-repeat transition-all
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                  </div>

                  {/* Lines Per Page Slider */}
                  <div className="group">
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-slate-500 font-medium flex items-center gap-2">
                        <Activity size={16} className="text-slate-400"/> Lines per Page
                      </label>
                      <div className="w-16 h-8 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-md font-bold text-slate-700">
                        {linesPerPage}
                      </div>
                    </div>
                    <input 
                      type="range" min="1" max="100" step="1"
                      value={linesPerPage}
                      onChange={(e) => setLinesPerPage(Number(e.target.value))}
                      style={getSliderStyle(linesPerPage, 1, 100)}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer bg-slate-100 bg-gradient-to-r from-brand to-brandLight bg-no-repeat transition-all
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                  </div>

                  {/* Docs Per Day Slider */}
                  <div className="group">
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-slate-500 font-medium flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400"/> Documents per Day
                      </label>
                      <div className="w-20 h-8 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-md font-bold text-slate-700 px-2">
                        {docsPerDay}
                      </div>
                    </div>
                    <input 
                      type="range" min="1" max="5000" step="10"
                      value={docsPerDay}
                      onChange={(e) => setDocsPerDay(Number(e.target.value))}
                      style={getSliderStyle(docsPerDay, 1, 5000)}
                      className="w-full h-3 rounded-full appearance-none cursor-pointer bg-slate-100 bg-gradient-to-r from-brand to-brandLight bg-no-repeat transition-all
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[4px] [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110"
                    />
                  </div>

               </div>
            </div>

            {/* Right Panel: Intermediate Stats */}
            <div className="lg:w-[340px] bg-slate-50/80 p-8 md:p-12 flex flex-col justify-center gap-6">
                
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <Activity size={14} /> Daily Volume
                    </div>
                    <div className="text-3xl font-light text-slate-800">{linesPerDay.toLocaleString()}</div>
                    <div className="text-sm text-slate-500 font-medium mt-1">Lines processed per day</div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <Calendar size={14} /> Monthly Volume
                    </div>
                    <div className="text-3xl font-light text-slate-800">{docsPerMonth.toLocaleString()}</div>
                    <div className="text-sm text-slate-500 font-medium mt-1">Documents (22 working days)</div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <Layers size={14} /> Monthly Load
                    </div>
                    <div className="text-3xl font-light text-slate-800">{linesPerMonth.toLocaleString()}</div>
                    <div className="text-sm text-slate-500 font-medium mt-1">Total lines per month</div>
                </div>

            </div>
          </div>

          {/* Bottom Section: Team & Results (Dark Mode Contrast) */}
          <div className="bg-[#1C1041] p-8 md:p-12 text-white relative overflow-hidden">
             {/* Decorative Background for Bottom Section */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

             <div className="flex flex-col xl:flex-row gap-12 items-end relative z-10">
                
                {/* Team Control */}
                <div className="flex-1 w-full">
                    <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-3">
                        <Users className="text-brandLight" size={24} />
                        Build Remote Team
                    </h3>
                    <p className="text-white/60 text-sm mb-8 max-w-lg">
                      Adjust the number of operators to see how it impacts processing speed and total cost of ownership.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-6">
                             <div className="flex flex-col items-center">
                                <span className="text-4xl font-light text-white leading-none">{teamSize}</span>
                                <span className="text-[10px] uppercase tracking-wider text-white/50 mt-1 font-bold">Operators</span>
                             </div>
                             <div className="flex-1">
                                <input 
                                    type="range" min="1" max="50" step="1"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(Number(e.target.value))}
                                    style={getSliderStyle(teamSize, 1, 50)}
                                    className="w-full h-3 rounded-full appearance-none cursor-pointer bg-white/10 bg-gradient-to-r from-brandLight to-white bg-no-repeat transition-all
                                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:[&::-webkit-slider-thumb]:scale-110"
                                />
                             </div>
                        </div>
                    </div>
                </div>

                {/* Final Metrics Cards */}
                <div className="flex flex-col sm:flex-row gap-6 w-full xl:w-auto">
                    
                    {/* Time Card */}
                    <div className="flex-1 min-w-[220px] bg-gradient-to-br from-brand to-brandDark p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="relative z-10">
                             <div className="flex items-center gap-2 text-brandLight text-xs font-bold uppercase tracking-wider mb-2">
                                <Clock size={14} /> Processing Time
                             </div>
                             <div className="text-4xl font-bold text-white mb-1">
                                {processingDays < 0.01 && processingDays > 0 ? '< 0.01' : processingDays.toFixed(2)}
                                <span className="text-lg font-normal text-white/60 ml-1">days</span>
                             </div>
                             <div className="w-full h-1 bg-black/20 rounded-full mt-3 overflow-hidden">
                                <div className="h-full bg-white/40 w-3/4 rounded-full"></div>
                             </div>
                        </div>
                    </div>

                    {/* Cost Card */}
                    <div className="flex-1 min-w-[260px] bg-white text-slate-900 p-6 rounded-2xl shadow-xl border border-white/20 relative">
                        <div className="relative z-10">
                             <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                                <DollarSign size={14} /> Cost of Ownership
                             </div>
                             <div className="text-4xl font-bold text-slate-800 mb-1">
                                ${totalMonthlyCost.toLocaleString()}
                             </div>
                             <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500">
                                <span>Setup: ${SETUP_FEE.toLocaleString()}</span>
                                <span>${costPerLine.toFixed(2)} / line</span>
                             </div>
                        </div>
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