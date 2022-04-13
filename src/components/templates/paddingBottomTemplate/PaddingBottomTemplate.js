import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import PaddingBottomTemplateStyle from './PaddingBottomTemplateStyle'


const WSPaddingBottomTemplate = ({ children }) => {
    const PaddingBottomTemplateStyled = useStyle('PaddingBottomTemplateStyled', 'div', PaddingBottomTemplateStyle)
    return <PaddingBottomTemplateStyled>{children}</PaddingBottomTemplateStyled>
}

export default WSPaddingBottomTemplate
