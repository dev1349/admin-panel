import React from 'react'
import { ToggleButton } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const ToggleButtonWithTextStyled = createStyled('ToggleButtonWithTextStyle', ToggleButton)
const ToggleButtonTextStyled = createStyled('ToggleButtonTextStyle', 'div')

const ToggleButtonWS = ({ icon, text, ...rest }) => {
    return (
        <ToggleButtonWithTextStyled {...rest}>
            {icon}
            <ToggleButtonTextStyled>{text}</ToggleButtonTextStyled>
        </ToggleButtonWithTextStyled>
    )
}

export default ToggleButtonWS
