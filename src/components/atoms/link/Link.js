import React from 'react'
import { Link } from '@mui/material'
import { createStyled } from '../../../services/style/createStyled'

const LinkStyled = createStyled('LinkStyle', Link, ['dialogLink', 'hoverUnderline', 'adminNavRouterLink'])

const LinkWS = ({ children, ...rest }) => {
    return <LinkStyled {...rest}>{children}</LinkStyled>
}

export default LinkWS
