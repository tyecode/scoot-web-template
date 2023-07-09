import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, style, buttonClick}:CustomButtonProps) => {
  return (
      <button className={`${style}`} >{ title}</button>
  )
}

export default CustomButton;