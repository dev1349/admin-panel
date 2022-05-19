import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const StatisticsTextStyled = createStyled('StatisticsTextStyle', Typography)

const StatisticsText = ({ children, ...rest }) => {
    return (
        <StatisticsTextStyled variant={'span'} component={'div'} {...rest}>
            {children}
        </StatisticsTextStyled>
    )
}

export default StatisticsText
