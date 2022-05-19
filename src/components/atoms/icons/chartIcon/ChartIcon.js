import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import { createStyled } from '../../../../services/style/createStyled'

const BarChartIconStyled = createStyled('BarChartIconStyle', BarChartIcon)

const BarChartIconWS = props => {
    return <BarChartIconStyled {...props} />
}

export default BarChartIconWS
