import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const UlStyled = createStyled('UlStyle', 'ul', ['catalogFirstLevelList', 'catalogSubLevelList', 'catalogSubSubLevelList'])

const UlAtom = ({ children, forwardRef, ...rest }) => {
    return (
        <UlStyled ref={forwardRef} {...rest}>
            {children}
        </UlStyled>
    )
}

export default UlAtom
