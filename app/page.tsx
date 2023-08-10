import { Hero, Button } from '@/components'
import { features, services } from '@/constants'

const Home = () => {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <Hero />
      {/* features section */}
      <section className="flex-center container relative -z-10 mt-24 py-24">
        <div className="relative grid max-w-3xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-3">
          <div className="absolute right-80 top-10 hidden h-4 w-screen bg-light-grey lg:flex"></div>
          <div className="absolute bottom-10 left-10 hidden h-screen w-4 bg-light-grey md:flex lg:hidden"></div>
          {features.map((feature) => {
            return (
              <div
                key={feature.key}
                className="lg:flex-start flex-center z-10 flex-col gap-10 md:flex-row md:gap-20 lg:flex-col lg:gap-10"
              >
                <img
                  className="h-24 w-24"
                  src={feature.icon}
                  alt={feature.key}
                />
                <div className="flex-center md:flex-start flex-col gap-6">
                  <h4 className="heading-4">{feature.title}</h4>
                  <p className="text-style text-center md:text-start">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* services section */}
      <section className="container -z-10 mb-24 py-24">
        <div className="flex flex-col gap-40">
          <div className="flex-between relative flex-col gap-14 lg:flex-row-reverse">
            <div className="flex-center flex-row">
              <div className="aspect-square max-w-[28rem] overflow-hidden rounded-full">
                <img
                  className="h-full w-full scale-110 object-cover"
                  src={services[0].image}
                  alt={services[0].key}
                />
              </div>
              <div className="absolute -mr-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex"></div>
            </div>
            <div className="lg:flex-start flex-center flex max-w-[40rem] flex-col gap-6 text-center lg:max-w-[32rem] lg:text-start">
              <h2 className="heading-2 max-w-[30rem]">{services[0].title}</h2>
              <p className="text-style mb-4">{services[0].description}</p>
              <Button title={'learn more'} to={''} />
            </div>
          </div>

          <div className="flex-between relative flex-col gap-14 lg:flex-row">
            <div className="flex-center flex-row">
              <div className="aspect-square max-w-[28rem] overflow-hidden rounded-full">
                <img
                  className="h-full w-full scale-110 object-cover"
                  src={services[1].image}
                  alt={services[1].key}
                />
              </div>
              <div className="absolute -ml-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex"></div>
            </div>
            <div className="lg:flex-start flex-center flex max-w-[40rem] flex-col gap-6 text-center lg:max-w-[32rem] lg:text-start">
              <h2 className="heading-2 max-w-[30rem]">{services[1].title}</h2>
              <p className="text-style mb-4">{services[1].description}</p>
              <Button title={'learn more'} to={''} />
            </div>
            <div className="absolute -left-[34rem] h-[28rem] w-[28rem] rounded-full bg-light-grey"></div>
          </div>

          <div className="flex-between relative flex-col gap-14 lg:flex-row-reverse">
            <div className="flex-center flex-row">
              <div className="aspect-square max-w-[28rem] overflow-hidden rounded-full">
                <img
                  className="h-full w-full scale-110 object-cover"
                  src={services[2].image}
                  alt={services[2].key}
                />
              </div>
              <div className="absolute -mr-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex"></div>
            </div>
            <div className="lg:flex-start flex-center flex max-w-[40rem] flex-col gap-6 text-center lg:max-w-[32rem] lg:text-start">
              <h2 className="heading-2 max-w-[30rem]">{services[2].title}</h2>
              <p className="text-style mb-4">{services[2].description}</p>
              <Button title={'learn more'} to={''} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
