import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const LiStyled = createStyled('LiStyle', 'li', ['catalogItem', 'catalogSubItem', 'catalogSubSubItem'])

const LiAtom = ({ children, ...rest }) => {
    return <LiStyled {...rest}>{children}</LiStyled>
}

export default LiAtom
