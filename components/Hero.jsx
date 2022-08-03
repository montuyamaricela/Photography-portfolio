import Link from "next/link";
import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2
          data-aos='fade-right'
          data-aos-duration='500'
          data-aos-delay='100'
          className='text-5xl font-bold'
        >
          {heading}
        </h2>
        <p
          data-aos='fade-left'
          data-aos-duration='500'
          data-aos-delay='200'
          className='py-5 text-xl'
        >
          {message}
        </p>
        <Link href='/contact'>
          <button
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='300'
            className='px-8 py-2 border'
          >
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
