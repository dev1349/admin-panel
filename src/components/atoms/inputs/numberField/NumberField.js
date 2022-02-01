import React from 'react'
import { TextFieldStyled } from '../textField/TextField'

const NumberFieldWS = props => {
    return (
        <TextFieldStyled
            type={'text'}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            {...props}
        />
    )
}

export default NumberFieldWS
