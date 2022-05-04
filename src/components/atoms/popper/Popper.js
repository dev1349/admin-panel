import React from 'react'
import { Popper } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const PopperWS = ({ children, ...rest }) => {
    const PopperStyled = useStyle('PopperStyle', Popper)
    return <PopperStyled {...rest}>{children}</PopperStyled>
}

export default PopperWS
