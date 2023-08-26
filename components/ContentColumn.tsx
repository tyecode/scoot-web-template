'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { Button } from '@/components'

type ContentColumnProps = {
  content: {
    key: string
    image: string
    title: string
    description: string
  }
  reversed?: boolean
  button?: {
    title: string
    href: string
  }
}

const ContentCol = (props: ContentColumnProps) => {
  const { content, reversed, button } = props
  const pathname = usePathname()

  return (
    <div
      className={
        reversed
          ? 'flex-between relative flex-col gap-14 lg:flex-row-reverse'
          : 'flex-between relative flex-col gap-14 lg:flex-row'
      }
    >
      <div className="flex-center flex-row">
        <span className="relative aspect-square max-w-[28rem] overflow-hidden rounded-full">
          <Image
            src={content.image}
            alt={content.key}
            width={500}
            height={500}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </span>
        <span
          className={
            reversed
              ? 'absolute -mr-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex'
              : 'absolute -ml-[65rem] hidden aspect-square w-[28rem] rounded-full bg-light-grey md:flex'
          }
        ></span>
      </div>
      <article className="lg:flex-start flex-center flex max-w-[40rem] flex-col gap-6 text-center lg:max-w-[32rem] lg:text-start">
        <h2 className="heading-2 max-w-[30rem]">{content.title}</h2>
        <p className="text-style mb-4">{content.description}</p>
        {button && (
          <Button title={button.title + 'button'} href={button.href}>
            {button.title}
          </Button>
        )}
      </article>

      <span
        className={
          reversed
            ? pathname === '/about'
              ? 'absolute -right-40 bottom-8 -scale-y-100'
              : 'absolute -bottom-2 -right-40'
            : 'absolute -left-[35rem] top-4 -scale-x-100'
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="735"
          height="115"
          viewBox="0 0 735 115"
          fill="none"
          className="hidden lg:flex"
        >
          <path
            d="M734.969 8H176.854V107.369H0.591125"
            stroke="#FCB72B"
            strokeWidth="15"
            strokeLinejoin="bevel"
          />
        </svg>
        <svg
          className="-ml-[.5rem] -mt-[3.25rem] hidden lg:flex"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="88"
          viewBox="0 0 50 88"
          fill="none"
        >
          <path
            d="M44.6394 82.6394L6.21313 44.2131L44.6394 5.78687"
            stroke="#FCB72B"
            strokeWidth="15"
            strokeLinejoin="bevel"
          />
        </svg>
      </span>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ContentCol), { ssr: false })
