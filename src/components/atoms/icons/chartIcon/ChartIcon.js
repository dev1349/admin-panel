import React from 'react'
import { styled } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart'

const BarChartIconStyled = styled(BarChartIcon, {
    name: 'BarChartIconStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const BarChartIconWS = props => {
    return <BarChartIconStyled {...props} />
}

export default BarChartIconWS
