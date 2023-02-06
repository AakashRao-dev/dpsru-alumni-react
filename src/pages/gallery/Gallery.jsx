import React from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import InfoBlock from '../../components/InfoBlock';
import Navbar from '../../components/Navbar';
import PastEvents from '../../components/PastEvents';

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Alumni Gallery"
        subtitle="A Look Back at Memories and Accomplishments from Our Graduates"
        imgURL="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      />
      <InfoBlock title="Past Events" block={<PastEvents />} />
      <Footer />
    </>
  );
};
export default Gallery;
