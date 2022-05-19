import React from 'react'
import LabelTemplate from '../labelTemplate/LabelTemplate'
import { createStyled } from '../../../services/style/createStyled'
import FieldTemplate from '../fieldTemplate/FieldTemplate'

const LabeledInputTemplateStyled = createStyled(
    'LabeledInputTemplateStyle',
    'div',
    ['fixedWidthWithMarginRight', 'alignItemsCenter']
)

const WSLabeledInputTemplate = ({
    children,
    alignLeft,
    alignLeftFixedWidth,
    fixedWidthWithMarginRight,
    alignItemsCenter,
    labelNoMarginTop,
}) => {
    return (
        <LabeledInputTemplateStyled
            fixedWidthWithMarginRight={fixedWidthWithMarginRight}
            alignItemsCenter={alignItemsCenter}
        >
            <LabelTemplate
                alignLeft={alignLeft}
                alignLeftFixedWidth={alignLeftFixedWidth}
                noMarginTop={labelNoMarginTop}
            >
                {children[0]}
            </LabelTemplate>
            <FieldTemplate>{children[1]}</FieldTemplate>
        </LabeledInputTemplateStyled>
    )
}

export default WSLabeledInputTemplate
