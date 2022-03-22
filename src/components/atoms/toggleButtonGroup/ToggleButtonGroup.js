import React from 'react'
import { styled } from '@mui/material/styles'
import { ToggleButtonGroup } from '@mui/material'

export const ToggleButtonGroupStyled = styled(ToggleButtonGroup, {
    name: 'ToggleButtonStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ToggleButtonGroupWS = ({ children, ...rest }) => {
    return (
        <ToggleButtonGroupStyled {...rest}>{children}</ToggleButtonGroupStyled>
    )
}

export default ToggleButtonGroupWS
