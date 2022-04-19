import React from 'react'
import { Box } from '@mui/material'
import { useStyle } from '../../../../hooks/useStyle'


const BoxWS = ({ children, ...rest }) => {
    const BoxStyled = useStyle('BoxStyle', Box)
    return <BoxStyled {...rest}>{children}</BoxStyled>
}

export default BoxWS
