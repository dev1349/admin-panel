import React from 'react'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import { createStyled } from '../../../../services/style/createStyled'

const HelpIconStyled = createStyled('HelpIconStyle', HelpCenterIcon)

const HelpIconWS = props => {
    return <HelpIconStyled {...props} />
}

export default HelpIconWS
