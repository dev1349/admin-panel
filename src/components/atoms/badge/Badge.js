import React from 'react'
import { Badge } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'
import BadgeStyle from './BadgeStyle'


const BadgeWS = ({ children, ...rest }) => {
    const BadgeStyled = useStyle('BadgeStyled', Badge, BadgeStyle)
    return <BadgeStyled {...rest}>{children}</BadgeStyled>
}

export default BadgeWS
