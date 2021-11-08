import React from 'react'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

export const TextFieldStyled = styled(TextField, {
    name: 'TextFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTextField = props => {
    return <TextFieldStyled {...props} />
}

export default WSTextField
