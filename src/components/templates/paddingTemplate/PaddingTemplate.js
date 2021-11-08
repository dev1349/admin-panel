import React from 'react'
import { styled } from '@mui/material'

const PaddingTemplateStyled = styled('div', {
    name: 'PaddingTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSPaddingTemplate = ({ children }) => {
    return <PaddingTemplateStyled>{children}</PaddingTemplateStyled>
}

export default WSPaddingTemplate
