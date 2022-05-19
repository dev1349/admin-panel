import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PageHeaderTemplateStyled = createStyled('PageHeaderTemplateStyle', 'div')

const PageHeaderTemplateWS = ({ children }) => {
    return <PageHeaderTemplateStyled>{children}</PageHeaderTemplateStyled>
}

export default PageHeaderTemplateWS
