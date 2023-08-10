import { Hero, Button } from '@/components'
import { features, services } from '@/constants'

const Home = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Hero />
      {/* features section */}
      <section className="container flex-center py-24 mt-24 relative -z-10">
        <div className="max-w-3xl grid lg:max-w-none lg:grid-cols-3 grid-cols-1 gap-10 relative">
          <div className="bg-light-grey w-screen h-4 absolute top-10 right-80 lg:flex hidden"></div>
          <div className="bg-light-grey w-4 h-screen absolute bottom-10 left-10 lg:hidden md:flex hidden"></div>
          {features.map((feature) => {
            return (
              <div
                key={feature.key}
                className="lg:flex-start lg:flex-col md:flex-row flex-center flex-col lg:gap-10 md:gap-20 gap-10 z-10"
              >
                <img
                  className="w-24 h-24"
                  src={feature.icon}
                  alt={feature.key}
                />
                <div className="flex-center md:flex-start flex-col gap-6">
                  <h4 className="heading-4">{feature.title}</h4>
                  <p className="text-style md:text-start text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* services section */}
      <section className="container py-24 mb-24 -z-10">
        <div className="flex flex-col gap-40">
          <div className="flex-between lg:flex-row-reverse flex-col gap-14 relative">
            <div className="flex-center flex-row">
              <div className="max-w-[28rem] aspect-square rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover scale-110"
                  src={services[0].image}
                  alt={services[0].key}
                />
              </div>
              <div className="w-[28rem] aspect-square bg-light-grey rounded-full absolute -mr-[65rem] md:flex hidden"></div>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-[32rem] max-w-[40rem] lg:flex-start flex-center lg:text-start text-center">
              <h2 className="heading-2 max-w-[30rem]">{services[0].title}</h2>
              <p className="text-style mb-4">{services[0].description}</p>
              <Button title={'learn more'} to={''} />
            </div>
          </div>

          <div className="flex-between lg:flex-row flex-col gap-14 relative">
            <div className="flex-center flex-row">
              <div className="max-w-[28rem] aspect-square rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover scale-110"
                  src={services[1].image}
                  alt={services[1].key}
                />
              </div>
              <div className="w-[28rem] aspect-square bg-light-grey rounded-full absolute -ml-[65rem] md:flex hidden"></div>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-[32rem] max-w-[40rem] lg:flex-start flex-center lg:text-start text-center">
              <h2 className="heading-2 max-w-[30rem]">{services[1].title}</h2>
              <p className="text-style mb-4">{services[1].description}</p>
              <Button title={'learn more'} to={''} />
            </div>
            <div className="w-[28rem] h-[28rem] bg-light-grey rounded-full absolute -left-[34rem]"></div>
          </div>

          <div className="flex-between lg:flex-row-reverse flex-col gap-14 relative">
            <div className="flex-center flex-row">
              <div className="max-w-[28rem] aspect-square rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover scale-110"
                  src={services[2].image}
                  alt={services[2].key}
                />
              </div>
              <div className="w-[28rem] aspect-square bg-light-grey rounded-full absolute -mr-[65rem] md:flex hidden"></div>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-[32rem] max-w-[40rem] lg:flex-start flex-center lg:text-start text-center">
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
