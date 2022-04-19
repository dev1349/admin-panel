import React from 'react'
import { Badge } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const BadgeWS = ({ children, ...rest }) => {
    const BadgeStyled = useStyle('BadgeStyle', Badge)
    return <BadgeStyled {...rest}>{children}</BadgeStyled>
}

export default BadgeWS
