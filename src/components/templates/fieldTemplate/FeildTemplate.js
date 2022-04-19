import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSFieldTemplate = ({ children }) => {
    const FieldTemplateStyled = useStyle('FieldTemplateStyle', 'div')
    return <FieldTemplateStyled>{children}</FieldTemplateStyled>
}

export default WSFieldTemplate
