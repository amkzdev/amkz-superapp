import React from 'react'
import { IInputPropsType } from './props.type'

export const Input = (props:IInputPropsType) => {
  return (
    <input  {...props}/>
  )
}
