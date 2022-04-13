import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const BoxWS = ({ children, ...rest }) => {
    const BoxStyled = useStyle('BoxStyled', Box, null)
    return <BoxStyled {...rest}>{children}</BoxStyled>
}

export default BoxWS
