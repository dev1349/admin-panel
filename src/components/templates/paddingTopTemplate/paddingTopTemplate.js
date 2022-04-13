import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import PaddingTopTemplateStyle from './PaddingTopTemplateStyle'


const PaddingTopTemplate = ({ children }) => {
    const PaddingTopTemplateStyled = useStyle('PaddingTopTemplateStyled', 'div', PaddingTopTemplateStyle)
    return <PaddingTopTemplateStyled>{children}</PaddingTopTemplateStyled>
}

export default PaddingTopTemplate
