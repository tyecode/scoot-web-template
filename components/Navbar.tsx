'use client'

import Link from 'next/link'
import { useState } from 'react'

import { navLinks } from '@/constants'
import { Button } from '.'

const Navbar = () => {
  const [isActive, setActive] = useState<boolean>(false)

  return (
    <header className="w-full flex flex-col relative">
      <nav className="bg-white w-full h-24 flex-center fixed z-50 shadow-md">
        <div className="container md:flex-between flex-center flex-row">
          <div className="flex flex-row items-center gap-14">
            {/* logo */}
            <h3 className="heading-3 lowercase z-10">
              <Link onClick={() => setActive(false)} href={'/'}>
                Scoot
              </Link>
            </h3>
            <div className="md:flex flex-row gap-8 hidden">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="text-style font-space-mono font-bold capitalize"
                  >
                    {link.title}
                  </Link>
                )
              })}
            </div>
          </div>
          <Button className="md:flex hidden" title={'get scootin'} to={''} />
        </div>
        {/* hamburger */}
        <div className="container absolute md:hidden flex">
          <button
            onClick={() => setActive(!isActive)}
            className={
              !isActive
                ? 'w-8 h-[1.8rem] flex-between flex-col relative'
                : 'w-8 h-[1.8rem] flex-center flex-col relative'
            }
          >
            <div
              className={
                !isActive
                  ? 'bg-primary w-full h-[.4rem] transition-all'
                  : 'bg-primary w-full h-[.4rem] rotate-45 absolute transition-all'
              }
            ></div>
            <div
              className={
                !isActive
                  ? 'bg-primary w-full h-[.4rem] transition-all'
                  : 'bg-primary w-full h-[.4rem] opacity-0 transition-all'
              }
            ></div>
            <div
              className={
                !isActive
                  ? 'bg-primary w-full h-[.4rem] transition-all'
                  : 'bg-primary w-full h-[.4rem] -rotate-45 absolute transition-all'
              }
            ></div>
          </button>
        </div>
      </nav>
      {/* side menu overlay */}
      <div
        className={
          !isActive
            ? 'bg-black w-full h-screen fixed pointer-events-none opacity-0 transition-opacity z-30'
            : 'bg-black w-full h-screen fixed opacity-70 transition-opacity z-30'
        }
      ></div>
      {/* side menu */}
      <div
        className={
          !isActive
            ? 'bg-dark w-fit h-screen fixed pt-48 pb-8 px-12 z-40 shadow-md -left-80 transition-all'
            : 'bg-dark w-fit h-screen fixed pt-48 pb-8 px-12 z-40 shadow-md left-0 transition-all'
        }
      >
        <div className="w-full h-full flex-between items-start flex-col">
          <div className="flex flex-col gap-10">
            {navLinks.map((link) => {
              return (
                <Link
                  onClick={() => setActive(false)}
                  key={link.key}
                  href={link.href}
                  className="text-style text-light text-xl font-space-mono font-bold capitalize"
                >
                  {link.title}
                </Link>
              )
            })}
          </div>
          <Button onClick={() => setActive(false)} title="Get scootin" to="" />
        </div>
      </div>
    </header>
  )
}

export default Navbar
