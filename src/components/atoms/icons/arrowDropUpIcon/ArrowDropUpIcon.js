import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { useStyle } from '../../../../hooks/useStyle'


const WSArrowDropUpIcon = props => {
    const ArrowDropUpIconStyled = useStyle('ArrowDropUpIconStyle', ArrowDropUpIcon)
    return <ArrowDropUpIconStyled {...props} />
}

export default WSArrowDropUpIcon
