import React, { useState } from 'react';
import { Crown, TrendingUp, Search, FileText, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const DecisionMakers: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const roles = [
    {
      id: 0,
      title: "CEO",
      subtitle: "Strategic Confidence",
      description: "Know your controls are active without getting in the weeds. See the health of your organization at a glance.",
      icon: Crown,
      color: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      id: 1,
      title: "CFO",
      subtitle: "Financial Integrity",
      description: "Eliminate surprises. Ensure every ledger entry is backed by evidence before it hits the books.",
      icon: TrendingUp,
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Auditors",
      subtitle: "Instant Traceability",
      description: "Stop the treasure hunt. Access a complete, defensible digital trail for any transaction instantly.",
      icon: Search,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 3,
      title: "Operations",
      subtitle: "Process Clarity",
      description: "Clear responsibilities. No more finger-pointing. Just a smooth, documented workflow from day one.",
      icon: FileText,
      color: "text-orange-600",
      bg: "bg-orange-100",
      border: "border-orange-200",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  // Render the abstract UI for the right side
  const renderDashboardPreview = () => {
    switch(activeTab) {
      case 0: // CEO View
        return (
          <div className="flex flex-col h-full animate-fade-in-up">
             {/* Header */}
             <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Organization Health</div>
                  <div className="text-2xl font-bold text-gray-800">System Optimal</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 ring-4 ring-green-50/50">
                  <ShieldCheck size={20} />
                </div>
             </div>
             
             {/* Content */}
             <div className="space-y-6">
                <div className="bg-gray-50/80 rounded-xl p-5 border border-gray-100">
                  <div className="flex justify-between items-end mb-2">
                     <span className="font-semibold text-gray-600 text-sm">Audit Readiness Score</span>
                     <span className="font-bold text-2xl text-purple-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                     <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[98%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="text-gray-400 text-xs font-bold uppercase mb-2">Risks</div>
                      <div className="text-lg font-bold text-gray-800 flex items-center gap-2">
                         0 Critical <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      </div>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="text-gray-400 text-xs font-bold uppercase mb-2">Pending</div>
                      <div className="text-lg font-bold text-gray-800">12 Items</div>
                   </div>
                </div>
             </div>
          </div>
        );
      case 1: // CFO View
        return (
           <div className="flex flex-col h-full animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                 <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Approval Queue</div>
                 <div className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full">5 ACTIONS NEEDED</div>
              </div>
              
              <div className="space-y-3">
                 {[1,2,3].map((i) => (
                    <div key={i} className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${i===1 ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400'}`}>
                          {i===1 ? <AlertCircle size={18}/> : <CheckCircle2 size={18}/>}
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center mb-1">
                             <div className="h-2.5 w-24 bg-gray-200 rounded-full group-hover:bg-blue-100 transition-colors"></div>
                             <div className="text-xs font-bold text-gray-600">$2,450.00</div>
                          </div>
                          <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="mt-auto pt-4">
                 <div className="w-full py-3 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center text-xs font-semibold text-gray-400">
                    + 14 Verified Transactions Today
                 </div>
              </div>
           </div>
        );
      case 2: // Auditor View
         return (
            <div className="flex flex-col h-full relative overflow-hidden animate-fade-in-up">
               <div className="absolute top-8 bottom-0 left-[27px] w-0.5 bg-gray-100 z-0"></div>
               
               <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Transaction #INV-2024-001</div>
                  <Search size={16} className="text-gray-400"/>
               </div>

               <div className="space-y-6 relative z-10">
                  {/* Timeline Item 1 */}
                  <div className="flex gap-4">
                     <div className="w-14 text-right pt-1 flex-shrink-0">
                        <div className="text-[10px] font-bold text-gray-500">10:42 AM</div>
                     </div>
                     <div className="relative">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-white shadow-sm"></div>
                     </div>
                     <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex-1 -mt-2">
                        <div className="text-xs font-bold text-gray-800 mb-0.5">Approved & Posted</div>
                        <div className="text-[10px] text-gray-500">User: Admin • IP: 192.168.1.1</div>
                     </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="flex gap-4">
                     <div className="w-14 text-right pt-1 flex-shrink-0">
                        <div className="text-[10px] font-bold text-gray-400">09:15 AM</div>
                     </div>
                     <div className="relative">
                        <div className="w-3.5 h-3.5 rounded-full bg-gray-200 ring-4 ring-white"></div>
                     </div>
                     <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex-1 -mt-2 opacity-75">
                        <div className="text-xs font-bold text-gray-600 mb-0.5">Discrepancy Resolved</div>
                        <div className="text-[10px] text-gray-400">Missing invoice attached by Operations</div>
                     </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="flex gap-4">
                     <div className="w-14 text-right pt-1 flex-shrink-0">
                        <div className="text-[10px] font-bold text-gray-400">08:30 AM</div>
                     </div>
                     <div className="relative">
                        <div className="w-3.5 h-3.5 rounded-full bg-gray-200 ring-4 ring-white"></div>
                     </div>
                     <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex-1 -mt-2 opacity-50">
                        <div className="text-xs font-bold text-gray-600 mb-0.5">Entry Created</div>
                     </div>
                  </div>
               </div>
            </div>
         );
      case 3: // Operations View
         return (
            <div className="flex flex-col h-full animate-fade-in-up">
                <div className="flex items-center justify-between mb-6">
                   <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Daily Closing Checklist</div>
                   <div className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100">IN PROGRESS</div>
                </div>
                
                <div className="space-y-3">
                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 opacity-60">
                      <div className="w-5 h-5 rounded border bg-green-500 border-green-500 text-white flex items-center justify-center"><CheckCircle2 size={12}/></div>
                      <span className="text-gray-500 text-sm line-through decoration-gray-400">Upload Daily Registers</span>
                   </div>
                   
                   <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 opacity-60">
                      <div className="w-5 h-5 rounded border bg-green-500 border-green-500 text-white flex items-center justify-center"><CheckCircle2 size={12}/></div>
                      <span className="text-gray-500 text-sm line-through decoration-gray-400">Scan Vendor Invoices</span>
                   </div>
                   
                   <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-l-orange-500 shadow-sm border border-gray-100">
                      <div className="w-5 h-5 rounded border-2 border-orange-500 bg-white"></div>
                      <span className="text-gray-800 font-semibold text-sm">Resolve Missing Reference #402</span>
                   </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                      <div className="w-5 h-5 rounded border-2 border-gray-200 bg-white"></div>
                      <span className="text-gray-400 text-sm font-medium">Generate EOD Report</span>
                   </div>
                </div>
            </div>
         )
      default: return null;
    }
  }

  return (
    <section className="py-32 bg-[#F8F9FC] relative overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
           <div className="inline-block mb-4">
              <span className="bg-white border border-slate-200 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Tailored Experience
              </span>
           </div>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textMain mb-6 leading-tight tracking-tight">
             Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandLight">Decision-Makers</span>
           </h2>
           <p className="text-xl text-textLight leading-relaxed">
             LedgerPRO isn't one-size-fits-all. It adapts to give every stakeholder the specific visibility and control they need to succeed.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
           
           {/* Left Side: Navigation Tabs */}
           <div className="w-full lg:w-5/12 flex flex-col gap-4">
              {roles.map((role, index) => (
                 <button 
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                       "group relative w-full text-left p-6 rounded-2xl transition-all duration-300 border",
                       activeTab === index 
                         ? "bg-white border-brand/10 shadow-[0_10px_40px_-10px_rgba(98,57,236,0.1)] scale-[1.02]" 
                         : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-100"
                    )}
                 >
                    {/* Active Indicator Line */}
                    <div className={cn(
                       "absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300",
                       activeTab === index ? `bg-gradient-to-b ${role.gradient}` : "bg-transparent"
                    )}></div>

                    <div className="flex items-start gap-5 pl-4">
                       <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm",
                          activeTab === index ? `${role.bg} ${role.color}` : "bg-white border border-gray-100 text-gray-400 group-hover:text-gray-600"
                       )}>
                          <role.icon size={24} />
                       </div>
                       <div>
                          <h3 className={cn(
                             "text-xl font-bold mb-1 transition-colors",
                             activeTab === index ? "text-textMain" : "text-gray-500 group-hover:text-gray-700"
                          )}>
                             {role.title}
                          </h3>
                          <div className={cn(
                             "text-sm font-medium mb-2 uppercase tracking-wide",
                             activeTab === index ? role.color : "text-gray-400"
                          )}>
                             {role.subtitle}
                          </div>
                          <p className={cn(
                             "text-sm leading-relaxed transition-opacity",
                             activeTab === index ? "text-gray-600 opacity-100" : "text-gray-400 opacity-0 h-0 overflow-hidden"
                          )}>
                             {role.description}
                          </p>
                       </div>
                       
                       {/* Arrow indicator for active state */}
                       <div className={cn(
                          "ml-auto self-center transition-all duration-300",
                          activeTab === index ? "opacity-100 translate-x-0 text-brand" : "opacity-0 -translate-x-4"
                       )}>
                          <ArrowRight size={20} />
                       </div>
                    </div>
                 </button>
              ))}
           </div>

           {/* Right Side: Dashboard Visualization */}
           <div className="w-full lg:w-7/12 sticky top-24">
              <div className="relative">
                 {/* Glow effect behind the dashboard */}
                 <div className={cn(
                    "absolute -inset-4 rounded-[2.5rem] blur-2xl transition-all duration-700 opacity-40",
                    `bg-gradient-to-r ${roles[activeTab].gradient}`
                 )}></div>

                 {/* The Dashboard Card Container */}
                 <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/40 shadow-2xl p-2 md:p-3 overflow-hidden">
                    
                    {/* Inner bezel */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-[1.5rem] border border-gray-100 p-8 min-h-[500px] flex flex-col relative overflow-hidden">
                        
                        {/* Background pattern inside the screen */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>
                        
                        {/* Render the specific abstract UI based on active tab */}
                        <div className="relative z-10 h-full">
                           {renderDashboardPreview()}
                        </div>

                        {/* Bottom decorative bar */}
                        <div className="mt-auto pt-8 flex justify-center opacity-30">
                           <div className="w-32 h-1.5 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                 </div>
                 
                 {/* Floating badge */}
                 <div className="absolute -right-6 top-10 bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-50 animate-float hidden md:block">
                     <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg bg-gray-50", roles[activeTab].color)}>
                           {React.createElement(roles[activeTab].icon, { size: 20 })}
                        </div>
                        <div>
                           <div className="text-[10px] font-bold text-gray-400 uppercase">Viewing as</div>
                           <div className="text-sm font-bold text-gray-800">{roles[activeTab].title}</div>
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

export default DecisionMakers;