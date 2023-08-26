import Image from 'next/image'

import { Button } from '.'
import { headers } from '@/constants'

const Hero = () => {
  return (
    <section className="flex-center relative h-[46rem] w-full">
      <div className="flex-center absolute left-0 top-0 h-full w-full overflow-hidden">
        <Image
          src={headers[0].image}
          alt={headers[0].title}
          sizes="100vh"
          fill={true}
          priority={true}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="lg:flex-start flex-center container relative !items-center">
        <div className="lg:flex-start flex-center absolute w-fit flex-col gap-10">
          <h1 className="heading-1 max-w-[30rem] text-center text-light lg:text-start">
            {headers[0].title}
          </h1>
          <p className="text-style max-w-[40rem] text-center text-light lg:ml-[5.3rem] lg:max-w-[26rem] lg:text-start">
            {headers[0].description}
          </p>
          <Button title={'Hero scootin button'} href={'#'}>
            get scootin
          </Button>
        </div>

        <div className="absolute -left-[20rem] top-[11.2rem] flex flex-row md:-left-[6rem] lg:left-[36rem] lg:top-4">
          <div className="absolute -left-[55.5rem] hidden h-[.938rem] w-[25rem] bg-primary lg:flex"></div>
          <svg
            width="447"
            height="115"
            viewBox="0 0 447 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8H270.115V107.369H446.378"
              stroke="#FCB72B"
              strokeWidth="15"
              strokeLinejoin="bevel"
            />
          </svg>
          <svg
            className="-ml-10 mt-16"
            width="50"
            height="88"
            viewBox="0 0 50 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.9519 82.4441L44.3782 44.0178L5.9519 5.59155"
              stroke="#FCB72B"
              strokeWidth="15"
              strokeLinejoin="bevel"
            />
          </svg>
        </div>
      </div>

      <div className="md:flex-center absolute -right-8 bottom-[3rem] hidden flex-row gap-8 lg:bottom-[13rem]">
        <span className="aspect-square w-16 rounded-full border border-x-[.188rem] border-y-[.188rem] border-light"></span>
        <span className="aspect-square w-16 rounded-full border border-x-[.188rem] border-y-[.188rem] border-light"></span>
        <span className="aspect-square w-16 rounded-full bg-light"></span>
      </div>
    </section>
  )
}

export default Hero
