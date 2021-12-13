import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const StatisticsTextStyled = styled(Typography, {
    name: 'StatisticsTextStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const StatisticsText = ({ children, ...rest }) => {
    return (
        <StatisticsTextStyled variant={'span'} component={'div'} {...rest}>
            {children}
        </StatisticsTextStyled>
    )
}

export default StatisticsText
