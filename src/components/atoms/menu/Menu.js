import React from 'react'
import Menu from '@mui/material/Menu'
import { useStyle } from '../../../hooks/useStyle'


const MenuWS = ({ children, ...rest }) => {
    const MenuStyled = useStyle('MenuStyle', Menu)
    return <MenuStyled {...rest}>{children}</MenuStyled>
}

export default MenuWS
