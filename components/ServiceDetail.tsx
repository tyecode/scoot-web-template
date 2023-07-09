import { ServiceDataProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const ServiceDetail = ({ img, title, description  }: ServiceDataProps) => {
  return (
    <div className='mt-[6rem] px-5 max-w-[900px] mx-auto relative h-full'>
      <div className='md:w-[20px] md:h-full md:bg-amber-500 absolute left-0 ml-[3.5rem]'>
        
      </div>
      <div
        className='flex flex-col justify-center 
      items-center text-center mb-[5rem]
      md:flex md:flex-row 
      '
      >
        <div className='pr-5 top-0 left-0 z-50'>
          <Image src={img} width={90} height={90} alt='picture' />
        </div>
        <div className='md:max-w-[500px] mx-auto'>
          <h1 className='font-bold font-space-mono  my-5'>{title}</h1>
          <p className='font-space-mono text-[#939caa]'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
