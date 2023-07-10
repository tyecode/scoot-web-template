import React from 'react';
import Image from 'next/image';

const ServiceItems = ({ image, arrow_icon, title, desc }: any) => {
  return (
    <div className='text-center my-8 flex justify-center flex-col items-center md:flex md:flex-row md:gap-x-16'>
      <div className='w-[350px] rounded-full relative h-[350px] mb-4 flex justify-center'>
        <Image src={image} fill={true} alt='picture' />
        <div className='absolute bottom-0 left-0'>
          <Image src={arrow_icon} alt='picture' width={400} height={400} />
        </div>
      </div>
      <div className='max-w-[500px] mt-16'>
        <h1 className='font-bold font-space-mono text-4xl md:text-5xl'>
          {title}
        </h1>
        <p className='font-space-mono pt-8 text-[#939CAA]'>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceItems;
