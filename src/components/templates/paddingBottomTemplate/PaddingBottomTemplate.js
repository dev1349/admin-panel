import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PaddingBottomTemplateStyled = createStyled(
    'PaddingBottomTemplateStyle',
    'div'
)

const WSPaddingBottomTemplate = ({ children }) => {
    return <PaddingBottomTemplateStyled>{children}</PaddingBottomTemplateStyled>
}

export default WSPaddingBottomTemplate
