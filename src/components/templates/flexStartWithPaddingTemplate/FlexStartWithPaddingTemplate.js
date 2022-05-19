import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FlexStartWithPaddingTemplateStyled = createStyled(
    'FlexStartWithPaddingTemplateStyle',
    'div'
)

const WSFlexStartWithPaddingTemplate = ({ children }) => {
    return (
        <FlexStartWithPaddingTemplateStyled>
            {children}
        </FlexStartWithPaddingTemplateStyled>
    )
}

export default WSFlexStartWithPaddingTemplate
