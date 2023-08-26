import { ContentColumn, Accordion, CoreValues } from '@/components'
import { aboutContents, frequentlyAskedQuestions } from '@/constants'

export const metadata = {
  title: 'About Page',
}

const AboutPage = () => {
  return (
    <>
      {/* Contents section */}
      <section className="container mb-24 py-24">
        <div className="flex flex-col gap-40">
          {aboutContents.map((content, index) => {
            return (
              <ContentColumn
                key={content.key}
                content={content}
                reversed={index % 2 === 0 ? true : false}
              />
            )
          })}
        </div>
      </section>
      {/* Core values section */}
      <section className="flex-center container mb-32 flex-col gap-24">
        <h2 className="heading-2">Our values</h2>
        <CoreValues />
      </section>
      {/* FAQs section */}
      <section className="flex-center container mb-40 flex-col gap-16">
        <h2 className="heading-2">FAQs</h2>
        {frequentlyAskedQuestions.map((faq) => {
          return (
            <div
              key={faq.key}
              className="flex-center lg:flex-between w-full flex-col gap-8 lg:flex-row lg:items-start"
            >
              <h3 className="heading-3 w-[22rem] px-3 text-center lg:text-start">
                {faq.title}
              </h3>
              <Accordion contents={faq.contents} />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default AboutPage
