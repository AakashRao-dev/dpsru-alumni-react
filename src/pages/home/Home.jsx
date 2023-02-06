import React from 'react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import MemberHighlight from '../../components/MemberHighlight';
import InfoBlock from '../../components/InfoBlock';
import Footer from '../../components/Footer';
import ImageSlider from '../../components/ImageSlider';
import EventsComponent from '../../components/Events';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero
        title="Empowering Connections: Alumni Associations of DPSRU"
        subtitle="Join a network of successful alumni and stay connected to the university that helped shaping your future."
        ctaInfo="Join our Almuni Network"
        imgSlider={<ImageSlider />}
      />
      <MemberHighlight />
      <InfoBlock title="Events & Announcements" block={<EventsComponent />} />
      <Footer />
    </div>
  );
};

export default Home;
