import Link from 'next/link'

type Props = {
  title: string
  to: string
  className?: string
  onClick?: any
}

const Button = ({ title, to, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary w-[11.25rem] h-[3.3125rem] flex-center ${className}`}
    >
      <Link
        href={to}
        className="text-style text-white font-space-mono font-bold capitalize"
      >
        {title}
      </Link>
    </button>
  )
}

export default Button
