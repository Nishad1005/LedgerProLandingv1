import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-12 text-white relative z-10">
      <div className="max-w-[1170px] mx-auto px-6 flex flex-col items-center gap-8">
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://assets.cdn.filesafe.space/cfHHpIl0xs1OVDdwIYpy/media/670f25472e9d945d7fcfa614.png"
            alt="LedgerPRO Logo"
            className="w-[200px] h-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
           <div className="flex gap-6 text-white/60">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
           </div>
           <p className="text-center text-sm font-light text-white/40">
            © Copyright 2024. Data Brilliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;