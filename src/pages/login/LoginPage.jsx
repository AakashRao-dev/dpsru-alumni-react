import React from 'react';
import LogIn from '../../components/LogIn';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-dark-blue flex justify-center items-center p-4 relative">
      <Link to="/home" className="absolute top-4 left-8">
        <Button ctaTitle="Back to Home >>>" paddingY="2" />
      </Link>
      <LogIn />
    </div>
  );
};
export default LoginPage;
