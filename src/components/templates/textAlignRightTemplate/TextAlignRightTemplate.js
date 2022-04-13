import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import TextAlignRightTemplateStyle from './TextAlignRightTemplateStyle'


const TextAlignRightTemplate = ({ children, ...rest }) => {
    const TextAlignRightTemplateStyled = useStyle('TitleAndButtonsTemplateStyled', 'div',
        TextAlignRightTemplateStyle, 'topBottomMargin')

    return (
        <TextAlignRightTemplateStyled {...rest}>
            {children}
        </TextAlignRightTemplateStyled>
    )
}

export default TextAlignRightTemplate
