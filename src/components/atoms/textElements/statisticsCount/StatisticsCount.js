import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const StatisticsCountStyled = createStyled('StatisticsCountStyle', Typography, 'attention')

const StatisticsCount = ({ children, ...rest }) => {
    return (
        <StatisticsCountStyled variant={'span'} component={'div'} {...rest}>
            {children}
        </StatisticsCountStyled>
    )
}

export default StatisticsCount
