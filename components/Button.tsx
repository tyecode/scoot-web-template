import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  title: string
  href: string
  className?: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const { children, title, href, className, onClick } = props

  return (
    <button
      title={title}
      onClick={onClick}
      className={`flex-center h-[3.3125rem] w-[11.25rem] cursor-pointer bg-primary duration-150 hover:border-2 hover:border-primary hover:bg-transparent ${className}`}
    >
      <Link
        href={href}
        className="flex-center text-style h-full w-full font-space-mono font-bold capitalize text-white duration-150 hover:text-primary"
      >
        {children}
      </Link>
    </button>
  )
}

export default Button
