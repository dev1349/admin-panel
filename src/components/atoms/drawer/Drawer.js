import React from 'react'
import { Drawer } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const DrawerWS = ({ children, ...rest }) => {
    const DrawerStyled = useStyle('DrawerStyle', Drawer)
    return <DrawerStyled {...rest}>{children}</DrawerStyled>
}

export default DrawerWS
