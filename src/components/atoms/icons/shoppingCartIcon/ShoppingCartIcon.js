import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { createStyled } from '../../../../services/style/createStyled'

const ShoppingCartIconStyled = createStyled('ShoppingCartIconStyle', ShoppingCartIcon)

const ShoppingCartIconWS = props => {
    return <ShoppingCartIconStyled {...props} />
}

export default ShoppingCartIconWS
