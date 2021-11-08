import React from 'react'
import { styled } from '@mui/material'

const FieldTemplateStyled = styled('div', {
    name: 'FieldTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSFieldTemplate = ({ children }) => {
    return <FieldTemplateStyled>{children}</FieldTemplateStyled>
}

export default WSFieldTemplate
