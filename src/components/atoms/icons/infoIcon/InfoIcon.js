import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import { createStyled } from '../../../../services/style/createStyled'

const InfoIconStyled = createStyled('InfoIconStyle', InfoIcon, 'dialogIcon')

const InfoIconAtom = props => {
    return <InfoIconStyled {...props} />
}

export default InfoIconAtom
