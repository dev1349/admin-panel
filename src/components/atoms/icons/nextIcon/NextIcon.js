import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { createStyled } from '../../../../services/style/createStyled'

const ArrowForwardIosIconStyled = createStyled(
    'ArrowForwardIosIconStyle',
    ArrowForwardIosIcon,
    'dialogIcon'
)

const ArrowForwardIosIconAtom = props => {
    return <ArrowForwardIosIconStyled {...props} />
}

export default ArrowForwardIosIconAtom
