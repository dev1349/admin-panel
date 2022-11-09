import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const TextFragmentStyled = createStyled('TextFragmentStyle', 'span', ['redStar'])

const TextFragment = ({ children, ...rest }) => {
    return <TextFragmentStyled {...rest}>{children}</TextFragmentStyled>
}

export default TextFragment
