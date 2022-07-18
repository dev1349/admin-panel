import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const CountLabelStyled = createStyled('CountLabelStyle', Typography, 'attention')

const WSCountLabel = ({ children, ...rest }) => {
    return <CountLabelStyled {...rest}>{children}</CountLabelStyled>
}

export default WSCountLabel
