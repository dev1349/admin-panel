import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FlexSpaceBetweenTemplateStyled = createStyled('FlexSpaceBetweenTemplateStyle', 'div')

const FlexSpaceBetweenTemplate = ({ children }) => {
    return <FlexSpaceBetweenTemplateStyled>{children}</FlexSpaceBetweenTemplateStyled>
}

export default FlexSpaceBetweenTemplate
