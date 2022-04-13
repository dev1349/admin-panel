import React from 'react'
import { Popper } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'
import PopperStyle from './PopperStyle'


const PopperWS = ({ children, ...rest }) => {
    const PopperStyled = useStyle('PopperStyled', Popper, PopperStyle)
    return <PopperStyled {...rest}>{children}</PopperStyled>
}

export default PopperWS
