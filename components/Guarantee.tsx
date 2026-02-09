import React from 'react';
import { Layers, ShieldCheck, Users, Eye, CheckCircle2, BarChart3 } from 'lucide-react';

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
             {/* Decorative Background for Graphic */}
             <div className="absolute inset-0 bg-brandLight/20 blur-[80px] rounded-full scale-75"></div>

             <div className="relative w-full max-w-[480px] h-[600px] flex flex-col justify-center">
                
                {/* Visual Connection Lines */}
                <div className="absolute left-8 top-20 bottom-20 w-px border-l-2 border-dashed border-white/10 z-0 hidden md:block"></div>

                {/* Card 1: Leadership (Top) */}
                <div className="relative z-30 transform hover:-translate-y-2 transition-transform duration-300 mb-[-40px] ml-4 md:ml-12">
                   <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-yellow-400/20 rounded-lg text-yellow-300"><Eye size={20} /></div>
                         <div>
                            <div className="text-white font-bold">Leadership Visibility</div>
                            <div className="text-white/50 text-xs">Strategic Oversight</div>
                         </div>
                      </div>
                      <div className="h-24 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden flex items-end px-4 pb-2 gap-2">
                          <div className="w-1/4 h-[40%] bg-white/10 rounded-t"></div>
                          <div className="w-1/4 h-[60%] bg-white/10 rounded-t"></div>
                          <div className="w-1/4 h-[50%] bg-white/10 rounded-t"></div>
                          <div className="w-1/4 h-[80%] bg-green-400 rounded-t shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
                      </div>
                   </div>
                </div>

                {/* Card 2: LedgerPRO Layer (Middle) */}
                <div className="relative z-20 transform scale-[1.05] hover:scale-[1.07] transition-transform duration-300 mb-[-40px]">
                   <div className="bg-[#1C1041]/90 backdrop-blur-xl border border-green-400/50 p-6 rounded-2xl shadow-[0_0_60px_rgba(74,222,128,0.15)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-green-400"></div>
                      <div className="flex justify-between items-start mb-6">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-400/20 rounded-lg text-green-400"><Layers size={20} /></div>
                            <div>
                               <div className="text-white font-bold text-lg">LedgerPRO Layer</div>
                               <div className="text-green-400 text-xs font-bold uppercase tracking-wider">Audit & Scrutiny</div>
                            </div>
                         </div>
                         <div className="bg-green-500 text-[#1C1041] text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                         <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                            <div className="text-white/40 text-xs mb-1">Evidence Check</div>
                            <div className="text-white font-bold flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400"/> Verified</div>
                         </div>
                         <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                            <div className="text-white/40 text-xs mb-1">Data Integrity</div>
                            <div className="text-white font-bold">100%</div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Card 3: Existing Systems (Bottom) */}
                <div className="relative z-10 transform hover:translate-y-2 transition-transform duration-300 ml-4 md:ml-12 opacity-80">
                   <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="p-2 bg-white/10 rounded-lg text-white/60"><BarChart3 size={20} /></div>
                         <div>
                            <div className="text-white/80 font-bold">Your Existing Systems</div>
                            <div className="text-white/40 text-xs">ERP / Accounting Software</div>
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                         <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
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