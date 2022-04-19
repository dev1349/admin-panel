import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const StatisticsSubHeader = ({ children, ...rest }) => {
    const StatisticsSubHeaderStyled = useStyle('StatisticsSubHeaderStyle', Typography)
    return (
        <StatisticsSubHeaderStyled {...rest}>
            {children}
        </StatisticsSubHeaderStyled>
    )
}

export default StatisticsSubHeader
