import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const FlexSpaceBetweenTemplate = ({ children }) => {
    const FlexSpaceBetweenTemplateStyled = useStyle('FlexSpaceBetweenTemplateStyle', 'div')
    return (
        <FlexSpaceBetweenTemplateStyled>
            {children}
        </FlexSpaceBetweenTemplateStyled>
    )
}

export default FlexSpaceBetweenTemplate
