import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FixedWidthContainerTemplateStyled = createStyled('FixedWidthContainerTemplateStyle', 'div')

const WSFixedWidthContainerTemplate = ({ children }) => {
    return <FixedWidthContainerTemplateStyled>{children}</FixedWidthContainerTemplateStyled>
}

export default WSFixedWidthContainerTemplate
