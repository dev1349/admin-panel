import React from 'react'
import { Drawer, styled } from '@mui/material'

const DrawerStyled = styled(Drawer, {
    name: 'DrawerStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})``

const DrawerWS = ({ children, ...rest }) => {
    return <DrawerStyled {...rest}>{children}</DrawerStyled>
}

export default DrawerWS
