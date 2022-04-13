import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import TitleBreadcrumbsButtonsTemplateStyle from './TitleBreadcrumbsButtonsTemplateStyle'
import LastChildToRightTemplateStyle from './LastChildToRightTemplateStyle'


const TitleBreadcrumbsButtonsTemplate = ({ children }) => {
    const TitleBreadcrumbsButtonsTemplateStyled = useStyle('TitleBreadcrumbsButtonsTemplateStyled', 'div', TitleBreadcrumbsButtonsTemplateStyle)
    const LastChildToRightTemplateStyled = useStyle('LastChildToRightTemplateStyled', 'div', LastChildToRightTemplateStyle)
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
