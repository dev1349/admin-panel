import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { createStyled } from '../../../../services/style/createStyled'

const MenuIconStyled = createStyled('MenuIconStyle', MenuIcon, ['dialogIcon'])

const MenuIconWS = props => {
    return <MenuIconStyled {...props} />
}

export default MenuIconWS
