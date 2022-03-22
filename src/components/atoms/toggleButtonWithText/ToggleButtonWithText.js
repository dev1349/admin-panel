import React from 'react'
import { styled } from '@mui/material/styles'
import { ToggleButton } from '@mui/material'

export const ToggleButtonWithTextStyled = styled(ToggleButton, {
    name: 'ToggleButtonWithTextStyled',
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
        <ToggleButtonWithTextStyled {...rest}>
            {icon}
            <ToggleButtonTextStyled>{text}</ToggleButtonTextStyled>
        </ToggleButtonWithTextStyled>
    )
}

export default ToggleButtonWS
