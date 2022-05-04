import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const WSCountLabel = ({ children, ...rest }) => {
    const CountLabelStyled = useStyle('CountLabelStyle', Typography, 'attention')
    return <CountLabelStyled {...rest}>{children}</CountLabelStyled>
}

export default WSCountLabel
