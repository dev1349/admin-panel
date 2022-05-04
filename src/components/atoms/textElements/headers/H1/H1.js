import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'

const H1 = ({ children, ...rest }) => {
    const H1Styled = useStyle('H1Style', Typography, 'fs')
    return (
        <H1Styled component={'h1'} {...rest}>
            {children}
        </H1Styled>
    )
}

export default H1
