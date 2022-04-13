import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import CountLabelStyle from './CountLabelStyle'


const WSCountLabel = ({ children, ...rest }) => {
    const CountLabelStyled = useStyle('CountLabelStyled', Typography, CountLabelStyle, 'attention')
    return <CountLabelStyled {...rest}>{children}</CountLabelStyled>
}

export default WSCountLabel
