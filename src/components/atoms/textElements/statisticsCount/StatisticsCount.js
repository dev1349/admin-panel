import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const StatisticsCount = ({ children, ...rest }) => {
    const StatisticsCountStyled = useStyle('StatisticsCountStyle', Typography, 'attention')
    return (
        <StatisticsCountStyled variant={'span'} component={'div'} {...rest}>
            {children}
        </StatisticsCountStyled>
    )
}

export default StatisticsCount
