import React from "react";
import img1 from "../public/Works/ig-img-1.jpeg";
import img2 from "../public/Works/ig-img-2.jpeg";
import img3 from "../public/Works/ig-img-3.jpeg";
import img4 from "../public/Works/ig-img-4.jpeg";
import img5 from "../public/Works/ig-img-5.jpeg";
import img6 from "../public/Works/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-xl py-24 text-center'>
      <p
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='100'
        className='text-2xl font-bold'
      >
        Follow me on instagram
      </p>
      <p
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='200'
        className='pb-4'
      >
        @Captur
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <div
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='300'
          className='relative'
        >
          <InstagramImg socialImg={img1} />
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='400'
          className='relative'
        >
          <InstagramImg socialImg={img2} />
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='500'
          className='relative'
        >
          <InstagramImg socialImg={img3} />
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='600'
          className='relative'
        >
          <InstagramImg socialImg={img4} />
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='700'
          className='relative'
        >
          <InstagramImg socialImg={img5} />
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='800'
          className='relative'
        >
          <InstagramImg socialImg={img6} />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
