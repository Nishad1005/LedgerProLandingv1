import React from 'react';
import { Layers, ShieldCheck, Users, Eye, CheckCircle2, BarChart3, Database, FileSpreadsheet, Lock, Search } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="bg-brand py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 bg-white w-[600px] h-[600px] rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 bg-white w-[600px] h-[600px] rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[1170px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
             <div className="inline-block mb-6">
               <span className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">
                 What Ledger Pro Is
               </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
               Ledger Pro Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">Not An Accounting Software</span>
             </h2>

             <div className="space-y-8">
                {/* Point 1 */}
                <div className="flex gap-5 group">
                   <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10 shadow-lg">
                      <Layers className="text-green-300" size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">Audit-Readiness Layer</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg font-light">
                        A scrutiny layer that runs alongside your existing systems — <span className="text-white font-medium">no rip-and-replace</span> required.
                      </p>
                   </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-5 group">
                   <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10 shadow-lg">
                      <ShieldCheck className="text-blue-300" size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">Accuracy at Source</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg font-light">
                        We sit between entry and posting, focusing on <span className="text-white font-medium">accuracy and evidence</span> at the point where records are created.
                      </p>
                   </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-5 group">
                   <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10 shadow-lg">
                      <Users className="text-purple-300" size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">Empowering Teams</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg font-light">
                        Ledger Pro <span className="text-white font-medium">does not take control away</span> from your teams. It acts as a powerful support system.
                      </p>
                   </div>
                </div>

                 {/* Point 4 */}
                 <div className="flex gap-5 group">
                   <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10 shadow-lg">
                      <Eye className="text-yellow-300" size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-2">Leadership Visibility</h3>
                      <p className="text-blue-100/80 leading-relaxed text-lg font-light">
                        It gives leadership the visibility to <span className="text-white font-medium">review, question, and decide</span> with confidence.
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Visual - Layer Stack Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
             {/* Glow Behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandLight/30 rounded-full blur-[100px] pointer-events-none"></div>

             <div className="relative w-full max-w-[450px] flex flex-col items-center gap-6 perspective-1000">
                
                {/* 1. TOP LAYER: Leadership */}
                <div className="relative z-30 w-full transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><Eye size={60} className="text-white"/></div>
                        
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-yellow-400/20 rounded-lg text-yellow-300 border border-yellow-400/30">
                                    <BarChart3 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Leadership View</h4>
                                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider">Strategic Oversight</p>
                                </div>
                            </div>
                            <div className="bg-green-500/20 text-green-300 text-[10px] font-bold px-2 py-1 rounded border border-green-500/30 flex items-center gap-1">
                                <CheckCircle2 size={12} /> READY
                            </div>
                        </div>
                        
                        {/* Abstract Chart */}
                        <div className="flex items-end justify-between h-16 gap-2 px-1">
                           <div className="w-full bg-white/10 rounded-t h-[40%]"></div>
                           <div className="w-full bg-white/10 rounded-t h-[60%]"></div>
                           <div className="w-full bg-white/10 rounded-t h-[30%]"></div>
                           <div className="w-full bg-gradient-to-t from-green-400 to-emerald-300 rounded-t h-[85%] shadow-[0_0_15px_rgba(52,211,153,0.5)] relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-green-500 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">Verified</div>
                           </div>
                           <div className="w-full bg-white/10 rounded-t h-[50%]"></div>
                        </div>
                    </div>
                </div>

                {/* Connector Lines */}
                <div className="h-8 w-full flex justify-center relative">
                    <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-green-400/50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full blur-[4px] animate-pulse"></div>
                </div>

                {/* 2. MIDDLE LAYER: LedgerPRO (The Focus) */}
                <div className="relative z-20 w-full transform scale-105 transition-all duration-500 hover:scale-[1.08]">
                    {/* Ring Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 rounded-2xl opacity-70 blur-sm"></div>
                    
                    <div className="bg-[#1C1041] p-6 rounded-2xl border border-white/10 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                                        <Layers size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl tracking-tight">LedgerPRO</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Active Scrutiny</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Processing Visual */}
                            <div className="space-y-3">
                                <div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center justify-between group hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Search size={16} className="text-blue-300" />
                                        <span className="text-white/80 text-sm">Discrepancy Check</span>
                                    </div>
                                    <CheckCircle2 size={16} className="text-green-400" />
                                </div>
                                <div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center justify-between group hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Lock size={16} className="text-purple-300" />
                                        <span className="text-white/80 text-sm">Evidence Validation</span>
                                    </div>
                                    <CheckCircle2 size={16} className="text-green-400" />
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 w-full animate-[shimmer_2s_infinite]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Connector Lines */}
                <div className="h-8 w-full flex justify-center relative">
                    <div className="w-0.5 h-full bg-gradient-to-b from-green-400/50 to-white/20"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
                </div>

                {/* 3. BOTTOM LAYER: Existing Systems */}
                <div className="relative z-10 w-full transform transition-all duration-500 hover:translate-y-1 hover:scale-[1.02] opacity-80">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-white/40">
                                <Database size={24} />
                            </div>
                            <div>
                                <h4 className="text-white/90 font-bold">Existing ERP Core</h4>
                                <p className="text-white/40 text-xs">Accounting Software / Data Entry</p>
                            </div>
                        </div>
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white/20"><FileSpreadsheet size={14}/></div>
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white/20"><Database size={14}/></div>
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

export default Guarantee;