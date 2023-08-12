import Image from 'next/image'

import { Hero, Button } from '@/components'
import { features, services } from '@/constants'

type Service = {
  object: {
    key: string
    image: string
    title: string
    description: string
  }
  reversed: boolean
}

const Services = ({ object, reversed }: Service) => {
  const { key, image, title, description } = object

  return (
    <div
      className={
        reversed
          ? 'flex-between relative flex-col gap-14 lg:flex-row-reverse'
          : 'flex-between relative flex-col gap-14 lg:flex-row'
      }
    >
      <div className="flex-center flex-row">
        <span className="relative aspect-square max-w-[28rem] overflow-hidden rounded-full">
          <Image
            src={image}
            alt={key}
            width={500}
            height={500}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </span>
        <span
          className={
            reversed
              ? 'absolute -mr-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex'
              : 'absolute -ml-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex'
          }
        ></span>
      </div>
      <article className="lg:flex-start flex-center flex max-w-[40rem] flex-col gap-6 text-center lg:max-w-[32rem] lg:text-start">
        <h2 className="heading-2 max-w-[30rem]">{title}</h2>
        <p className="text-style mb-4">{description}</p>
        <Button title={'Learn more service button'} href={'#'}>
          learn more
        </Button>
      </article>
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      <Hero />
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
      <section className="container -z-10 mb-24 py-24">
        <div className="flex flex-col gap-40">
          {services.map((service, index) => {
            return (
              <Services
                key={service.key}
                object={service}
                reversed={index % 2 === 0 ? false : true}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HomePage
