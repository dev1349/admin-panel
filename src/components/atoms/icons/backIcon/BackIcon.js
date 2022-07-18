import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { createStyled } from '../../../../services/style/createStyled'

const ArrowBackIosIconStyled = createStyled('ArrowBackIosIconStyle', ArrowBackIosIcon, ['dialogIcon'])

const ArrowBackIosIconAtom = props => {
    return <ArrowBackIosIconStyled {...props} />
}

export default ArrowBackIosIconAtom
