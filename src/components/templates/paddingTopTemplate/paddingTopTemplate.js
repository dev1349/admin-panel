import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const PaddingTopTemplate = ({ children }) => {
    const PaddingTopTemplateStyled = useStyle('PaddingTopTemplateStyle', 'div')
    return <PaddingTopTemplateStyled>{children}</PaddingTopTemplateStyled>
}

export default PaddingTopTemplate
