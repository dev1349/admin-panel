import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PaddingWidthContainerTemplateStyled = createStyled(
    'PaddingWidthContainerTemplateStyle',
    'div'
)

const WSPaddingWidthContainerTemplate = ({ children }) => {
    return (
        <PaddingWidthContainerTemplateStyled>
            {children}
        </PaddingWidthContainerTemplateStyled>
    )
}

export default WSPaddingWidthContainerTemplate
