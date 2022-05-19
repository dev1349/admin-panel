import React from 'react'
import IconButton from '@mui/material/IconButton'
import { createStyled } from '../../../../services/style/createStyled'

const IconButtonStyled = createStyled('IconButtonStyle', IconButton, [
    'menuButton',
    'dialogButton',
])

const WSIconButton = ({ children, ...rest }) => {
    return <IconButtonStyled {...rest}>{children}</IconButtonStyled>
}

export default WSIconButton
