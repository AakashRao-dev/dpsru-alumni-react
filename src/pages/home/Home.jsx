import React, { useContext } from 'react';
import NavbarContext from '../../navbarContext';

const Home = () => {
  const navbar = useContext(NavbarContext);

  return (
    <>
      {navbar}
      <h1 className="text-6xl font-bold text-slate-800 text-center mt-8">
        DIPSAR Alumni Page using React + Tailwind 💜💜
      </h1>
    </>
  );
};

export default Home;
