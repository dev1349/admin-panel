import React from 'react'
import { ToggleButtonGroup } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const ToggleButtonGroupWS = ({ children, ...rest }) => {
    const ToggleButtonGroupStyled = useStyle('ToggleButtonGroupStyle', ToggleButtonGroup)
    return (
        <ToggleButtonGroupStyled {...rest}>{children}</ToggleButtonGroupStyled>
    )
}

export default ToggleButtonGroupWS
