import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'
import { TextField } from '@mui/material'

const EmailField = props => {
    const TextFieldStyled = useStyle('TextFieldStyle', TextField, [
        'forTable',
        'forFilter',
        'dateForFilter',
        'clientSearch'
    ])
    return <TextFieldStyled type={'email'} {...props} />
}

export default EmailField
