import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const TypographyStyled = styled(Typography, {
    shouldForwardProp: prop => prop !== 'smallFontSize',
    name: 'TypographyStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TypographyWS = ({ children, ...rest }) => {
    return <TypographyStyled {...rest}>{children}</TypographyStyled>
}

export default TypographyWS
