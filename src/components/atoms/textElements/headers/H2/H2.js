import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'
import H2Style from './H2Style'


const WSH2 = ({ children, ...rest }) => {
    const H2Styled = useStyle('H2Styled', Typography, H2Style)
    return <H2Styled {...rest}>{children}</H2Styled>
}

export default WSH2
