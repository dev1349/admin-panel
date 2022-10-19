import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import { Link } from 'react-router-dom'

const RouterLinkStyled = createStyled('RouterLinkStyle', Link, ['catalogItem'])

const RouterLinkAtom = ({ children, ...rest }) => {
    return <RouterLinkStyled {...rest}>{children}</RouterLinkStyled>
}

export default RouterLinkAtom
