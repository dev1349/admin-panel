import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const FlexFirstGrowTemplateStyled = createStyled(
    'FlexFirstGrowTemplateStyle',
    'div',
    ['noPadding', 'alignItemsCenter']
)
const FirstElementTemplateStyled = createStyled(
    'FirstElementTemplateStyle',
    'div'
)
const OtherElementTemplateStyled = createStyled(
    'OtherElementTemplateStyle',
    'div',
    ['noMargin']
)

const FlexFirstGrowTemplate = ({ children, noMargin, ...rest }) => {
    const isManyChildren = Array.isArray(children)

    return (
        <FlexFirstGrowTemplateStyled {...rest}>
            <FirstElementTemplateStyled>
                {isManyChildren ? children[0] : children}
            </FirstElementTemplateStyled>
            {isManyChildren &&
                children
                    .slice(1)
                    .filter(child => child)
                    .map((elem, index) => (
                        <OtherElementTemplateStyled
                            key={index}
                            noMargin={noMargin}
                        >
                            {elem}
                        </OtherElementTemplateStyled>
                    ))}
        </FlexFirstGrowTemplateStyled>
    )
}

export default FlexFirstGrowTemplate
