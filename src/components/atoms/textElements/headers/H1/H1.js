import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'
import H1Style from './H1Style'


const H1 = ({ children, ...rest }) => {
    const H1Styled = useStyle('H1Styled', Typography, H1Style, 'fs')
    return (
        <H1Styled component={'h1'} {...rest}>
            {children}
        </H1Styled>
    )
}

export default H1
