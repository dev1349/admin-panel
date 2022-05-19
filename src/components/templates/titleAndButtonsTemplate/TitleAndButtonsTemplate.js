import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const TitleAndButtonsTemplateStyled = createStyled(
    'TitleAndButtonsTemplateStyle',
    'div'
)

const WSTitleAndButtonsTemplate = ({ children }) => {
    return (
        <TitleAndButtonsTemplateStyled>
            {children}
        </TitleAndButtonsTemplateStyled>
    )
}

export default WSTitleAndButtonsTemplate
