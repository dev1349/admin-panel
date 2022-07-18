import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PaddingBetweenButtonsTemplateStyled = createStyled('PaddingBetweenButtonsTemplateStyle', 'ul')
const ButtonWrapperStyled = createStyled('ButtonWrapperStyle', 'li')

const PaddingBetweenButtonsTemplate = ({ children }) => {
    return (
        <PaddingBetweenButtonsTemplateStyled>
            {children.map((child, index) => (
                <ButtonWrapperStyled key={index}>{child}</ButtonWrapperStyled>
            ))}
        </PaddingBetweenButtonsTemplateStyled>
    )
}

export default PaddingBetweenButtonsTemplate
