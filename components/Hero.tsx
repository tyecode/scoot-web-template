import { hero } from '@/constants'
import Button from './Button'

const Hero = () => {
  return (
    <section className="w-full h-[46rem] flex-center relative">
      <div className="w-full h-full flex-center overflow-hidden absolute top-0 left-0">
        <img
          className="w-full h-full object-cover"
          src={hero.image}
          alt={hero.title}
        />
      </div>

      <div className="container lg:flex-start !items-center flex-center relative">
        <div className="w-fit lg:flex-start flex-center flex-col gap-10 absolute">
          <h1 className="heading-1 text-light max-w-[30rem] lg:text-start text-center">
            {hero.title}
          </h1>
          <p className="text-style text-light lg:max-w-[26rem] max-w-[40rem] lg:ml-[5.3rem] lg:text-start text-center">
            {hero.description}
          </p>
          <Button title={'Get Scootin'} to={''}></Button>
        </div>

        <div className="flex flex-row absolute lg:left-[36rem] lg:top-4 top-[11.2rem] md:-left-[6rem] -left-[20rem]">
          <div className="lg:flex absolute w-[25rem] h-[.938rem] bg-primary -left-[55.5rem] hidden"></div>
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
              stroke-width="15"
              stroke-linejoin="bevel"
            />
          </svg>
          <svg
            className="mt-16 -ml-10"
            width="50"
            height="88"
            viewBox="0 0 50 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.9519 82.4441L44.3782 44.0178L5.9519 5.59155"
              stroke="#FCB72B"
              stroke-width="15"
              stroke-linejoin="bevel"
            />
          </svg>
        </div>
      </div>

      <div className="md:flex-center flex-row gap-8 absolute lg:bottom-[13rem] bottom-[3rem] -right-8 hidden">
        <div className="w-16 aspect-square border border-x-[.188rem] border-y-[.188rem] border-light rounded-full"></div>
        <div className="w-16 aspect-square border border-x-[.188rem] border-y-[.188rem] border-light rounded-full"></div>
        <div className="w-16 aspect-square bg-light rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero
