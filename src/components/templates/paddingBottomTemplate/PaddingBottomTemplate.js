import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSPaddingBottomTemplate = ({ children }) => {
    const PaddingBottomTemplateStyled = useStyle('PaddingBottomTemplateStyle', 'div')
    return <PaddingBottomTemplateStyled>{children}</PaddingBottomTemplateStyled>
}

export default WSPaddingBottomTemplate
