import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404, Sorry it seems like you're lost!</h1>
      <p>
        But don't worry we're here to help, click the link below to navigate
        back to <span className="text-custom-yellow font-bold">Home</span>
      </p>
      <button className="mt-5 bg-custom-yellow mx-auto md:mx-0 hover:bg-very-custom-yellow px-8 py-3 rounded-full font-bold shadow-xl shadow-black/20">
        <Link to="/">Take me back</Link>
      </button>
    </div>
  );
};
export default NotFoundPage;
