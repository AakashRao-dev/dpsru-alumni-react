import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Hero({ title, subtitle, ctaInfo, imgURL, imgSlider }) {
  return (
    <div className="mt-20 pb-4 flex flex-col md:flex-row text-center md:text-left items-center w-full max-w-[1220px] mx-auto gap-6 md:gap-12">
      {/* LEFT INFO */}
      <div className="text-black basis-3/5 py-8 flex flex-col gap-5 md:gap-8 md:items-start items-center">
        <h1 className="text-[30px] md:text-[46px] leading-[50px] md:leading-[60px] font-bold">
          {!title ? 'Error loading title' : title}
        </h1>
        <p className="text-base md:text-2xl">
          {!subtitle ? 'Error loading Subtitle' : subtitle}
        </p>
        {ctaInfo ? (
          <Link to="/login" className="mx-auto md:mx-0">
            <Button ctaTitle={ctaInfo} paddingY="3" width="none" />
          </Link>
        ) : null}
      </div>

      {/* RIGHT IMAGE CAROUSEL | IMAGE */}
      {imgSlider ? (
        <div className="basis-2/5 flex justify-end">{imgSlider}</div>
      ) : (
        <div className="basis-2/5 md:h-80 h-10 md:max-w-lg max-w-xs overflow-hidden md:flex hidden justify-end rounded-xl">
          {!imgURL ? (
            'Sorry, Looks like there is some problem loading the image'
          ) : (
            <img src={imgURL} alt="hero" className="object-cover w-full" />
          )}
        </div>
      )}
    </div>
  );
}
export default Hero;
