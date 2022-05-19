import React from 'react'
import Menu from '@mui/material/Menu'
import { createStyled } from '../../../services/style/createStyled'

const MenuStyled = createStyled('MenuStyle', Menu)

const MenuWS = ({ children, ...rest }) => {
    return <MenuStyled {...rest}>{children}</MenuStyled>
}

export default MenuWS
