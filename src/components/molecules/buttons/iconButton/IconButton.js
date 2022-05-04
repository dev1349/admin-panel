import React from 'react'
import IconButton from '@mui/material/IconButton'
import { useStyle } from '../../../../hooks/useStyle'


const WSIconButton = ({ children, ...rest }) => {
    const IconButtonStyled = useStyle('IconButtonStyle', IconButton, 'menuButton')
    return <IconButtonStyled {...rest}>{children}</IconButtonStyled>
}

export default WSIconButton
