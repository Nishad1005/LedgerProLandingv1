import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-full sm:h-[95vh] bg-white sm:rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header - Strictly Logo and Close Button */}
        <div className="flex-shrink-0 relative flex items-center justify-center py-4 bg-[#1C1041] z-20 border-b border-white/10">
          
          {/* Logo */}
          <img 
            src="https://storage.googleapis.com/msgsndr/cfHHpIl0xs1OVDdwIYpy/media/670f25472e9d945d7fcfa614.png" 
            alt="LedgerPRO" 
            className="h-8 md:h-10 w-auto object-contain"
          />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Iframe Container */}
        {/* 
           1. overflow-y-auto: Allows the user to scroll the modal itself.
           2. Iframe height fixed to 1350px: Enough to show the form, but cuts off the FAQ/Footer at the bottom.
           3. scrolling="no": Disables scrollbars inside the iframe so it acts like a static image.
           4. -mt-[100px]: Hides the external site's header.
        */}
        <div className="relative flex-grow w-full bg-white overflow-y-auto overflow-x-hidden">
          <iframe 
            src="https://goledgerpro.com/booking" 
            className="w-full h-[1350px] -mt-[100px] border-0 block"
            title="Schedule a Consultation"
            allow="camera; microphone; autoplay; fullscreen"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;