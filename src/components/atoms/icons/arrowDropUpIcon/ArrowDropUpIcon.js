import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { createStyled } from '../../../../services/style/createStyled'

const ArrowDropUpIconStyled = createStyled(
    'ArrowDropUpIconStyle',
    ArrowDropUpIcon
)

const WSArrowDropUpIcon = props => {
    return <ArrowDropUpIconStyled {...props} />
}

export default WSArrowDropUpIcon
