import React from 'react';

const LogoStrip: React.FC = () => {
  return (
    <section className="w-full bg-transparent py-4 relative z-10 -mt-16 md:-mt-24 pointer-events-none">
      <div className="max-w-[1170px] mx-auto flex items-center justify-between px-4">
        {/* Left Divider */}
        <div className="hidden md:block h-[1px] bg-gradient-to-r from-transparent via-white/40 to-white/60 w-[22%]" />
        
        {/* Center Logo */}
        <div className="w-full md:w-[22%] flex justify-center pointer-events-auto">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 shadow-lg">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/2621db67-63a2-4406-a6c1-84bef4ee9f01.png" 
              alt="Logo Icon"
              className="h-[45px] object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Right Divider - Mobile hidden mostly handled by flex layout */}
        <div className="hidden md:block h-[1px] bg-gradient-to-l from-transparent via-white/40 to-white/60 w-[77%]" />
      </div>
      <div className="h-[120px]"></div>
    </section>
  );
};

export default LogoStrip;