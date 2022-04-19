import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSPrice = ({ children, ...rest }) => {
    const PriceStyled = useStyle('PriceStyle', Typography, 'oldPrice')
    return <PriceStyled {...rest}>{children}</PriceStyled>
}

export default WSPrice
