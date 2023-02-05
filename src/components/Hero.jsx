import React from 'react';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';

function Hero({ title, subtitle, ctaInfo }) {
  return (
    <div className="mt-16 pb-4 flex flex-col md:flex-row text-center md:text-left items-center w-full max-w-[1220px] mx-auto gap-6 md:gap-0">
      {/* LEFT INFO */}
      <div className="text-black basis-3/5 py-8 flex flex-col gap-5 md:gap-8 items-start">
        <h1 className="text-[30px] md:text-[46px] leading-[50px] md:leading-[60px] font-bold">
          {title}
        </h1>
        <p className="text-base md:text-2xl">{subtitle}</p>
        <Link
          to="/login"
          className="mt-5 bg-custom-yellow mx-auto md:mx-0 hover:bg-very-custom-yellow px-8 py-3 rounded-full font-bold shadow-xl shadow-black/20"
        >
          {ctaInfo}
        </Link>
      </div>

      {/* RIGHT IMAGE CAROUSEL */}
      <div className="basis-2/5 flex justify-end">
        <ImageSlider />
      </div>
    </div>
  );
}
export default Hero;
