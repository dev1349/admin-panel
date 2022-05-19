import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { createStyled } from '../../../../services/style/createStyled'

const ArrowBackIconStyled = createStyled('ArrowBackIconStyle', ArrowBackIcon)

const ArrowBackIconWS = props => {
    return <ArrowBackIconStyled {...props} />
}

export default ArrowBackIconWS
