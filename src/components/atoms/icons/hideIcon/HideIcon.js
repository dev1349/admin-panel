import React from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { createStyled } from '../../../../services/style/createStyled'

const HideIconStyled = createStyled('HelpIconStyle', VisibilityOffIcon)

const HideIcon = props => {
    return <HideIconStyled {...props} />
}

export default HideIcon
