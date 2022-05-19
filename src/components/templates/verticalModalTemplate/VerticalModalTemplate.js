import React from 'react'
import PaddingBottomTemplate from '../paddingBottomTemplate/PaddingBottomTemplate'
import { createStyled } from '../../../services/style/createStyled'

const VerticalModalTemplateStyled = createStyled(
    'VerticalModalTemplateStyle',
    'div'
)

const WSVerticalModalTemplate = ({ children, ...rest }) => {
    return (
        <VerticalModalTemplateStyled {...rest}>
            <PaddingBottomTemplate>{children[0]}</PaddingBottomTemplate>
            {children[1]}
        </VerticalModalTemplateStyled>
    )
}

export default WSVerticalModalTemplate
