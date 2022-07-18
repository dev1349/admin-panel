import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const ButtonsRightTemplateStyled = createStyled('ButtonsRightTemplateStyle', 'div')
const ButtonTemplateStyled = createStyled('ButtonTemplateStyle', 'span')

const FlexFirstGrowTemplate = ({ children, ...rest }) => {
    const isManyChildren = Array.isArray(children)

    return (
        <ButtonsRightTemplateStyled {...rest}>
            <ButtonTemplateStyled>{isManyChildren ? children[0] : children}</ButtonTemplateStyled>
            {isManyChildren &&
                children
                    .slice(1)
                    .filter(child => child)
                    .map((elem, index) => <ButtonTemplateStyled key={index}>{elem}</ButtonTemplateStyled>)}
        </ButtonsRightTemplateStyled>
    )
}

export default FlexFirstGrowTemplate
