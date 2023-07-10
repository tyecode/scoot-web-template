import React from 'react';
import Hero from './Hero';
import aboutHeroPicture from '../../images/aboutHero.jpg';
import Services from './Services';

const AboutLandingPage = () => {
  return (
    <div>
      <Hero backgroud={aboutHeroPicture} title={'About'} />
      <div className='max-w-[1440px] flex justify-center mx-auto pl-[1rem] pr-[1rem]'>
        <Services />
      </div>
    </div>
  );
};

export default AboutLandingPage;
