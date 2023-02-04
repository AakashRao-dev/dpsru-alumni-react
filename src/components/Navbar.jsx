import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-light-gray w-full z-10 transiton ease-in duration-300 shadow-xl mt-7 px-8 max-w-[1240px] m-auto rounded-full">
        <div className="flex justify-between items-center py-2">
          {/* LOGO IMAGE WITH TEXT */}
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

          {/* NAVIGATION LINKS WITH BUTTON */}
          <ul className="flex gap-8">
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/council">Council</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-dark-blue hover:bg-very-dark-blue px-6 py-2 rounded-full text-light-gray font-semibold"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
