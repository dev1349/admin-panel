import React from 'react'
import { MenuItem, styled } from '@mui/material'

const MenuItemStyled = styled(MenuItem, {
    name: 'MenuItemStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSMenuItem = ({ children, ...rest }) => {
    return <MenuItemStyled {...rest}>{children}</MenuItemStyled>
}

export default WSMenuItem
