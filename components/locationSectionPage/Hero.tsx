import React from 'react';
import Image from 'next/image';

const Hero = ({ backgroud, title }: any) => {
  return (
    <div className='w-screen bg-blue-300'>
      <div className='relative w-[100vw] h-[500px] flex justify-center items-center'>
        <Image fill={true} src={backgroud} alt='aboutHeroPicture' />
        <h1 className='absolute text-white font-space-mono text-8xl'>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
