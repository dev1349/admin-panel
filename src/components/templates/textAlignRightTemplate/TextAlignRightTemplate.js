import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const TextAlignRightTemplate = ({ children, ...rest }) => {
    const TextAlignRightTemplateStyled = useStyle('TextAlignRightTemplateStyle', 'div', 'topBottomMargin')

    return (
        <TextAlignRightTemplateStyled {...rest}>
            {children}
        </TextAlignRightTemplateStyled>
    )
}

export default TextAlignRightTemplate
