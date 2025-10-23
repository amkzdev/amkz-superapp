import React from 'react'
import { IButtonPropsType } from './props.type'

export const Button = (props: IButtonPropsType) => {
    return (
        <button {...props} />
    )
}
