import React from 'react'
import { styled } from '@mui/material/styles'
import { ToggleButton } from '@mui/material'

export const ToggleButtonStyled = styled(ToggleButton, {
    name: 'ToggleButtonStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

export const ToggleButtonTextStyled = styled('div', {
    name: 'ToggleButtonTextStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ToggleButtonWS = ({ icon, text, ...rest }) => {
    return (
        <ToggleButtonStyled {...rest}>
            {icon}
            <ToggleButtonTextStyled>{text}</ToggleButtonTextStyled>
        </ToggleButtonStyled>
    )
}

export default ToggleButtonWS
