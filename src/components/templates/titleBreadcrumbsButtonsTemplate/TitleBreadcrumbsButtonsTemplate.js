import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const TitleBreadcrumbsButtonsTemplate = ({ children }) => {
    const TitleBreadcrumbsButtonsTemplateStyled = useStyle('TitleBreadcrumbsButtonsTemplateStyle', 'div')
    const LastChildToRightTemplateStyled = useStyle('LastChildToRightTemplateStyle', 'div')
    return (
        <TitleBreadcrumbsButtonsTemplateStyled>
            {children.slice(0, -1)}
            <LastChildToRightTemplateStyled>
                {children.slice(-1)}
            </LastChildToRightTemplateStyled>
        </TitleBreadcrumbsButtonsTemplateStyled>
    )
}

export default TitleBreadcrumbsButtonsTemplate
