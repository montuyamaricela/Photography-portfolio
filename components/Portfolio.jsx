import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='100'
        className='font-bold text-2xl p-4'
      >
        Travel Photos
      </h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='200'
          className='w-full h-full cols-span-2 md:col-span-3 row-span-2'
        >
          <Image
            src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='250'
          className='w-full h-full'
        >
          <Image
            src='https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt=''
            width='215'
            height='217'
            objectFit='cover'
            layout='responsive'
          />
        </div>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='300'
          className='w-full h-full'
        >
          <Image
            src='https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
            alt=''
            width='215'
            height='217'
            objectFit='cover'
            layout='responsive'
          />
        </div>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='350'
          className='w-full h-full'
        >
          <Image
            src='https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
            alt=''
            width='215'
            height='217'
            objectFit='cover'
            layout='responsive'
          />
        </div>
        <div
          data-aos='zoom-in'
          data-aos-duration='1000'
          data-aos-delay='400'
          className='w-full h-full'
        >
          <Image
            src='https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt=''
            width='215'
            height='217'
            objectFit='cover'
            layout='responsive'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
