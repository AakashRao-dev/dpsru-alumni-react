import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { ImQuotesLeft } from 'react-icons/im';

function MemberHighlight() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1597272420671-4252a163b0df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1529470839332-78ad660a6a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1522010265321-fd346cc64d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1592085550638-e6bc180a731e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const texts = [
    'The education and connections I received have been invaluable in my professional and personal growth. I am proud to be a part of the esteemed alumni community and highly recommend the university to anyone looking to invest in their future.',
    'The education I received at DPSRU has opened up a world of opportunities for me. The professors, staff, and resources were truly top-notch and have had a lasting impact on my life.',
    'I am so grateful for my time at DPSRU. The connections I made and the experiences I had have been integral to my personal and professional success.',
    'The education I received at DPSRU was not just about academics, but also about personal growth and development. I am so thankful for the mentorship and support I received during my time there.',
    "I couldn't be prouder to be a DPSRU alumni. The education and resources provided have been instrumental in my career and I highly recommend the university to anyone looking to invest in their future.",
    'The vibrant campus community at DPSRU was truly like no other. I am so thankful for the lifelong connections and friendships I made during my time there.',
  ];

  const studentsInfo = [
    {
      name: 'Aryan Sharma',
      degree: 'Bachelor of Science in Nursing',
      graduated: 1999,
    },
    { name: 'Roshni Patel', degree: 'Doctor of Medicine', graduated: 2000 },
    {
      name: 'Priya Singh',
      degree: 'Doctor of Physical Therapy',
      graduated: 2001,
    },
    { name: 'Anika Gupta', degree: 'Master of Public Health', graduated: 2003 },
    {
      name: 'Arjun Menon',
      degree: 'Bachelor of Ayurvedic Medicine and Surgery',
      graduated: 2010,
    },
    {
      name: 'Nitya Rao',
      degree: 'Master of Science in Occupational Therapy',
      graduated: 2009,
    },
  ];

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Carousel
        sx={{ maxWidth: 1220 }}
        mx="auto"
        withIndicators
        height={450}
        slideSize="100%"
        align="start"
        controlsOffset="md"
        controlSize={21}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        styles={{
          control: {
            backgroundColor: '#E9E9E9 !important',
          },

          indicator: {
            backgroundColor: '#0C1732 !important',
          },

          viewport: {
            height: width < 800 ? '800px' : '450px',
          },
        }}
        className="my-24 bg-light-gray"
      >
        {images.map((img, index) => {
          return (
            <Carousel.Slide
              size="100%"
              key={index}
              className="flex flex-col md:flex-row justify-between items-center h-full bg-light-gray"
            >
              {/* QUOTES & INFO */}
              <div className="basis-3/6 md:mx-12">
                <ImQuotesLeft className="h-12 text-3xl" />
                <p className="text-black text-md md:text-2xl md:px-12 px-8">
                  {texts[index]}
                </p>
                <div className="mt-12 px-12">
                  <h4 className="text-2xl font-bold">
                    {studentsInfo[index].name}
                  </h4>
                  <div className="text-sm mt-2">
                    <span className="mr-1">{studentsInfo[index].degree}</span>
                    <span className="font-bold">
                      ({studentsInfo[index].graduated})
                    </span>
                  </div>
                </div>
              </div>

              {/* IMAGE CONTAINER */}
              <div className="bg-dark-blue w-full md:basis-2/6 h-full md:pt-20 md:pl-1 object-fill flex justify-center items-center -order-10 md:order-1">
                <img
                  src={img.url}
                  alt="carousel images"
                  className="rounded md:rounded-xl h-96 md:h-[620px] md:pt-20"
                />
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
}
export default MemberHighlight;
