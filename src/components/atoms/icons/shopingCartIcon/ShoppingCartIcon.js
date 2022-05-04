import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useStyle } from '../../../../hooks/useStyle'


const ShoppingCartIconWS = props => {
    const ShoppingCartIconStyled = useStyle('ShoppingCartIconStyle', ShoppingCartIcon)
    return <ShoppingCartIconStyled {...props} />
}

export default ShoppingCartIconWS
