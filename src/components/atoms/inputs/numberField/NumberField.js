import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'
import { TextField } from '@mui/material'

const NumberFieldWS = props => {
    const TextFieldStyled = useStyle('TextFieldStyle', TextField, [
        'forTable',
        'forFilter',
        'dateForFilter',
        'clientSearch'
    ])
    return (
        <TextFieldStyled
            type={'text'}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            {...props}
        />
    )
}

export default NumberFieldWS
