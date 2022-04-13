import React from 'react'
import { ToggleButton } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const ToggleButtonWS = ({ children, ...rest }) => {
    const ToggleButtonStyled = useStyle('ToggleButtonStyled', ToggleButton, null)
    return <ToggleButtonStyled {...rest}>{children}</ToggleButtonStyled>
}

export default ToggleButtonWS
