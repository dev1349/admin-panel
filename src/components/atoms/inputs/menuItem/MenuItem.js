import React from 'react'
import { MenuItem } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const MenuItemStyled = createStyled('MenuItemStyle', MenuItem, ['forTable', 'dialogMenuItem'])

const WSMenuItem = ({ children, ...rest }) => {
    return <MenuItemStyled {...rest}>{children}</MenuItemStyled>
}

export default WSMenuItem
