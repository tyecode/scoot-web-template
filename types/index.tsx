import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
    title: string;
    style?: string;
    buttonClick?:MouseEventHandler<HTMLButtonElement>
}


export interface ServiceDataProps {
  img?: string;
  icon?: string;
  title: string;
  description: string;
}