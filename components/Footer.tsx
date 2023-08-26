import Link from 'next/link'
import Image from 'next/image'

import { appStores, navLinks, socialMedia } from '@/constants'

const Footer = () => {
  return (
    <footer className="relative flex w-full flex-col overflow-hidden">
      <div className="flex-center h-80 w-full bg-dark-navy">
        <div className="flex-between container flex-col gap-10 lg:flex-row">
          <h2 className="heading-2 z-10 max-w-[30rem] text-center text-light lg:text-start">
            Sign up and Scoot off today
          </h2>
          <div className="flex-center z-10 gap-4 sm:flex-row">
            {appStores.map((store) => {
              return (
                <Link
                  key={store.key}
                  href={store.href}
                  className="h-14 max-w-[11.5rem]"
                >
                  <Image
                    src={store.icon}
                    alt={store.title}
                    width={180}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="z-10 flex w-full items-center bg-dark py-8">
        <div className="flex-between container flex-col gap-10 md:flex-row">
          <div className="flex-center flex-col gap-14 md:flex-row">
            {/* logo */}
            <h3 className="heading-3 text-[2.5rem] lowercase text-light">
              <Link href={'#'}>Scoot</Link>
            </h3>
            <div className="flex-center flex-col gap-8 md:flex-row">
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
          <div className="flex-center gap-8 py-8 md:py-0">
            {socialMedia.map((social) => {
              return (
                <Link
                  key={social.key}
                  href={social.href}
                  className="relative h-6 w-6"
                >
                  <Image
                    src={social.icon}
                    alt={social.title}
                    sizes="100vh"
                    fill={true}
                    className="h-full w-full object-contain"
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute -right-32 top-40 flex flex-row gap-14">
        <div className="aspect-square w-80 rounded-full border border-x-[1rem] border-y-[1rem] border-light-grey bg-dark-navy opacity-10"></div>
        <div className="aspect-square w-80 rounded-full border border-x-[1rem] border-y-[1rem] border-light-grey bg-dark-navy opacity-10"></div>
        <div className="aspect-square w-80 rounded-full bg-light-grey opacity-10"></div>
      </div>
    </footer>
  )
}

export default Footer
