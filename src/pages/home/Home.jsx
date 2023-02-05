import React from 'react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import MemberHighlight from '../../components/MemberHighlight';
import EventSummary from '../../components/EventSummary';

const Home = () => {
  return (
    <div className="min-h-screen bg-white px-8">
      <Navbar />
      <Hero
        title="Empowering Connections: Alumni Associations of DPSRU"
        subtitle="Join a network of successful alumni and stay connected to the university that helped shaping your future."
        ctaInfo="Join our Almuni Network"
      />
      <MemberHighlight />
      <EventSummary />
    </div>
  );
};

export default Home;
