import React from 'react'
import { styled } from '@mui/material/styles'
import Menu from '@mui/material/Menu'

const MenuStyled = styled(Menu, {
    name: 'MenuStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const MenuWS = ({ children, ...rest }) => {
    return <MenuStyled {...rest}>{children}</MenuStyled>
}

export default MenuWS
