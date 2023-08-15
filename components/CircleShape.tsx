import React from 'react'
type CircleProps = {
    style: string
}
const CircleShape = ({style}:CircleProps) => {
  return (
      <div className={`${style} aspect-square w-16 rounded-full border border-x-[.188rem] border-y-[.188rem]`}></div>
  )
}

export default CircleShape