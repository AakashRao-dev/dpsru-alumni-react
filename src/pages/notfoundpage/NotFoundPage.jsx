import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const NotFoundPage = () => {
  return (
    <div className="relative w-full min-h-screen">
      <h1>Nothing to see here</h1>
      <p>
        Page you are trying to open does not exist. You may have mistyped the
        address, or the page has been moved to another URL. If you think this is
        an error contact support.
      </p>
      <Link to="/">
        <Button ctaTitle="Take me back to Home Page" />
      </Link>
    </div>
  );
};
export default NotFoundPage;
