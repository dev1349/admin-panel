import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import StatisticsSubHeaderStyle from './StatisticsSubHeaderStyle'


const StatisticsSubHeader = ({ children, ...rest }) => {
    const StatisticsSubHeaderStyled = useStyle('StatisticsSubHeaderStyled', Typography, StatisticsSubHeaderStyle)
    return (
        <StatisticsSubHeaderStyled {...rest}>
            {children}
        </StatisticsSubHeaderStyled>
    )
}

export default StatisticsSubHeader
