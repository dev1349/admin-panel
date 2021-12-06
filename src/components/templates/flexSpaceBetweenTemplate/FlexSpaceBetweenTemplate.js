import React from 'react'
import { styled } from '@mui/material'

const FlexSpaceBetweenTemplateStyled = styled('div', {
    name: 'FlexSpaceBetweenTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FlexSpaceBetweenTemplate = ({ children }) => {
    return (
        <FlexSpaceBetweenTemplateStyled>
            {children}
        </FlexSpaceBetweenTemplateStyled>
    )
}

export default FlexSpaceBetweenTemplate
