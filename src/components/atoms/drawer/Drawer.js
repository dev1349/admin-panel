import React from 'react'
import { Drawer } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'
import DrawerStyle from './DrawerStyle'


const DrawerWS = ({ children, ...rest }) => {
    const DrawerStyled = useStyle('DrawerStyled', Drawer, DrawerStyle)
    return <DrawerStyled {...rest}>{children}</DrawerStyled>
}

export default DrawerWS
