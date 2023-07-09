"use client"

import React from 'react'
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { menuData } from './data/navbarMenuData';
import CustomButton from './CustomButton';

const Navbar = () => {
  const [click, setClick] = React.useState<Boolean>(false);
  const handleIconClick = () => { 
    setClick(!click)
  }

  const handleClick = () => { 
    alert("Click")
  }
  
  return (
    <>
      <nav className='w-full border'>
        <div className='hidden md:flex max-w-[1440px] justify-between mx-auto items-center py-4 px-5'>
          <div className='flex items-center '>
            <span className='font-bold bg font-space-mono text-2xl'>
              <Link href={'/'}>scoot</Link>
            </span>
            <ul className='flex pl-5'>
              {menuData.map((item) => (
                <li
                  className='px-5 text-slate-500 font-bold font-space-mono hover:text-black'
                  key={item.id}
                >
                  <Link href={item.url} as={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <CustomButton
            title='Get scootin'
            buttonClick={() => {}}
            style='bg-amber-400 inline-block h-full py-2 px-4 text-white font-space-mono'
          />
        </div>
      </nav>
      <nav className=' w-full border md:hidden'>
        <div className='px-5 py-3 flex items-center'>
          <div onClick={handleIconClick}>
            {click ? (
              <XMarkIcon className='h-6 text-amber-300 font-bold ' />
            ) : (
              <Bars3Icon className='h-6 text-amber-300 font-bold' />
            )}
          </div>
          <span className='font-space-mono font-bold text-lg w-full text-center'>
            <Link href={'/'}>scoot</Link>
          </span>
        </div>
        <div className={ click ? 'fixed w-[300px] bg-slate-600 h-full text-white flex flex-col justify-between transition z-10 duration-500 ease-out' : 'fixed left-[-1000px]'}> 
            <ul className='mt-5'>
              {menuData.map((item) => (
                <li onClick={() => setClick(false)} className='px-7 py-4 font-bold font-space-mono hover:bg-slate-500 mt-5' key={item.id}>
                  <Link href={item.url} as={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <CustomButton
              title='Get scootin'
              buttonClick={()=>{}}
              style='bg-amber-400 block mx-5 font-space-mono mb-[10rem] py-5'
            />   
        </div>
      </nav>
    </>
  );
}

export default Navbar
