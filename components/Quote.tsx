import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-light to-white py-24 text-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] leading-none font-serif text-brand/5 select-none pointer-events-none z-0">"</div>
      
      <div className="max-w-[900px] mx-auto px-4 flex flex-col gap-8 relative z-10">
        <h2 className="text-3xl md:text-5xl text-textMain font-bold tracking-tight">
          Life is too short to drown in <span className="text-brand decoration-wavy underline decoration-brand/30 underline-offset-8">paperwork</span>.
        </h2>
        <h2 className="text-xl md:text-2xl text-textLight font-light leading-relaxed max-w-3xl mx-auto">
          Paper piles slow you down. Don’t let them keep you from being efficient. You deserve better.
        </h2>
      </div>
    </section>
  );
};

export default Quote;