import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hanleNav = () => setNav(!nav);

  return (
    <nav className="top-0 w-full z-10 transition ease-in duration-300 bg-light-gray shadow-xl max-w-[1240px] mt-8 px-8 m-auto rounded-full">
      <div className="flex justify-between items-center py-2">
        <Link
          to="/"
          className="flex justify-between items-center gap-3 z-[999]"
        >
          <img
            src={require('../images/logo.png')}
            alt="logo"
            className="h-10"
            title="logo image"
          />
          <span
            className="text-xs md:text-base font-bold uppercase"
            title="logo text"
          >
            DPSRU Alumni forum
          </span>
        </Link>

        <ul className="hidden md:flex">
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
          <li className="p-4">
            <Link
              to="/login"
              className="bg-dark-blue shadow-lg shadow-sky-blue/20 hover:bg-very-dark-blue px-6 py-2 rounded-full text-light-gray font-semibold"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={hanleNav}
          className="block md:hidden z-[9999] cursor-pointer"
        >
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
              ? 'md:hidden absolute inset-0 flex justify-center items-center w-full h-screen flex-col bg-black gap-12 text-light-gray z-[999]'
              : 'md:hidden absolute inset-0 left-[-100%] flex justify-center items-center w-full h-screen flex-col bg-black gap-12 text-light-gray z-[999]'
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
