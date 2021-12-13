import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const StatisticsSubHeaderStyled = styled(Typography, {
    name: 'StatisticsSubHeaderStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const StatisticsSubHeader = ({ children, ...rest }) => {
    return (
        <StatisticsSubHeaderStyled {...rest}>
            {children}
        </StatisticsSubHeaderStyled>
    )
}

export default StatisticsSubHeader
