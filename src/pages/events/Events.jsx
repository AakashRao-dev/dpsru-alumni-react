import React from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import InfoBlock from '../../components/InfoBlock';
import Navbar from '../../components/Navbar';
import EventsComponent from '../../components/Events';

const Events = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Alumni Events"
        subtitle="Stay Connected and Rekindle Old Memories: Join Us at Our Upcoming Alumni Events"
        imgURL="https://images.unsplash.com/photo-1571645163064-77faa9676a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      />
      <InfoBlock title="Events & Announcements" block={<EventsComponent />} />
      <Footer />
    </>
  );
};
export default Events;
