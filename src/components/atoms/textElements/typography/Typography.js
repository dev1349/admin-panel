import React from 'react'
import { Typography } from '@mui/material'
import { createStyled } from '../../../../services/style/createStyled'

const TypographyStyled = createStyled('TypographyStyle', Typography, [
    'smallFontSize',
    'mainAdminText',
    'textAlignCenter',
    'bold',
    'lineHeight15',
])

const TypographyWS = ({ children, ...rest }) => {
    return <TypographyStyled {...rest}>{children}</TypographyStyled>
}

export default TypographyWS
