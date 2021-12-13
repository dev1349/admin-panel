import React from 'react'
import { styled } from '@mui/material'

const LabelTemplateStyled = styled('div', {
    shouldForwardProp: prop => prop !== 'alignLeft',
    name: 'LabelTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabelTemplate = ({ children, alignLeft }) => {
    return (
        <LabelTemplateStyled alignLeft={alignLeft}>
            {children}
        </LabelTemplateStyled>
    )
}

export default WSLabelTemplate
