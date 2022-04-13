import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'
import H3Style from './H3Style'


const H3 = ({ children, ...rest }) => {
    const H3Styled = useStyle('H3Styled', Typography, H3Style)
    return <H3Styled {...rest}>{children}</H3Styled>
}

export default H3
