import React from 'react'
import { Drawer } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const DrawerStyled = createStyled('DrawerStyle', Drawer)

const DrawerWS = ({ children, ...rest }) => {
    return <DrawerStyled {...rest}>{children}</DrawerStyled>
}

export default DrawerWS
