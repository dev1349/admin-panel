import React from 'react'
import BarChartIcon from '@mui/icons-material/BarChart'
import { useStyle } from '../../../../hooks/useStyle'


const BarChartIconWS = props => {
    const BarChartIconStyled = useStyle('BarChartIconStyled', BarChartIcon, null)
    return <BarChartIconStyled {...props} />
}

export default BarChartIconWS
