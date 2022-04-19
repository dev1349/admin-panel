import React from 'react'
import { MenuItem } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'


const WSMenuItem = ({ children, ...rest }) => {
    const MenuItemStyled = useStyle('MenuItemStyle', MenuItem, 'forTable')
    return <MenuItemStyled {...rest}>{children}</MenuItemStyled>
}

export default WSMenuItem
