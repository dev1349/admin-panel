import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FlexStartWithPaddingTemplateStyle from './FlexStartWithPaddingTemplateStyle'


const WSFlexStartWithPaddingTemplate = ({ children }) => {
    const FlexStartWithPaddingTemplateStyled = useStyle('FlexStartWithPaddingTemplateStyled', 'div', FlexStartWithPaddingTemplateStyle)
    return (
        <FlexStartWithPaddingTemplateStyled>
            {children}
        </FlexStartWithPaddingTemplateStyled>
    )
}

export default WSFlexStartWithPaddingTemplate
