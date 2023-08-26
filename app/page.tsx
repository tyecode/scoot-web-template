import Image from 'next/image'

import { ContentColumn } from '@/components'
import { features, services } from '@/constants'

const HomePage = () => {
  return (
    <>
      {/* features section */}
      <section className="flex-center container relative -z-10 mt-24 py-24">
        <div className="relative grid max-w-4xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-3">
          <span className="absolute right-80 top-10 hidden h-4 w-screen bg-light-grey lg:flex"></span>
          <span className="absolute bottom-10 left-10 hidden h-screen w-4 bg-light-grey md:flex lg:hidden"></span>
          {features.map((feature) => {
            return (
              <div
                key={feature.key}
                className="lg:flex-start flex-center z-10 flex-col gap-10 md:flex-row md:gap-20 lg:flex-col lg:gap-10"
              >
                <span className="relative aspect-square w-24">
                  <Image
                    src={feature.icon}
                    alt={feature.key}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </span>
                <article className="flex-center md:flex-start flex-1 flex-col gap-6">
                  <h4 className="heading-4">{feature.title}</h4>
                  <p className="text-style text-center md:text-start">
                    {feature.description}
                  </p>
                </article>
              </div>
            )
          })}
        </div>
      </section>
      {/* services section */}
      <section className="container mb-24 py-24">
        <div className="flex flex-col gap-40">
          {services.map((service, index) => {
            return (
              <ContentColumn
                key={service.key}
                content={service}
                reversed={index % 2 === 0 ? true : false}
                button={{ title: 'learn more', href: '#' }}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HomePage
