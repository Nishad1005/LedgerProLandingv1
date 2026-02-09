import React from 'react';

const StatBar: React.FC<{ label: string; value: string; width: string; colorClass?: string }> = ({ label, value, width, colorClass = "bg-gradient-to-r from-brand to-brandLight" }) => (
  <div className="mb-8 group">
    <div className="flex justify-between items-end mb-2">
      <span className="text-xl font-semibold text-textMain group-hover:text-brand transition-colors">{label}</span>
      <span className="text-xl font-bold text-brand">{value}</span>
    </div>
    <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden shadow-inner">
      <div className={`${colorClass} h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(98,57,236,0.5)]`} style={{ width }}></div>
    </div>
  </div>
);

const Differences: React.FC = () => {
  return (
    <section id="overview" className="bg-white py-24 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] relative z-10 mt-[-50px]">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Video Column */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl bg-gray-900">
                  <iframe 
                    src="https://share.synthesia.io/embeds/videos/8f5c045a-7e30-459c-92f7-280918a9ae9c" 
                    loading="lazy" 
                    title="Synthesia video player"
                    allowFullScreen 
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="bg-brand/10 text-brand px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-textMain leading-tight">
              What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandLight">Different</span>
            </h2>
            <div className="border-l-4 border-brand/30 pl-6 py-1 mb-10">
              <p className="text-textLight text-lg leading-relaxed">
                Businesses should run efficiently—no one should have to waste hours searching for a single piece of paper when they could be focusing on more important tasks.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <StatBar label="Sales Efficiency" value="50% Increase" width="50%" />
              <StatBar label="Profit Margins" value="40% Growth" width="40%" />
              <StatBar label="Digitization Success" value="100%" width="100%" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differences;