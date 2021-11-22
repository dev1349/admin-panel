import React from 'react'
import { Link, styled } from '@mui/material'

const LinkStyled = styled(Link, {
    name: 'ImgStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LinkWS = ({ children, ...rest }) => {
    return <LinkStyled {...rest}>{children}</LinkStyled>
}

export default LinkWS
