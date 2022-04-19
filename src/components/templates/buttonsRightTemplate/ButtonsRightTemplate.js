import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const FlexFirstGrowTemplate = ({ children, ...rest }) => {
    const ButtonsRightTemplateStyled = useStyle('ButtonsRightTemplateStyle', 'div')
    const ButtonTemplateStyled = useStyle('ButtonTemplateStyle', 'span')

    const isManyChildren = Array.isArray(children)

    return (
        <ButtonsRightTemplateStyled {...rest}>
            <ButtonTemplateStyled>
                {isManyChildren ? children[0] : children}
            </ButtonTemplateStyled>
            {isManyChildren &&
                children
                    .slice(1)
                    .filter(child => child)
                    .map((elem, index) => (
                        <ButtonTemplateStyled key={index}>
                            {elem}
                        </ButtonTemplateStyled>
                    ))}
        </ButtonsRightTemplateStyled>
    )
}

export default FlexFirstGrowTemplate
