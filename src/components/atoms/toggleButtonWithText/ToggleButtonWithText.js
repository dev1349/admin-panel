import React from 'react'
import { ToggleButton } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const ToggleButtonWS = ({ icon, text, ...rest }) => {
    const ToggleButtonWithTextStyled = useStyle('ToggleButtonWithTextStyle', ToggleButton)
    const ToggleButtonTextStyled = useStyle('ToggleButtonTextStyle', 'div')
    return (
        <ToggleButtonWithTextStyled {...rest}>
            {icon}
            <ToggleButtonTextStyled>{text}</ToggleButtonTextStyled>
        </ToggleButtonWithTextStyled>
    )
}

export default ToggleButtonWS
