import React from 'react'
import { Popper } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const PopperStyled = createStyled('PopperStyle', Popper)

const PopperWS = ({ children, ...rest }) => {
    return <PopperStyled {...rest}>{children}</PopperStyled>
}

export default PopperWS
