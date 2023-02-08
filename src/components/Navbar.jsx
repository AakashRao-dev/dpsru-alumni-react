import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hanleNav = () => setNav(!nav);

  const [options, setOptions] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { currentUser, logout } = useAuth();

  async function handleLogOut() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

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

        <ul className="hidden md:flex justify-evenly items-center gap-8 relative">
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
            {!currentUser ? (
              <Link
                to="/signup"
                className="bg-dark-blue shadow-lg shadow-sky-blue/20 hover:bg-very-dark-blue px-6 py-2 rounded-full text-light-gray font-semibold"
              >
                Login
              </Link>
            ) : (
              <button
                className="w-8 h-8 rounded-full bg-dark-blue flex justify-center items-center"
                onMouseEnter={() => setOptions(!options)}
                onClick={() => setOptions(!options)}
              >
                <AccountCircleIcon className="w-full h-full text-light-gray/95" />
              </button>
            )}
          </li>

          <div
            className={`${
              options ? 'flex' : 'hidden'
            } absolute bg-light-dark-blue rounded-md top-[90%] right-0 z-[999999] flex-col text-center text-lg text-light-gray font-semibold`}
          >
            {!error ? (
              <div>
                <Link to="/edit-profile">
                  <p className="px-4 py-1 hover:bg-light-gray hover:text-black">
                    Edit Profile
                  </p>
                </Link>

                <Link to="/registeration">
                  <p className="px-4 py-1 hover:bg-light-gray hover:text-black">
                    Registeration
                  </p>
                </Link>
                <button
                  onClick={handleLogOut}
                  className="bg-error-light text-error px-4 py-1 w-full hover:bg-error hover:text-light-gray rounded-b-md"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              error
            )}
          </div>
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
