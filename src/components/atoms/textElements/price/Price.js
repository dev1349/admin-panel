import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import PriceStyle from './PriceStyle'


const WSPrice = ({ children, ...rest }) => {
    const PriceStyled = useStyle('PriceStyled', Typography, PriceStyle, 'oldPrice')
    return <PriceStyled {...rest}>{children}</PriceStyled>
}

export default WSPrice
