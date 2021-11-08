import React from 'react'
import { styled } from '@mui/material'
import PaddingBottomTemplate from '../paddingBottomTemplate/PaddingBottomTemplate'

const VerticalModalTemplateStyled = styled('div', {
    name: 'VerticalModalTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSVerticalModalTemplate = ({ children, ...rest }) => {
    return (
        <VerticalModalTemplateStyled {...rest}>
            <PaddingBottomTemplate>{children[0]}</PaddingBottomTemplate>
            {children[1]}
        </VerticalModalTemplateStyled>
    )
}

export default WSVerticalModalTemplate
