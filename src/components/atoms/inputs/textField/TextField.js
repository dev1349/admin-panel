import React from 'react'
import { TextField } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TextFieldStyled = createStyled('TextFieldStyle', TextField, [
    'forTable',
    'forFilter',
    'dateForFilter',
    'clientSearch',
])

const TextFieldWS = props => {
    return <TextFieldStyled {...props} />
}

export default TextFieldWS
