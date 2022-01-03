import React from 'react'
import { styled } from '@mui/material'

const TitleBreadcrumbsButtonsTemplateStyled = styled('div', {
    name: 'TitleBreadcrumbsButtonsTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LastChildToRightTemplateStyled = styled('div', {
    name: 'LastChildToRightTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TitleBreadcrumbsButtonsTemplate = ({ children }) => {
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
