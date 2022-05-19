import React from 'react'
import { Badge } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const BadgeStyled = createStyled('BadgeStyle', Badge)

const BadgeWS = ({ children, ...rest }) => {
    return <BadgeStyled {...rest}>{children}</BadgeStyled>
}

export default BadgeWS
