import React from 'react'
import { ToggleButton } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'
import ToggleButtonTextStyle from './ToggleButtonTextStyle'


const ToggleButtonWS = ({ icon, text, ...rest }) => {
    const ToggleButtonWithTextStyled = useStyle('ToggleButtonWithTextStyled', ToggleButton, null)
    const ToggleButtonTextStyled = useStyle('ToggleButtonTextStyled', 'div', ToggleButtonTextStyle)
    return (
        <ToggleButtonWithTextStyled {...rest}>
            {icon}
            <ToggleButtonTextStyled>{text}</ToggleButtonTextStyled>
        </ToggleButtonWithTextStyled>
    )
}

export default ToggleButtonWS
