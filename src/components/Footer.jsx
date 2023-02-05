import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <div className="bg-sky-blue w-full text-light-gray mt-32 pt-8">
      {/* LOGO COMPONENT */}
      <div className="flex justify-between items-center w-[220px] md:mx-20 mx-12">
        <img
          src={require('../images/logo.png')}
          alt=""
          className="h-10 object-contain"
        />
        <h4 className="text-lg font-medium">DPSRU Alumni Forum</h4>
      </div>

      {/* MAIN FOOTER BODY */}
      <div className="flex md:flex-row flex-col md:gap-4 gap-12 md:px-20 px-10 py-10 md:divide-x divide-x-0">
        <div className="basis-2/5">
          <h5 className="text-xl uppercase tracking-wider font-bold">
            Dean. Alumni Relations
          </h5>
          <h6 className="mt-6 text-xl">Prof. Name</h6>
          <p className="text-base mt-6">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad min im veniam, quis nostrud exercitation ullamco
          </p>
        </div>

        <div className="basis-1/4 md:pl-12">
          <h5 className="text-xl uppercase tracking-wider font-bold">
            Quick Links
          </h5>
          <ul className="flex flex-col gap-2 mt-6 ml-4 list-['👉']">
            <li className="text-md font-semibold hover:text-gray-500 tracking-wider">
              <Link to="/members">Members</Link>
            </li>
            <li className="text-md font-semibold hover:text-gray-500 tracking-wider">
              <Link to="/council">Council</Link>
            </li>
            <li className="text-md font-semibold hover:text-gray-500 tracking-wider">
              <Link to="/events">Events</Link>
            </li>
            <li className="text-md font-semibold hover:text-gray-500 tracking-wider">
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        <div className="basis-2/5 md:pl-8">
          <h5 className="text-xl uppercase tracking-wider font-bold mb-4">
            Get in Touch
          </h5>
          <p className="text-lg mt-2">
            <span className="font-bold">Location: </span>
            Mehrauli-Badarpur Road, Puspvihar Sector 3 New Delhi 110017, India
          </p>
          <p className="text-lg mt-2">
            <span className="font-bold">Phone No.: </span>
            29552039, 29552040
          </p>
          <div className="flex text-xl mt-6 gap-4">
            <Link to="https://twitter.com/DPSRUOfficial">
              <BsTwitter />
            </Link>

            <Link to="https://www.instagram.com/dpsruofficial/">
              <RiInstagramFill />
            </Link>
            <Link to="https://www.youtube.com/@officialchannelofdpsru2577">
              <BsYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM TEXT*/}
      <div className="w-full bg-dark-sky-blue font-bold text-md uppercase tracking-widest text-center py-3">
        Alumni Relations DPSRU ❤️
      </div>
    </div>
  );
}
export default Footer;
