import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const PriceStyled = createStyled('PriceStyle', Typography, 'oldPrice')

const WSPrice = ({ children, ...rest }) => {
    return <PriceStyled {...rest}>{children}</PriceStyled>
}

export default WSPrice
