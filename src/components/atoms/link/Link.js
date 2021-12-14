import React from 'react'
import { Link, styled } from '@mui/material'

const LinkStyled = styled(Link, {
    shouldForwardProp: prop => prop !== 'hoverUnderline',
    name: 'LinkStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LinkWS = ({ children, ...rest }) => {
    return <LinkStyled {...rest}>{children}</LinkStyled>
}

export default LinkWS
