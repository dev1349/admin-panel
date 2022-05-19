import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const StatisticsSubHeaderStyled = createStyled(
    'StatisticsSubHeaderStyle',
    Typography
)

const StatisticsSubHeader = ({ children, ...rest }) => {
    return (
        <StatisticsSubHeaderStyled {...rest}>
            {children}
        </StatisticsSubHeaderStyled>
    )
}

export default StatisticsSubHeader
