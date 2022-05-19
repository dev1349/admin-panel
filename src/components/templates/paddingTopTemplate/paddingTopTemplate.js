import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PaddingTopTemplateStyled = createStyled('PaddingTopTemplateStyle', 'div')

const PaddingTopTemplate = ({ children }) => {
    return <PaddingTopTemplateStyled>{children}</PaddingTopTemplateStyled>
}

export default PaddingTopTemplate
