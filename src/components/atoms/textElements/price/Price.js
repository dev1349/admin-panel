import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const PriceStyled = styled(Typography, {
    shouldForwardProp: prop => prop !== 'oldPrice',
    name: 'PriceStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSPrice = ({ children, ...rest }) => {
    return <PriceStyled {...rest}>{children}</PriceStyled>
}

export default WSPrice
