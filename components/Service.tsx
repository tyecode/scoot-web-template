import React from 'react'
import { serviceData } from './data/serviceData'
import ServiceDetail from './ServiceDetail'

const Service = () => {
  return (
      <div>
          {serviceData.map((items) => 
              <ServiceDetail
                  img={items.img}
                  title={items.title}
                  description={items.description}
              />
          )}
      </div>
  )
}

export default Service