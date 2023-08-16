"use client"
import React from 'react'
import { ArrowSvg, ShareHero, ThumnailInfo } from '@/components'
import { shareHero } from '@/constants'
import { aboutPageServices, thumbnailInfo, accordionInfo } from '@/constants'
import Image from 'next/image'




export const metadata = {
  title: 'About Page',
}

type AccordionProps = {
  object: {
    title: string,
    description: string,
  }
}

const Accordion = ({ object }: AccordionProps) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const { title, description } = object;
  return (
    <div className='p-4 cursor-pointer ease-out duration-300 hover:bg-[#FFF4DF] bg-[#e5ecf4] flex flex-col' onClick={()=> setIsActive(isActive => !isActive)}>
      <div className="flex flex-between gap-3 ">
        <span className='heading-4'>{title}</span>
        <span className={isActive ? 'rotate-80' : 'rotate-180'}>
          <svg width="20" height="20" viewBox="0 0 50 33" fill='none' xmlns="http://www.w3.org/2000/svg">
          <rect x="24.7019" y="0.583817" width="10.1828" height="35.1769" transform="rotate(44.6053 24.7019 0.583817)" fill="#FCB72B"/>
          <rect x="17.9258" y="7.42159" width="10.1828" height="35.1769" transform="rotate(-45 17.9258 7.42159)" fill="#FCB72B"/>
        </svg>
        </span>
      </div>
      {isActive && (
        <p className='mt-4 text-style ease-out duration-300'>{description}</p>
      )
        }
    </div>
  )
};




const AboutPage = () => {
  return (
    <>
      <ShareHero title={shareHero[0].title} image={shareHero[0].image} /> 
      {/* about service section */}
      <section className="container overflow-x-auto no-scrollbar -z-10 mb-2 py-24">
        <div className="flex relative flex-col-reverse md:items-center lg:flex-row lg:items-center gap-10">
          <article className="lg:flex-start flex-center flex max-w-[40rem] flex-col gap-6 text-center lg:max-w-[32rem] lg:text-start">
        <h2 className="heading-2 max-w-[30rem]">{aboutPageServices[0].title}</h2>
        <p className="text-style mb-4">{aboutPageServices[0].description}</p>
          </article>
          <div className="flex-center flex-row">
            <span className="relative aspect-square max-w-[28rem] overflow-hidden rounded-full">
          <Image
            src={aboutPageServices[0].image}
            alt={aboutPageServices[0].key}
            width={500}
            height={500}
            loading="lazy"
            className="h-full w-full object-cover"
          />
            </span>
            <span className='absolute -mr-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex'></span>
            
            
            </div>
              <div className="absolute rotate-180 mt-28 -right-48 z-10 top-0">
              <ArrowSvg />
              </div>
        </div>
      </section>
      
      <section className="container overflow-scroll no-scrollbar  -z-10 mb-24 py-24">
        <div className="flex relative flex-col-reverse md:items-center lg:flex-row-reverse lg:items-center gap-10">
          <article className="lg:flex-start flex-center flex max-w-[40rem] flex-col gap-6 text-center lg:max-w-[32rem] lg:text-start">
        <h2 className="heading-2 max-w-[30rem]">{aboutPageServices[0].title}</h2>
        <p className="text-style mb-4">{aboutPageServices[0].description}</p>
          </article>
          <div className="flex-center flex-row">
            <span className='absolute mr-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex'></span>
              <div className="absolute rotate-80 mt-28 -left-48 z-10 top-0">
              <ArrowSvg />
              </div>
            <span className="relative aspect-square max-w-[28rem] overflow-hidden rounded-full">
          <Image
            src={aboutPageServices[0].image} 
            alt={aboutPageServices[0].key}
            width={500}
            height={500}
            loading="lazy"
            className="h-full w-full object-cover"
          />
            </span> 
            </div>
        </div>
      </section>
      {/* thumnail section */}
      <section className="container -z-10 py-24">
        
        <div className="flex flex-col justify-center items-center">
          <h1 className='heading-1'>Our values</h1>
          <div className="mt-8 lg:flex md:px-4 gap-5">
            {thumbnailInfo.map((value) => <ThumnailInfo object={value} />)}
          </div>
        </div>
      </section>
      
      {/* accordion one section */}
      <section className='container -z-10 mb-2 py-24'>
        <h1 className='heading-1 text-center mb-8'>FAQs</h1>
        <div className="max-w-full  mx-auto flex flex-col items-center p-4">
          <div className="w-full gap-6 lg:flex">
          <h1 className='heading-1 text-center flex-none mt-4'>How it works</h1>   
          <div className="flex flex-col gap-6 mt-8 w-full">
          {accordionInfo[0].dataOne?.map((value) => <Accordion object={value}/>)}
          </div>
          </div>
          </div>
      </section>

      {/* accordion two section */}
      <section className='container -z-10 mb-8 py-4'>
        <div className="max-w-full mb-8  mx-auto flex flex-col items-center p-4">
          <div className="w-full gap-6 lg:flex">
          <h1 className='heading-1 text-center flex-none mt-4'>Safe driving</h1>   
          <div className="flex flex-col gap-6 mt-8 w-full">
          {accordionInfo[1].dataTwo?.map((value) => <Accordion object={value}/>)}
          </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default AboutPage
