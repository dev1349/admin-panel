import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'
import { TextField } from '@mui/material'

const PhoneField = props => {
    const TextFieldStyled = useStyle('TextFieldStyle', TextField, [
        'forTable',
        'forFilter',
        'dateForFilter',
        'clientSearch'
    ])
    return <TextFieldStyled type={'phone'} {...props} />
}

export default PhoneField
