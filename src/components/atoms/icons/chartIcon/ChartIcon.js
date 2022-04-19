import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import { useStyle } from '../../../../hooks/useStyle'


const BarChartIconWS = props => {
    const BarChartIconStyled = useStyle('BarChartIconStyle', BarChartIcon)
    return <BarChartIconStyled {...props} />
}

export default BarChartIconWS
