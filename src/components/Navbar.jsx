import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hanleNav = () => setNav(!nav);

  return (
    <nav className="fixed top-0 w-full z-10 transition ease-in duration-300 bg-light-gray shadow-xl mt-7 px-8 m-auto rounded-full">
      <div className="flex justify-between items-center py-2">
        <div className="flex justify-between items-center gap-3">
          <img
            src={require('../images/logo.png')}
            alt="logo"
            className="h-10"
            title="logo image"
          />
          <span className="text-base font-bold uppercase" title="logo text">
            DPSRU Alumni forum
          </span>
        </div>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link to="/members">Members</Link>
          </li>
          <li className="p-4">
            <Link to="/council">Council</Link>
          </li>
          <li className="p-4">
            <Link to="/events">Events</Link>
          </li>
          <li className="p-4">
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={hanleNav} className="block sm:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={20} className="text-light-gray" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            nav
              ? 'sm:hidden absolute inset-0 -top-7 flex justify-center items-center w-full h-screen flex-col bg-black/95 gap-12 text-light-gray'
              : 'sm:hidden absolute inset-0 -top-7 left-[-100%] flex justify-center items-center w-full h-screen flex-col bg-black/95 gap-12 text-light-gray'
          }
        >
          <li className="text-4xl hover:text-gray-500">
            <Link to="/members">Members</Link>
          </li>
          <li className="text-4xl hover:text-gray-500">
            <Link to="/council">Council</Link>
          </li>
          <li className="text-4xl hover:text-gray-500">
            <Link to="/events">Events</Link>
          </li>
          <li className="text-4xl hover:text-gray-500">
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
