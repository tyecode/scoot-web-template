'use client'

import Link from 'next/link'
import { useState } from 'react'

import { navLinks } from '@/constants'
import { Button } from '.'

const Navbar = () => {
  const [isActive, setActive] = useState<boolean>(false)

  return (
    <header className="relative flex w-full flex-col">
      <nav className="flex-center fixed z-50 h-24 w-full bg-white shadow-md">
        <div className="md:flex-between flex-center container flex-row">
          <div className="flex flex-row items-center gap-14">
            {/* logo */}
            <h3 className="heading-3 z-10 lowercase">
              <Link onClick={() => setActive(false)} href={'/'}>
                Scoot
              </Link>
            </h3>
            <div className="hidden flex-row gap-8 md:flex">
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
          <Button className="hidden md:flex" title={'get scootin'} to={''} />
        </div>
        {/* hamburger */}
        <div className="container absolute flex md:hidden">
          <button
            onClick={() => setActive(!isActive)}
            className={
              !isActive
                ? 'flex-between relative h-[1.8rem] w-8 flex-col'
                : 'flex-center relative h-[1.8rem] w-8 flex-col'
            }
          >
            <div
              className={
                !isActive
                  ? 'h-[.4rem] w-full bg-primary transition-all'
                  : 'absolute h-[.4rem] w-full rotate-45 bg-primary transition-all'
              }
            ></div>
            <div
              className={
                !isActive
                  ? 'h-[.4rem] w-full bg-primary transition-all'
                  : 'h-[.4rem] w-full bg-primary opacity-0 transition-all'
              }
            ></div>
            <div
              className={
                !isActive
                  ? 'h-[.4rem] w-full bg-primary transition-all'
                  : 'absolute h-[.4rem] w-full -rotate-45 bg-primary transition-all'
              }
            ></div>
          </button>
        </div>
      </nav>
      {/* side menu overlay */}
      <div
        className={
          !isActive
            ? 'pointer-events-none fixed z-30 h-screen w-full bg-black opacity-0 transition-opacity'
            : 'fixed z-30 h-screen w-full bg-black opacity-70 transition-opacity'
        }
      ></div>
      {/* side menu */}
      <div
        className={
          !isActive
            ? 'fixed -left-80 z-40 h-screen w-fit bg-dark px-12 pb-8 pt-48 shadow-md transition-all'
            : 'fixed left-0 z-40 h-screen w-fit bg-dark px-12 pb-8 pt-48 shadow-md transition-all'
        }
      >
        <div className="flex-between h-full w-full flex-col items-start">
          <div className="flex flex-col gap-10">
            {navLinks.map((link) => {
              return (
                <Link
                  onClick={() => setActive(false)}
                  key={link.key}
                  href={link.href}
                  className="text-style font-space-mono text-xl font-bold capitalize text-light"
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
