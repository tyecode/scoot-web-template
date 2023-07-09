import React from 'react'
import Hero from './Hero'
import Service from './Service';
import IntroService from './introService';

const HomeLandingPage = () => {
  return (
    <div className=''>
      <Hero />
          <div className='max-w-[1440px] mx-auto'>
        <Service />
        <IntroService/>
      </div>
    </div>
  );
}

export default HomeLandingPage