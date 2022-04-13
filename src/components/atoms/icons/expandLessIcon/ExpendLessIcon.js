import React from 'react'
import { ExpandLess } from '@mui/icons-material'
import { useStyle } from '../../../../hooks/useStyle'


const ExpandLessIconWS = props => {
    const ExpandLessIconStyled = useStyle('ExpandLessIconStyled', ExpandLess, null)
    return <ExpandLessIconStyled {...props} />
}

export default ExpandLessIconWS
