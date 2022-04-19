import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'


const H3 = ({ children, ...rest }) => {
    const H3Styled = useStyle('H3Style', Typography)
    return <H3Styled {...rest}>{children}</H3Styled>
}

export default H3
