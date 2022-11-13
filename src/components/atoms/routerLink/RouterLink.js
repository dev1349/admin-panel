import React from 'react'
import { createStyled } from '../../../services/style/createStyled'
import { Link } from 'react-router-dom'

const RouterLinkStyled = createStyled('RouterLinkStyle', Link, ['catalogItem'])

const RouterLinkAtom = ({ children, forwardedRef, ...rest }) => {
    return (
        <RouterLinkStyled {...rest} ref={forwardedRef}>
            {children}
        </RouterLinkStyled>
    )
}

export default React.forwardRef((props, ref) => <RouterLinkAtom {...props} forwardedRef={ref} />)
