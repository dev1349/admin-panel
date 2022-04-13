import React from 'react'
import { Popover } from '@mui/material'
import { useStyle } from '../../../hooks/useStyle'


const PopoverWS = ({ children, ...rest }) => {
    const PopoverStyled = useStyle('PopoverStyled', Popover, null)

    return <PopoverStyled {...rest}>{children}</PopoverStyled>
}

export default PopoverWS
