import React from 'react'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import { useStyle } from '../../../../hooks/useStyle'


const HelpIconWS = props => {
    const HelpIconStyled = useStyle('HelpIconStyled', HelpCenterIcon, null)
    return <HelpIconStyled {...props} />
}

export default HelpIconWS
