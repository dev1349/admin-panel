import React from 'react'
import { ToggleButtonGroup } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const ToggleButtonGroupStyled = createStyled('ToggleButtonGroupStyle', ToggleButtonGroup)

const ToggleButtonGroupAtom = ({ children, ...rest }) => {
    return <ToggleButtonGroupStyled {...rest}>{children}</ToggleButtonGroupStyled>
}

export default ToggleButtonGroupAtom
