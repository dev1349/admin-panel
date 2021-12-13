import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const StatisticsCountStyled = styled(Typography, {
    shouldForwardProp: prop => prop !== 'attention',
    name: 'StatisticsCountStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const StatisticsCount = ({ children, ...rest }) => {
    return (
        <StatisticsCountStyled variant={'span'} component={'div'} {...rest}>
            {children}
        </StatisticsCountStyled>
    )
}

export default StatisticsCount
