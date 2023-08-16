

import { shareHero, careerPageServices, thumnailCareerPage, listServices } from '@/constants'
import { ArrowSvg, Button, ShareHero, ThumnailInfo } from '@/components'
import Image from 'next/image'


export const metadata = {
  title: 'Careers Page',
}

type ListServicesProps = {
  object: {
    title: string,
    name: string
  }
};

const ListServies = ({ object }: ListServicesProps) => {
  const { title, name } = object
  return (
      <div className=" bg-light-grey mb-4 py-8 px-8 md:flex-between">
        <div className=" flex flex-col text-center mb-4">
          <h4 className='heading-4 let lett mb-2'>{title}</h4>
          <p className='text-style'>{name}</p>
        </div>
        {/* button */} 
        <Button title='apply' href='#' className='w-full md:w-[11rem]'>Apply</Button>
      </div>
  
  );

}


const CareersPage = () => {
  return (
    <>
      <ShareHero title={shareHero[1].title} image={shareHero[1].image} />
      
      <section className='container overflow-x-auto lg:flex-start md:flex md:flex-center  no-scrollbar py-24 relative'>
        <div className="lg:flex-row-reverse flex flex-col items-center relative">
        <div className="flex-center flex-row  relative">
          <div className="absolute z-10 rotate-180 bottom-10 lg:hidden">
          <ArrowSvg/>
          </div>
        <span className="relative aspect-square max-w-[28rem] overflow-hidden rounded-full">
          <Image
            src={careerPageServices.image}
            alt={careerPageServices.key}
            width={500}
            height={500}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </span>
        <span
          className='absolute -mr-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex '></span>
        </div>
        <div className="max-w-[28rem] w-full flex items-center flex-col gap-8 lg:mr-8 lg:flex-start ">
          <h1 className='heading-3 text-center lg:text-start tex-center'>{careerPageServices.title}</h1>
            <p className='text-style lg:text-start text-center'>{careerPageServices.description}</p>
            <Button title='hello' href='#'>Say Hello</Button>
        </div>
        </div>
      </section>
      {/* Thumnails section */}
      <section className="container -z-10 py-24">
        
        <div className="flex flex-col justify-center items-center">
          <h1 className='heading-1'>Our values</h1>
          <div className="mt-8 lg:flex md:px-4 gap-5">
            {thumnailCareerPage.map((value) => <ThumnailInfo object={value} />)}
          </div>
        </div>
      </section>
      {/* list of services */}
      <section className="container -z-10 py-24">
        {listServices.map((service) => <ListServies object={service}/>)}
      </section>
    </>
  )
}

export default CareersPage
