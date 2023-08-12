import Link from 'next/link'

type Props = {
  children: React.ReactNode
  title: string
  href: string
  className?: string
  onClick?: VoidFunction
}

const Button = (Props: Props) => {
  const { children, title, href, className, onClick } = Props

  return (
    <button
      title={title}
      onClick={onClick}
      className={`flex-center h-[3.3125rem] w-[11.25rem] cursor-pointer bg-primary ${className}`}
    >
      <Link
        href={href}
        className="flex-center text-style h-full w-full font-space-mono font-bold capitalize text-white"
      >
        {children}
      </Link>
    </button>
  )
}

export default Button
