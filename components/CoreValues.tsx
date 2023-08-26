import Image from 'next/image'
import { coreValues } from '@/constants'

const CoreValues = () => {
  return (
    <div className="flex-center w-full flex-col gap-32 lg:flex-row">
      {coreValues.map((value) => {
        return (
          <div
            key={value.key}
            className="flex-center relative w-full flex-col gap-20"
          >
            <div className="flex-center relative">
              <div className="relative aspect-square w-60 overflow-hidden rounded-full">
                <Image
                  src={value.image}
                  alt={`${value.title} Image`}
                  fill={true}
                  sizes="100wh"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="flex-center heading-4 absolute -bottom-12 aspect-square w-24 rounded-full bg-primary">
                {value.key}
              </span>
            </div>

            <article className="flex-center flex-col gap-7">
              <h3 className="heading-3">{value.title}</h3>
              <p className="text-style max-w-xl text-center">
                {value.description}
              </p>
            </article>
          </div>
        )
      })}
    </div>
  )
}

export default CoreValues
