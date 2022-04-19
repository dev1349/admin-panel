import React from 'react'
import { ExpandMore } from '@mui/icons-material'
import { useStyle } from '../../../../hooks/useStyle'


const ExpandMoreIconWS = props => {
    const ExpandMoreIconStyled = useStyle('ExpandMoreIconStyle', ExpandMore)
    return <ExpandMoreIconStyled {...props} />
}

export default ExpandMoreIconWS
