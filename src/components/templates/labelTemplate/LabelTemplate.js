import React from 'react'
import { styled } from '@mui/material'

const LabelTemplateStyled = styled('div', {
    name: 'LabelTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabelTemplate = ({ children }) => {
    return <LabelTemplateStyled>{children}</LabelTemplateStyled>
}

export default WSLabelTemplate
