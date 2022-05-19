import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../../services/style/createStyled'

const H2Styled = createStyled('H2Style', Typography)

const WSH2 = ({ children, ...rest }) => {
    return <H2Styled {...rest}>{children}</H2Styled>
}

export default WSH2
