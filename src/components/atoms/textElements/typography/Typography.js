import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const TypographyWS = ({ children, ...rest }) => {
    const TypographyStyled = useStyle('TypographyStyle', Typography, 'smallFontSize')
    return <TypographyStyled {...rest}>{children}</TypographyStyled>
}

export default TypographyWS
