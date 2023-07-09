import React from 'react';
import Image from 'next/image';
import googlePlay from '../images/googlePlay.png';
import appStore from '../images/appStore.png';
import facebook from '../images/facebook_icon.png';
import twitter from '../images/twitter_icon.png';
import instragram from '../images/intragram.png';
import Link from 'next/link';
import { menuData } from './data/navbarMenuData';

const Footer = () => {
  return (
    <footer className='bg-[#495567]'>
      <div className=' max-w-[1440px] mx-auto px-[2rem] py-[5rem] text-white flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold font-space-mono mb-[2rem] text-[2.5rem] text-center'>
            Sign up and Scoot off today
          </h1>
          <div className='flex flex-row gap-3 mb-[2rem]'>
            <Image
              src={googlePlay}
              width={150}
              height={150}
              alt='google Play image'
            />
            <Image
              src={appStore}
              width={150}
              height={150}
              alt='google Play image'
            />
          </div>
        </div>
      </div>
      <div className='bg-[#333a44]'>
        <div className='max-w-[1440px] mx-auto px-[2rem] py-[5rem] text-white text-center md:flex md:items-center md:py-5 md:relative'>
          <h1 className='font-space-mono font-bold text-[3rem] cursor-pointer'>scoot</h1>
          <ul className='md:flex px-[2rem] gap-[2rem]'>
            {menuData.map((menu) => (
              <li
                className='font-bold font-space-mono py-[1rem] text-[#939CAA]'
                key={menu.id}
              >
                <Link href={menu.url}>{menu.title}</Link>
              </li>
            ))}
          </ul>
          <div className='flex flex-row gap-3 
          mb-[2rem] justify-center mt-[2rem]
          md:absolute md:right-0 md:pr-[2rem]
          '>
            <Image
              src={facebook}
              width={24}
              height={24}
              alt='google Play image'
            />
            <Image
              src={twitter}
              width={24}
              height={24}
              alt='google Play image'
            />
            <Image
              src={instragram}
              width={24}
              height={24}
              alt='google Play image'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
