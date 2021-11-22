import React from 'react'
import { styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const ShoppingCartIconStyled = styled(ShoppingCartIcon, {
    name: 'ShoppingCartIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ShoppingCartIconWS = props => {
    return <ShoppingCartIconStyled {...props} />
}

export default ShoppingCartIconWS
