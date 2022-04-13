import React from 'react'
import IconButton from '@mui/material/IconButton'
import { useStyle } from '../../../../hooks/useStyle'
import IconButtonStyle from './IconButtonStyle'


const WSIconButton = ({ children, ...rest }) => {
    const IconButtonStyled = useStyle('IconButtonStyled', IconButton, IconButtonStyle, 'menuButton')
    return <IconButtonStyled {...rest}>{children}</IconButtonStyled>
}

export default WSIconButton
