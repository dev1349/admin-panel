import React from 'react'
import { styled } from '@mui/material'

const LabelTemplateStyled = styled('div', {
    shouldForwardProp: prop =>
        prop !== 'alignLeft' && prop !== 'alignLeftFixedWidth',
    name: 'LabelTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabelTemplate = ({ children, alignLeft, alignLeftFixedWidth }) => {
    return (
        <LabelTemplateStyled
            alignLeft={alignLeft}
            alignLeftFixedWidth={alignLeftFixedWidth}
        >
            {children}
        </LabelTemplateStyled>
    )
}

export default WSLabelTemplate
