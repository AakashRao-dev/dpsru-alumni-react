import React from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <h1 className="text-3xl font-bold text-slate-800 text-center mt-8">
        DIPSAR Alumni Page using React + Tailwind 💜💜
      </h1>
    </div>
  );
};

export default Home;
