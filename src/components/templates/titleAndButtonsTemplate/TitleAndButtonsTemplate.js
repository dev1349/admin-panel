import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import TitleAndButtonsTemplateStyle from './TitleAndButtonsTemplateStyle'

const WSTitleAndButtonsTemplate = ({ children }) => {
    const TitleAndButtonsTemplateStyled = useStyle('TitleAndButtonsTemplateStyled', 'div', TitleAndButtonsTemplateStyle)
    return (
        <TitleAndButtonsTemplateStyled>
            {children}
        </TitleAndButtonsTemplateStyled>
    )
}

export default WSTitleAndButtonsTemplate
