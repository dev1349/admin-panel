import React from 'react'
import { styled } from '@mui/material/styles'
import { Popover } from '@mui/material'

const PopoverStyled = styled(Popover, {
    name: 'PopoverStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PopoverWS = ({ children, ...rest }) => {
    return <PopoverStyled {...rest}>{children}</PopoverStyled>
}

export default PopoverWS
