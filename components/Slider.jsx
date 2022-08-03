import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='Gallery' className='max-w-[1240px] mx-auto'>
      <h1
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='100'
        className='text-2xl font-bold text-center'
      >
        Gallery
      </h1>
      <div
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='200'
        className='relative flex justify-center items-center p-4'
      >
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <RiArrowLeftSLine
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px]  cursor-pointer select-none z-[2] text-white'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                  objectFit='cover'
                />
              )}
              <RiArrowRightSLine
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px]  cursor-pointer select-none z-[2] text-white'
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
