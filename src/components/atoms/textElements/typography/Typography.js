import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'
import TypographyStyle from './TypographyStyle'


const TypographyWS = ({ children, ...rest }) => {
    const TypographyStyled = useStyle('TypographyStyled', Typography, TypographyStyle, 'smallFontSize')
    return <TypographyStyled {...rest}>{children}</TypographyStyled>
}

export default TypographyWS
