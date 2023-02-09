import React, { useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';

function FormRegisteration() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-[20%] left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="text-center text-light-gray">
          <h1 className="font-Roboto md:text-5xl text-3xl tracking-wider font-black text-center ">
            Registeration
          </h1>
          <p className="mt-4">Please fill in the details below</p>
        </div>
        <form action="">
          <Carousel
            sx={{ maxWidth: 620 }}
            mx="auto"
            slideSize="100%"
            align="start"
            controlsOffset="md"
            controlSize={21}
            styles={{
              controls: {
                position: 'absolute',
                bottom: '-30%',
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '30px',
                paddingLeft: '40px',
                paddingRight: '40px',
              },

              control: {
                '&[data-inactive]': {
                  visibility: 'hidden',
                  cursor: 'default',
                },
                backgroundColor: '#F0C000 !important',
                padding: '15px 40px',
                border: 'none',
              },

              viewport: {
                height: width < 800 ? '450px' : '300px',
              },
            }}
            className="mt-20 bg-[#1224509f] w-full rounded-xl p-4"
          >
            <Carousel.Slide size="100%" className="flex flex-col p-8">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-center text-light-gray">
                  Enter your Name
                </h1>
                <input
                  type="text"
                  className="w-full bg-none py-4 text-xl pl-2 outline-none  focus:bg-light-gray rounded-lg"
                  placeholder="Full Name: E.g (Salman Khan)"
                />
              </div>
            </Carousel.Slide>

            <Carousel.Slide size="100%" className="flex flex-col p-8">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-center text-light-gray">
                  Enter your Designation
                </h1>
                <input
                  type="text"
                  className="w-full bg-none py-4 text-xl pl-2 outline-none  focus:bg-light-gray rounded-lg"
                  placeholder="Job Designation: E.g (Software Engineer)"
                />
              </div>
            </Carousel.Slide>

            <Carousel.Slide size="100%" className="flex flex-col p-8">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-center text-light-gray">
                  Enter your Full Address
                </h1>
                <input
                  type="text"
                  className="w-full bg-none py-4 text-xl pl-2 outline-none  focus:bg-light-gray rounded-lg"
                  placeholder="Home Address: E.g (Plot no 44/45 Sagar colony)"
                />
              </div>
            </Carousel.Slide>

            <Carousel.Slide size="100%" className="flex flex-col p-8">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-center text-light-gray">
                  Enter your Phone No.
                </h1>
                <input
                  type=""
                  className="w-full bg-none py-4 text-xl pl-2 outline-none  focus:bg-light-gray rounded-lg"
                  placeholder="Phone No.: E.g (9840329760)"
                />
              </div>
            </Carousel.Slide>

            <Carousel.Slide size="100%" className="flex flex-col p-8">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-center text-light-gray">
                  Enter your Course
                </h1>
                <input
                  type="text"
                  className="w-full bg-none py-4 text-xl pl-2 outline-none  focus:bg-light-gray rounded-lg"
                  placeholder="Course Name: E.g (M.Pharm Cosmaceutics)"
                />
              </div>
            </Carousel.Slide>

            <Carousel.Slide size="100%" className="flex flex-col p-8">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-center text-light-gray">
                  Enter your Batch
                </h1>
                <input
                  type="text"
                  className="w-full bg-none py-4 text-xl pl-2 outline-none  focus:bg-light-gray rounded-lg"
                  placeholder="Batch: E.g (2019-2021)"
                />
              </div>

              <input
                type="submit"
                value="Submit"
                className="max-w-[200px] w-full bg-none py-3 pl-2 rounded-full bg-custom-yellow text-black hover:bg-very-custom-yellow cursor-pointer font-bold border-0 shadow-lg shadow-black/20 absolute -bottom-[40%] right-0"
              />
            </Carousel.Slide>
          </Carousel>
        </form>
      </div>
    </div>
  );
}
export default FormRegisteration;
