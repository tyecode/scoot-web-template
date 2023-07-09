import React from 'react';
import Image from 'next/image';
import heroImage from '../images/Bitmap.jpg';
import CustomButton from './CustomButton';
import arrowPic from '../images/arrow.png';
import arrowforweb from '../images/arrowforweb.png'

const Hero = () => {
  return (
    <div className='h-screen bg-slate-300 relative flex justify-center'>
      <Image
        style={{
          backgroundPosition: 'left',
          backgroundSize: 'cover',
        }}
        fill
        src={heroImage}
        alt='hero image'
        sizes='100vh'
      />
      <div
        className='absolute max-w-[1440px] w-full
         h-screen mx-auto px-5 grid place-items-center'
      >
        <div className='max-w-[600px] flex flex-col md:max-w-[800px]'>
          <h1 className='text-white text-center text-[4rem] font-space-mono mb-5 leading-snuge'>
            Scooter sharing made simple
          </h1>
          <p className='font-lexend-deca text-slate-300  text-center leading-6 mb-5 md:text-[2rem] md:leading-snug'>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <CustomButton
            title='Get scootin'
            buttonClick={() => {}}
            style='bg-amber-400 inline md:mt-[4rem] font-space-mono mb-[10rem] text-white py-5'
          />
        </div>
        <div className='absolute bottom-0 left-0 mb-[5rem] md:hidden'>
          <Image src={arrowPic} width={200} height={200} alt='arrow picture' />
        </div>
      </div>
      <div className='hidden md:flex'>
        <Image src={arrowforweb} width={200} height={200} alt='arrow picture' />
      </div>
    </div>
  );
};

export default Hero;
