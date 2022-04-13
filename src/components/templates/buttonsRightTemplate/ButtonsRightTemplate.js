import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import ButtonsRightTemplateStyle from './ButtonsRightTemplateStyle'
import ButtonTemplateStyle from './ButtonTemplateStyle'


const FlexFirstGrowTemplate = ({ children, ...rest }) => {
    const ButtonsRightTemplateStyled = useStyle('ButtonsRightTemplateStyled', 'div', ButtonsRightTemplateStyle)
    const ButtonTemplateStyled = useStyle('ButtonTemplateStyled', 'span', ButtonTemplateStyle)

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
