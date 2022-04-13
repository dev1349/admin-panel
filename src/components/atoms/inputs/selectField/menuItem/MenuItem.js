import React from 'react'
import { MenuItem } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'
import MenuItemStyle from './MenuItemStyle'


const WSMenuItem = ({ children, ...rest }) => {
    const MenuItemStyled = useStyle('MenuItemStyled', MenuItem, MenuItemStyle, 'forTable')
    return <MenuItemStyled {...rest}>{children}</MenuItemStyled>
}

export default WSMenuItem
