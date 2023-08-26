import { Button, ContentColumn, CoreValues } from '@/components'
import { careerContents, careersList } from '@/constants'

export const metadata = {
  title: 'Careers Page',
}

type CareersListProps = {
  title: string
  location: string
}

const CareersList = (props: CareersListProps) => {
  const { title, location } = props

  return (
    <div className="flex-between flex-col gap-4 bg-snow px-10 py-8 md:flex-row">
      <span className="flex-center md:flex-start flex-col gap-2 text-center md:text-start">
        <h4 className="heading-4">{title}</h4>
        <p className="text-style text-dark-navy">{location}</p>
      </span>
      <Button title={'apply'} href={'#'} className="w-full md:w-[11.25rem]">
        Apply
      </Button>
    </div>
  )
}

const CareersPage = () => {
  return (
    <>
      {/* Contents section */}
      <section className="container mb-24 py-24">
        <div className="flex flex-col gap-40">
          {careerContents.map((content, index) => {
            return (
              <ContentColumn
                key={content.key}
                content={content}
                reversed={index % 2 === 0 ? true : false}
                button={{ title: 'say hello', href: '#' }}
              />
            )
          })}
        </div>
      </section>
      {/* Core values section */}
      <section className="flex-center container mb-32 flex-col gap-24">
        <h2 className="heading-2">Why join us?</h2>
        <CoreValues />
      </section>
      {/* Careers list section */}
      <section className="container mb-40 flex flex-col gap-6">
        {careersList.map((career) => {
          return (
            <CareersList
              key={career.key}
              title={career.title}
              location={career.location}
            />
          )
        })}
      </section>
    </>
  )
}

export default CareersPage
