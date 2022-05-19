import React from 'react'
import { ToggleButton } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const ToggleButtonStyled = createStyled('ToggleButtonStyle', ToggleButton)

const ToggleButtonWS = ({ children, ...rest }) => {
    return <ToggleButtonStyled {...rest}>{children}</ToggleButtonStyled>
}

export default ToggleButtonWS
