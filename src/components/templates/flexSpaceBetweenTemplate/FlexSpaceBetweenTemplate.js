import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FlexSpaceBetweenTemplateStyle from './FlexSpaceBetweenTemplateStyle'


const FlexSpaceBetweenTemplate = ({ children }) => {
    const FlexSpaceBetweenTemplateStyled = useStyle('FlexSpaceBetweenTemplateStyled', 'div', FlexSpaceBetweenTemplateStyle)
    return (
        <FlexSpaceBetweenTemplateStyled>
            {children}
        </FlexSpaceBetweenTemplateStyled>
    )
}

export default FlexSpaceBetweenTemplate
