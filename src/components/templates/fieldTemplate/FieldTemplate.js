import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FieldTemplateStyled = createStyled('FieldTemplateStyle', 'div')

const FieldTemplate = ({ children }) => {
    return <FieldTemplateStyled>{children}</FieldTemplateStyled>
}

export default FieldTemplate
