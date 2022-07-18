import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const TitleBreadcrumbsButtonsTemplateStyled = createStyled('TitleBreadcrumbsButtonsTemplateStyle', 'div')
const LastChildToRightTemplateStyled = createStyled('LastChildToRightTemplateStyle', 'div')

const TitleBreadcrumbsButtonsTemplate = ({ children }) => {
    return (
        <TitleBreadcrumbsButtonsTemplateStyled>
            {children.slice(0, -1)}
            <LastChildToRightTemplateStyled>{children.slice(-1)}</LastChildToRightTemplateStyled>
        </TitleBreadcrumbsButtonsTemplateStyled>
    )
}

export default TitleBreadcrumbsButtonsTemplate
