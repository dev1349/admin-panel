import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const MaxWidthTemplateStyled = createStyled('MaxWidthTemplateStyle', 'div')

const WSMaxWidthContainer = ({ children }) => {
    return <MaxWidthTemplateStyled>{children}</MaxWidthTemplateStyled>
}

export default WSMaxWidthContainer
