import React from 'react'
import { styled } from '@mui/material'

const TextAlignRightTemplateStyled = styled('div', {
    shouldForwardProp: prop => prop !== 'topBottomMargin',
    name: 'TextAlignRightTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TextAlignRightTemplate = ({ children, ...rest }) => {
    return (
        <TextAlignRightTemplateStyled {...rest}>
            {children}
        </TextAlignRightTemplateStyled>
    )
}

export default TextAlignRightTemplate
