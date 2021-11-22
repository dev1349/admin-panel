import React from 'react'
import { styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const MenuIconStyled = styled(MenuIcon, {
    name: 'MenuIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const MenuIconWS = props => {
    return <MenuIconStyled {...props} />
}

export default MenuIconWS
