'use client';

import { ServiceDataProps } from '@/types';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomButton from './CustomButton';

const IntroServiceItems = ({ img, title, description }: ServiceDataProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, delay: 0.5 }}
      className='mt-[8rem] px-5 max-w-[900px]  mx-auto relative h-full flex flex-col justify-center items-center'
    >
      <Image
        className='rounded-full max-w-[350px] mx-auto justify-center'
        src={img}
        width={350}
        height={350}
        alt='perons picture'
      />
      <div className='my-[5rem] max-w-[500px] mx-auto text-center'>
        <h1 className='font-bold font-space-mono text-[3rem] leading-15 mb-[2rem]'>
          {title}
        </h1>
        <p className='font-space-mono font-medium text-[#939CAA]'>
          {description}
        </p>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.5 }}
        >
          <CustomButton
            title='Learn More'
            buttonClick={() => {}}
            style='bg-amber-400 inline-block h-full py-4 px-[5rem] text-white font-space-mono mt-[2rem]'
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroServiceItems;
