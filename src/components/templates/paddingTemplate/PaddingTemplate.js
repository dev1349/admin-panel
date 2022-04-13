import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import PaddingTemplateStyle from './PaddingTemplateStyle'


const WSPaddingTemplate = ({ children }) => {
    const PaddingTemplateStyled = useStyle('PaddingTemplateStyled', 'div', PaddingTemplateStyle)
    return <PaddingTemplateStyled>{children}</PaddingTemplateStyled>
}

export default WSPaddingTemplate
