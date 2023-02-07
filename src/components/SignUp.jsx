import React, { useRef, useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/registeration');
    } catch {
      setError('Failed to create an account');
    }
  }

  console.log(currentUser);

  return (
    <div className="bg-light-gray max-w-md w-full md:px-10 px-4 md:py-12 py-6 rounded-xl">
      <h1 className="text-black text-lg uppercase tracking-widest font-semibold text-center">
        Create an Account
      </h1>
      {error && (
        <div className="text-error md:text-xl text-sm w-full px-4 py-2 mt-6 text-center rounded-lg bg-error-light">
          {error}
        </div>
      )}

      <form className="flex flex-col gap-8 mt-8" onSubmit={handleSubmit}>
        <div className="border-black/20 border rounded focus:outline-1 outline-black/50  w-full bg-light-gray relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-none py-2 pl-2 outline-none bg-light-gray focus:bg-light-gray rounded"
            ref={emailRef}
          />

          <BiInfoCircle
            className="absolute top-1/4 right-2 text-xl text-black/50"
            title="Please enter the correct email"
          />
        </div>
        <div className="border-black/20 border rounded focus:outline-1 outline-black/50  w-full bg-light-gray relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Create your password"
            className="w-full bg-none py-2 pl-2 outline-none bg-light-gray focus:bg-light-gray rounded"
            ref={passwordRef}
          />

          <span
            className="absolute top-1/4 right-2 cursor-pointer text-xl text-black/50 h-full"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
        <div className="border-black/20 border rounded focus:outline-1 outline-black/50  w-full bg-light-gray relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            className="w-full bg-none py-2 pl-2 outline-none bg-light-gray focus:bg-light-gray rounded"
            ref={passwordConfirmRef}
          />

          <span
            className="absolute top-1/4 right-2 cursor-pointer text-xl text-black/50 h-full"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>

        <div className="border-black/50 rounded focus:outline-1 w-full bg-light-gray">
          <input
            type="submit"
            className="w-full bg-none py-2 pl-2 rounded bg-custom-yellow text-black hover:bg-very-custom-yellow cursor-pointer font-bold border-0 shadow-lg shadow-black/20"
            disabled={loading}
          />
        </div>
      </form>

      <hr className="mt-8 text-black/30" />

      <div className="mt-4 text-center">
        <h4>
          Already have an account?{' '}
          <Link to="/login" className="text-sky-blue font-semibold">
            Log In
          </Link>
        </h4>
      </div>
    </div>
  );
}
export default SignUp;
