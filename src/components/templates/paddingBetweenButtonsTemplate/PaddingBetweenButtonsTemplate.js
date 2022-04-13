import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import PaddingBetweenButtonsTemplateStyle from './PaddingBetweenButtonsTemplateStyle'
import ButtonWrapperStyle from './ButtonWrapperStyle'


const PaddingBetweenButtonsTemplate = ({ children }) => {
    const PaddingBetweenButtonsTemplateStyled = useStyle('PaddingBetweenButtonsTemplateStyled', 'ul', PaddingBetweenButtonsTemplateStyle)
    const ButtonWrapperStyled = useStyle('ButtonWrapperStyled', 'li', ButtonWrapperStyle)
    return (
        <PaddingBetweenButtonsTemplateStyled>
            {children.map((child, index) => (
                <ButtonWrapperStyled key={index}>{child}</ButtonWrapperStyled>
            ))}
        </PaddingBetweenButtonsTemplateStyled>
    )
}

export default PaddingBetweenButtonsTemplate
