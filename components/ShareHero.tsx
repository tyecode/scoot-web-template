import React from 'react'
import CircleShape from './CircleShape'

type ShareHeroProps = {
    title: string,
    image: string,

}


const ShareHero = ({title, image}:ShareHeroProps) => {
  return (
      <div className="h-[200px] mt-24 relative flex justify-between items-center">
          <img src={image} alt="hero image" className='absolute w-full h-full object-cover' />
        <div className="container h-full md:flex relative flex justify-center items-center md:justify-start">
          <h1 className='text-white heading-1'>{title}</h1>
        </div>
          <div className="md:flex gap-8 absolute -right-8 hidden">
           <CircleShape style='border-light'/>
           <CircleShape style='border-light'/>
           <CircleShape style='bg-light'/>
          </div>
      </div> 
  )
}

export default ShareHero