import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSButtonsWrapperTemplate = ({ children }) => {
    const ButtonsWrapperTemplateStyled = useStyle('ButtonsWrapperTemplateStyle', 'div')
    return (
        <ButtonsWrapperTemplateStyled>{children}</ButtonsWrapperTemplateStyled>
    )
}

export default WSButtonsWrapperTemplate
