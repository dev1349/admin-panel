import React from 'react'
import { styled } from '@mui/material'
import IconButton from '@mui/material/IconButton'

const IconButtonStyled = styled(IconButton, {
    name: 'IconButtonStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSIconButton = ({ children, ...rest }) => {
    return <IconButtonStyled {...rest}>{children}</IconButtonStyled>
}

export default WSIconButton
