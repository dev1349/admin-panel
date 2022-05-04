import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useStyle } from '../../../../hooks/useStyle'


const MenuIconWS = props => {
    const MenuIconStyled = useStyle('MenuIconStyle', MenuIcon)
    return <MenuIconStyled {...props} />
}

export default MenuIconWS
