import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import ButtonsWrapperTemplateStyle from './ButtonsWrapperTemplateStyle'


const WSButtonsWrapperTemplate = ({ children }) => {
    const ButtonsWrapperTemplateStyled = useStyle('ButtonsWrapperTemplateStyled', 'div', ButtonsWrapperTemplateStyle)
    return (
        <ButtonsWrapperTemplateStyled>{children}</ButtonsWrapperTemplateStyled>
    )
}

export default WSButtonsWrapperTemplate
