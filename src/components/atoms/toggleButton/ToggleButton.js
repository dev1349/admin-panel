import React from 'react'
import { styled } from '@mui/material/styles'
import { ToggleButton } from '@mui/material'

export const ToggleButtonStyled = styled(ToggleButton, {
    name: 'ToggleButtonStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ToggleButtonWS = ({ children, ...rest }) => {
    return <ToggleButtonStyled {...rest}>{children}</ToggleButtonStyled>
}

export default ToggleButtonWS
