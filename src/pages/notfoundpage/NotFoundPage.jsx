import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black/90 overflow-hidden">
      <h1 className="absolute -top-1/4 left-[17%] text-[504px] hidden md:block -z-50 text-black/50 font-black">
        404
      </h1>
      <div className="flex flex-col justify-end min-h-screen mx-auto items-center max-w-xl text-center gap-8 pb-14 text-light-gray/80 z-50">
        <h2 className="text-4xl font-bold">Nothing to see here</h2>
        <p className="text-lg">
          Page you are trying to open does not exist. You may have mistyped the
          address, or the page has been moved to another URL. If you think this
          is an error contact support.
        </p>
        <Link to="/">
          <Button ctaTitle="Take me back to Home Page" paddingY="2" />
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
