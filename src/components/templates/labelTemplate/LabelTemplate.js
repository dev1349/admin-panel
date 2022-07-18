import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const LabelTemplateStyled = createStyled('LabelTemplateStyle', 'div', ['alignLeft', 'alignLeftFixedWidth', 'noMarginTop'])

const WSLabelTemplate = ({ children, alignLeft, alignLeftFixedWidth, noMarginTop }) => {
    return (
        <LabelTemplateStyled alignLeft={alignLeft} alignLeftFixedWidth={alignLeftFixedWidth} noMarginTop={noMarginTop}>
            {children}
        </LabelTemplateStyled>
    )
}

export default WSLabelTemplate
