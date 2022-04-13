import React from 'react'
import Menu from '@mui/material/Menu'
import { useStyle } from '../../../hooks/useStyle'


const MenuWS = ({ children, ...rest }) => {
    const MenuStyled = useStyle('MenuStyled', Menu, null)
    return <MenuStyled {...rest}>{children}</MenuStyled>
}

export default MenuWS
