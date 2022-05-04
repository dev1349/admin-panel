import React from 'react'
import { ToggleButton } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const ToggleButtonWS = ({ children, ...rest }) => {
    const ToggleButtonStyled = useStyle('ToggleButtonStyle', ToggleButton)
    return <ToggleButtonStyled {...rest}>{children}</ToggleButtonStyled>
}

export default ToggleButtonWS
