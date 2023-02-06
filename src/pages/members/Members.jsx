import React from 'react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InfoBlock from '../../components/InfoBlock';
import AlumniMembers from '../../components/AlumniMembers';

const Members = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Members"
        subtitle="Browse the alumni & mentor directory and stay connected with the alma mater."
        imgURL="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      />
      <InfoBlock title="Alumni Members" block={<AlumniMembers />} />
      <Footer />
    </>
  );
};
export default Members;
