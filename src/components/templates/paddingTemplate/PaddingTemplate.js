import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PaddingTemplateStyled = createStyled('PaddingTemplateStyle', 'div')

const WSPaddingTemplate = ({ children }) => {
    return <PaddingTemplateStyled>{children}</PaddingTemplateStyled>
}

export default WSPaddingTemplate
