import React, { useContext } from 'react';
import NavbarContext from '../../navbarContext';

const Council = () => {
  const navbar = useContext(NavbarContext);

  return (
    <>
      {navbar}
      <h1 className="text-6xl font-bold text-slate-800 text-center mt-8">
        Council Page
      </h1>
    </>
  );
};
export default Council;
