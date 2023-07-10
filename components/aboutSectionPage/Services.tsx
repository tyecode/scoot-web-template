import React from 'react'
import ServiceItems from './ServiceItems'
import { aboutData } from './aboutDataSource/AboutServiceData'

const Services = () => {
  return (
      <div>
          {aboutData.map((data) => (           
              <ServiceItems
                  image={data.image}
                  arrow_icon={data.arrow_icon}
                  title={data.title}
                  desc={data.desc}
              />
          ))}
    </div>
  )
}

export default Services