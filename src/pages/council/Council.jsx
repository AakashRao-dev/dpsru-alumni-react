import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import InfoBlock from '../../components/InfoBlock';
import CouncilMembers from '../../components/CouncilMembers';
import Footer from '../../components/Footer';

const Council = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Council"
        subtitle="Guiding the University’s Alumni Engagement Strategies and Building storing Connections for Life "
        imgURL="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
      />
      <InfoBlock title="Council Members" block={<CouncilMembers />} />
      <Footer />
    </>
  );
};
export default Council;
