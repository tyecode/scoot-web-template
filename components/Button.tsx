import Link from 'next/link'

type Props = {
  title: string
  to: string
  className?: string
  onClick?: VoidFunction
}

const Button = ({ title, to, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex-center h-[3.3125rem] w-[11.25rem] bg-primary ${className}`}
    >
      <Link
        href={to}
        className="text-style font-space-mono font-bold capitalize text-white"
      >
        {title}
      </Link>
    </button>
  )
}

export default Button
