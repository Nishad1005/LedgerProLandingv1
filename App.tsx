import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Differences from './components/Differences';
import Quote from './components/Quote';
import Steps from './components/Steps';
import Guarantee from './components/Guarantee';
import Estimator from './components/Estimator';
import Deliverables from './components/Deliverables';
import DecisionMakers from './components/DecisionMakers';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="font-sans text-textMain">
      
      {/* Background Image Wrapper */}
      <div className="fixed inset-0 z-[-1]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-100"
          style={{ 
            backgroundImage: 'url(https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/24LAYJa1K3HLkOzigwU2/media/04f967ef-41b2-48b4-a44c-ca08df4601a7.png)' 
          }}
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <Header onOpenBooking={openBooking} />
      
      <main className="relative pt-20"> {/* Add padding for fixed header */}
        <Hero onOpenBooking={openBooking} />
        <LogoStrip />
        <Differences />
        <Quote />
        <Guarantee />
        <Steps onOpenBooking={openBooking} />
        <Deliverables />
        <DecisionMakers />
        <Estimator />
        <CTA onOpenBooking={openBooking} />
      </main>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default App;