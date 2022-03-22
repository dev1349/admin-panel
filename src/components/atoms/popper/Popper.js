import React from 'react'
import { styled } from '@mui/material/styles'
import { Popper } from '@mui/material'

const PopperStyled = styled(Popper, {
    name: 'PopperStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PopperWS = ({ children, ...rest }) => {
    return <PopperStyled {...rest}>{children}</PopperStyled>
}

export default PopperWS
