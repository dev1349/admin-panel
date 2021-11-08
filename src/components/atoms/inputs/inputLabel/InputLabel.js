import React from 'react'
import { styled } from '@mui/material'
import { InputLabel } from '@mui/material'

const InputLabelStyled = styled(InputLabel, {
    name: 'InputLabelStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSInputLabel = ({ children, ...rest }) => {
    return <InputLabelStyled {...rest}>{children}</InputLabelStyled>
}

export default WSInputLabel
