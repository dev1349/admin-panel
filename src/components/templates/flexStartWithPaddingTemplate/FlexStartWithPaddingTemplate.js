import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSFlexStartWithPaddingTemplate = ({ children }) => {
    const FlexStartWithPaddingTemplateStyled = useStyle('FlexStartWithPaddingTemplateStyle', 'div')
    return (
        <FlexStartWithPaddingTemplateStyled>
            {children}
        </FlexStartWithPaddingTemplateStyled>
    )
}

export default WSFlexStartWithPaddingTemplate
