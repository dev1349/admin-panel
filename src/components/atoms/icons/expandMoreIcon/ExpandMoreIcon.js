import React from 'react'
import { ExpandMore } from '@mui/icons-material'
import { useStyle } from '../../../../hooks/useStyle'


const ExpandMoreIconWS = props => {
    const ExpandMoreIconStyled = useStyle('ExpandMoreIconStyled', ExpandMore, null)
    return <ExpandMoreIconStyled {...props} />
}

export default ExpandMoreIconWS
