import React from 'react'
import PaddingBottomTemplate from '../paddingBottomTemplate/PaddingBottomTemplate'
import { useStyle } from '../../../hooks/useStyle'

const WSVerticalModalTemplate = ({ children, ...rest }) => {
    const VerticalModalTemplateStyled = useStyle('VerticalModalTemplateStyled', 'div', null)
    return (
        <VerticalModalTemplateStyled {...rest}>
            <PaddingBottomTemplate>{children[0]}</PaddingBottomTemplate>
            {children[1]}
        </VerticalModalTemplateStyled>
    )
}

export default WSVerticalModalTemplate
