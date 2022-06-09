import React from 'react'
import { Box } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const BoxStyled = createStyled('BoxStyle', Box, [
    'flexGrow1',
    'activeItem',
    'marginLeft4',
    'paddingRight41',
    'marginTop7',
    'marginLeft31',
    'maxHeight500',
    'marginTop2',
])

const BoxWS = ({ children, ...rest }) => {
    return <BoxStyled {...rest}>{children}</BoxStyled>
}

export default BoxWS
