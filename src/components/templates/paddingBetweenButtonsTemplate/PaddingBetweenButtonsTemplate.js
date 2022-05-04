import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const PaddingBetweenButtonsTemplate = ({ children }) => {
    const PaddingBetweenButtonsTemplateStyled = useStyle('PaddingBetweenButtonsTemplateStyle', 'ul')
    const ButtonWrapperStyled = useStyle('ButtonWrapperStyle', 'li')
    return (
        <PaddingBetweenButtonsTemplateStyled>
            {children.map((child, index) => (
                <ButtonWrapperStyled key={index}>{child}</ButtonWrapperStyled>
            ))}
        </PaddingBetweenButtonsTemplateStyled>
    )
}

export default PaddingBetweenButtonsTemplate
