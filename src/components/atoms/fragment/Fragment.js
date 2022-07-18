import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FragmentStyled = createStyled('FragmentStyle', 'span', ['requiredFieldStar'])

const Fragment = ({ children, ...rest }) => {
    return <FragmentStyled {...rest}>{children}</FragmentStyled>
}

export default Fragment
