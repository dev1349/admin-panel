import React from 'react'
import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

const MultilineFieldStyled = styled(TextField, {
    name: 'MultilineFieldStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTextField = props => {
    return <MultilineFieldStyled {...props} multiline rows={4} />
}

export default WSTextField
