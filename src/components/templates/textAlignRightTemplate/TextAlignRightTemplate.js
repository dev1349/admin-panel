import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const TextAlignRightTemplateStyled = createStyled(
    'TextAlignRightTemplateStyle',
    'div',
    ['topBottomMargin']
)

const TextAlignRightTemplate = ({ children, ...rest }) => {
    return (
        <TextAlignRightTemplateStyled {...rest}>
            {children}
        </TextAlignRightTemplateStyled>
    )
}

export default TextAlignRightTemplate
