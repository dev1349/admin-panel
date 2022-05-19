import React from 'react'
import TextField from '../textField/TextField'

const NumberFieldWS = props => {
    return (
        <TextField
            type={'text'}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            {...props}
        />
    )
}

export default NumberFieldWS
