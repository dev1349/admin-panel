import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const StatisticsText = ({ children, ...rest }) => {
    const StatisticsTextStyled = useStyle('StatisticsTextStyled', Typography, null)
    return (
        <StatisticsTextStyled variant={'span'} component={'div'} {...rest}>
            {children}
        </StatisticsTextStyled>
    )
}

export default StatisticsText
