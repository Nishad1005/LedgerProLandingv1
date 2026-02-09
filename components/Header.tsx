import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Overview', href: '#hero' },
  { label: 'Estimator', href: '#estimator' },
];

interface HeaderProps {
  onOpenBooking: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'py-3 bg-[#1C1041]/85 backdrop-blur-xl border-white/10 shadow-lg' 
          : 'py-6 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://storage.googleapis.com/msgsndr/cfHHpIl0xs1OVDdwIYpy/media/670f25472e9d945d7fcfa614.png" 
            alt="LedgerPRO Brand Logo" 
            className="w-[180px] md:w-[200px] h-auto object-contain drop-shadow-sm"
          />
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center space-x-1 p-1.5 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/5 border border-white/10' : 'bg-transparent border-transparent'}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onOpenBooking}
            className="bg-brand hover:bg-brandDark text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(98,57,236,0.3)] hover:shadow-[0_0_25px_rgba(98,57,236,0.5)] ml-2"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1C1041]/95 backdrop-blur-xl border-t border-white/10 animate-fade-in-up shadow-2xl h-screen">
          <nav className="flex flex-col p-6 space-y-4 items-center justify-center h-full pb-32">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-bold text-2xl py-3 px-8 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              >
                {item.label}
              </a>
            ))}
            <button
               className="bg-brand text-white font-bold text-xl py-4 px-10 rounded-full shadow-xl mt-8"
               onClick={() => { setIsOpen(false); onOpenBooking(); }}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;