import React from 'react'
import { Popover } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const PopoverWS = ({ children, ...rest }) => {
    const PopoverStyled = useStyle('PopoverStyle', Popover)

    return <PopoverStyled {...rest}>{children}</PopoverStyled>
}

export default PopoverWS
