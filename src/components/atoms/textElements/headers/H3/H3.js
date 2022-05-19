import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../../services/style/createStyled'

const H3Styled = createStyled('H3Style', Typography)

const H3 = ({ children, ...rest }) => {
    return <H3Styled {...rest}>{children}</H3Styled>
}

export default H3
