import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const ButtonsWrapperTemplateStyled = createStyled('ButtonsWrapperTemplateStyle', 'div')

const WSButtonsWrapperTemplate = ({ children }) => {
    return <ButtonsWrapperTemplateStyled>{children}</ButtonsWrapperTemplateStyled>
}

export default WSButtonsWrapperTemplate
