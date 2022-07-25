import React from 'react'
import HideImageIcon from '@mui/icons-material/HideImage'
import { createStyled } from '../../../../services/style/createStyled'

const HideImageIconStyled = createStyled('HideImageIconStyle', HideImageIcon, ['dialogIcon'])

const WSHideImageIcon = props => {
    return <HideImageIconStyled {...props} />
}

export default WSHideImageIcon
