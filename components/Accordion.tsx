'use client'

import React from 'react'
import dynamic from 'next/dynamic'

interface AccordionProps {
  contents: {
    title: string
    description: string
  }[]
}

const Accordion = (props: AccordionProps) => {
  const { contents } = props

  return (
    <div className="flex w-full flex-1 flex-col gap-6">
      {contents.map((content, index) => {
        const [isActive, setActive] = React.useState<boolean>(false)

        return (
          <div
            key={index}
            className="flex-start w-full cursor-pointer flex-col gap-6 bg-snow px-10 py-8 duration-150 hover:bg-light-yellow"
            onClick={() => setActive(!isActive)}
          >
            <span className="flex-between w-full flex-row">
              <h4 className="heading-4">{content.title}</h4>
              {isActive ? (
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 11L10 3L18 11" stroke="#FCB72B" strokeWidth="3" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2L10 10L18 2" stroke="#FCB72B" strokeWidth="3" />
                </svg>
              )}
            </span>
            {isActive && (
              <p className="text-style text-dark-navy">{content.description}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default dynamic(() => Promise.resolve(Accordion), { ssr: false })
