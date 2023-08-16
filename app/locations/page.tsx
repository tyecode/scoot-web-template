import React from 'react'
import { shareHero } from '@/constants'
import { ShareHero } from '@/components'


export const metadata = {
  title: 'Locations Page',
}

const LocationsPage = () => {
  return (
    <>
      <ShareHero title={shareHero[2].title} image={shareHero[2].image} />
    </>
  )
}

export default LocationsPage
