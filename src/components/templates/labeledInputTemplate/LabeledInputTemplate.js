import React from 'react'
import { styled } from '@mui/material'
import LabelTemplate from '../labelTemplate/LabelTemplate'
import FieldTemplate from '../fieldTemplate/FeildTemplate'

const LabeledInputTemplateStyled = styled('div', {
    shouldForwardProp: prop => prop !== 'fixedWidthWithMarginRight',
    name: 'LabeledInputTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSLabeledInputTemplate = ({
    children,
    alignLeft,
    fixedWidthWithMarginRight,
}) => {
    return (
        <LabeledInputTemplateStyled
            fixedWidthWithMarginRight={fixedWidthWithMarginRight}
        >
            <LabelTemplate alignLeft={alignLeft}>{children[0]}</LabelTemplate>
            <FieldTemplate>{children[1]}</FieldTemplate>
        </LabeledInputTemplateStyled>
    )
}

export default WSLabeledInputTemplate
