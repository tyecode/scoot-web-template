'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { Navbar, Hero } from '.'
import { headers } from '@/constants'

const Header = () => {
  const pathname = usePathname()

  return (
    <header>
      <Navbar />
      <div className="h-24 w-full"></div>

      {pathname === '/' ? (
        <Hero />
      ) : (
        headers.map((header, index) => {
          if (header.path === pathname) {
            return (
              <div
                key={index}
                className="flex-center flex-center relative h-[12.5rem] w-full"
              >
                <span className="relative h-full w-full">
                  <Image
                    src={header.image}
                    alt={`${header.title} header image`}
                    fill={true}
                    sizes="100wh"
                    className="h-full w-full object-cover"
                    priority={true}
                  />
                </span>

                <div className="container absolute">
                  <h1 className="heading-1 text-center text-light md:text-start">
                    {header.title}
                  </h1>
                </div>

                <div className="md:flex-center absolute -right-8 hidden flex-row gap-8">
                  <span className="aspect-square w-16 rounded-full border border-x-[.188rem] border-y-[.188rem] border-light"></span>
                  <span className="aspect-square w-16 rounded-full border border-x-[.188rem] border-y-[.188rem] border-light"></span>
                  <span className="aspect-square w-16 rounded-full bg-light"></span>
                </div>
              </div>
            )
          }
        })
      )}
    </header>
  )
}

export default dynamic(() => Promise.resolve(Header), { ssr: false })
