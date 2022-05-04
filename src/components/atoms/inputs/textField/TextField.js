import React from 'react'
import { TextField } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'

const TextFieldWS = props => {
    const TextFieldStyled = useStyle('TextFieldStyle', TextField, [
        'forTable',
        'forFilter',
        'dateForFilter',
        'clientSearch'
    ])
    return <TextFieldStyled {...props} />
}

export default TextFieldWS
