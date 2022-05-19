import React from 'react'
import { Popover } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const PopoverStyled = createStyled('PopoverStyle', Popover)

const PopoverWS = ({ children, ...rest }) => {
    return <PopoverStyled {...rest}>{children}</PopoverStyled>
}

export default PopoverWS
