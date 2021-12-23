import React from 'react'
import { styled } from '@mui/material'

const PaddingTopTemplateStyled = styled('div', {
    name: 'PaddingTopTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PaddingTopTemplate = ({ children }) => {
    return <PaddingTopTemplateStyled>{children}</PaddingTopTemplateStyled>
}

export default PaddingTopTemplate
