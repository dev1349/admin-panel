import React from 'react'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

export const TextFieldStyled = styled(TextField, {
    shouldForwardProp: prop => prop !== 'forTable',
    name: 'TextFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TextFieldWS = props => {
    return <TextFieldStyled {...props} />
}

export default TextFieldWS
