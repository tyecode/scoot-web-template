import Link from 'next/link'
import { appStores, navLinks, socialMedia } from '@/constants'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col overflow-hidden relative">
      <div className="bg-dark-navy w-full h-80 flex-center">
        <div className="container flex-between lg:flex-row flex-col gap-10">
          <h2 className="heading-2 text-light max-w-[30rem] z-10 lg:text-start text-center">
            Sign up and Scoot off today
          </h2>
          <div className="flex-center flex-row gap-6 z-10">
            {appStores.map((store) => {
              return (
                <Link key={store.key} href={store.href}>
                  <img src={store.icon} alt={store.title} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-dark w-full flex items-center py-8 z-10">
        <div className="container flex-between md:flex-row flex-col gap-10">
          <div className="flex-center gap-14 md:flex-row flex-col">
            {/* logo */}
            <h3 className="heading-3 text-light lowercase">
              <Link href={'/'}>Scoot</Link>
            </h3>
            <div className="flex-center md:flex-row flex-col gap-8">
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
          <div className="flex-center gap-8 md:py-0 py-8">
            {socialMedia.map((social) => {
              return (
                <Link key={social.key} href={social.href}>
                  <img src={social.icon} alt={social.title} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-14 absolute top-40 -right-32">
        <div className="bg-dark-navy w-80 aspect-square rounded-full border border-x-[1rem] border-y-[1rem] border-light-grey opacity-10"></div>
        <div className="bg-dark-navy w-80 aspect-square rounded-full border border-x-[1rem] border-y-[1rem] border-light-grey opacity-10"></div>
        <div className="bg-light-grey w-80 aspect-square rounded-full opacity-10"></div>
      </div>
    </footer>
  )
}

export default Footer
