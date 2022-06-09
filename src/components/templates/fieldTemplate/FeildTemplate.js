import React from 'react'
import { createStyled } from '../../../services/style/createStyledt'
const FieldTemplateStyled = createStyled('FieldTemplateStyle', 'div')
const WSFieldTemplate = ({ children }) => {
    return <FieldTemplateStyled>{children}</FieldTemplateStyled>
}

export default WSFieldTemplate
