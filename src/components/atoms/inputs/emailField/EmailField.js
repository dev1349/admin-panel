import React from 'react'
import { TextFieldStyled } from '../textField/TextField'

const EmailField = props => {
    return <TextFieldStyled type={'email'} {...props} />
}

export default EmailField
