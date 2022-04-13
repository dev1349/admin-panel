import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FieldTemplateStyle from './FieldTemplateStyle'


const WSFieldTemplate = ({ children }) => {
    const FieldTemplateStyled = useStyle('FieldTemplateStyled', 'div', FieldTemplateStyle)
    return <FieldTemplateStyled>{children}</FieldTemplateStyled>
}

export default WSFieldTemplate
