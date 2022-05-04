import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSPaddingTemplate = ({ children }) => {
    const PaddingTemplateStyled = useStyle('PaddingTemplateStyle', 'div')
    return <PaddingTemplateStyled>{children}</PaddingTemplateStyled>
}

export default WSPaddingTemplate
