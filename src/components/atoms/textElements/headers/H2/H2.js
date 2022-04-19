import React from 'react'
import { Typography } from '@mui/material'
import { useStyle } from '../../../../../hooks/useStyle'


const WSH2 = ({ children, ...rest }) => {
    const H2Styled = useStyle('H2Style', Typography)
    return <H2Styled {...rest}>{children}</H2Styled>
}

export default WSH2
