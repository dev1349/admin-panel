import React from 'react'
import { useStyle } from '../../../hooks/useStyle'

const WSTitleAndButtonsTemplate = ({ children }) => {
    const TitleAndButtonsTemplateStyled = useStyle('TitleAndButtonsTemplateStyle', 'div')
    return (
        <TitleAndButtonsTemplateStyled>
            {children}
        </TitleAndButtonsTemplateStyled>
    )
}

export default WSTitleAndButtonsTemplate
