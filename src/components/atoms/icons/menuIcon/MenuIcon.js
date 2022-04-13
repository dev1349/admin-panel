import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useStyle } from '../../../../hooks/useStyle'


const MenuIconWS = props => {
    const MenuIconStyled = useStyle('MenuIconStyled', MenuIcon, null)
    return <MenuIconStyled {...props} />
}

export default MenuIconWS
