import React from 'react';
import { ScanSearch, GitBranch, LayoutDashboard, FileCheck, ShieldCheck } from 'lucide-react';

const Deliverables: React.FC = () => {
  const features = [
    {
      icon: ScanSearch,
      title: "Discrepancy Detection",
      description: "Identify issues right at the entry level before they become accounting errors.",
      color: "text-brand"
    },
    {
      icon: GitBranch,
      title: "Structured Workflow",
      description: "A clear query and review process that keeps teams aligned and accountable.",
      color: "text-blue-500"
    },
    {
      icon: LayoutDashboard,
      title: "Centralized Visibility",
      description: "Real-time oversight for HQ teams to monitor progress and status instantly.",
      color: "text-purple-500"
    },
    {
      icon: FileCheck,
      title: "Traceable Audit",
      description: "Clear documentation trail ensuring every entry is defensible and audit-ready.",
      color: "text-green-500"
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px]"></div>
       </div>

      <div className="max-w-[1170px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
             <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
               What Ledger Pro Delivers
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-textMain leading-tight">
             What Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandLight">Actually Gets</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-gray-100">
                        <feature.icon className={feature.color} size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-textMain mb-3">{feature.title}</h3>
                    <p className="text-textLight leading-relaxed text-sm">
                       {feature.description}
                    </p>
                </div>
            ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#1C1041] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl group">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 group-hover:bg-brand/30 transition-colors duration-500"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] -translate-x-1/2 translate-y-1/2"></div>
             
             {/* Pattern Overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

             <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="bg-white/10 p-3 rounded-full mb-2 backdrop-blur-sm border border-white/10">
                   <ShieldCheck className="text-green-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug max-w-4xl tracking-tight">
                   No automation claims. No hidden controls.
                   <br className="hidden md:block" />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200 mt-2 block">Just defensible visibility.</span>
                </h3>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Deliverables;