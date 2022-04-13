import React from 'react'
import LabelTemplate from '../labelTemplate/LabelTemplate'
import FieldTemplate from '../fieldTemplate/FeildTemplate'
import { useStyle } from '../../../hooks/useStyle'
import LabeledInputTemplateStyle from './LabeledInputTemplateStyle'


const WSLabeledInputTemplate = ({
    children,
    alignLeft,
    alignLeftFixedWidth,
    fixedWidthWithMarginRight,
}) => {
    const LabeledInputTemplateStyled = useStyle('LabeledInputTemplateStyled', 'div', LabeledInputTemplateStyle, 'fixedWidthWithMarginRight')
    return (
        <LabeledInputTemplateStyled
            fixedWidthWithMarginRight={fixedWidthWithMarginRight}
        >
            <LabelTemplate
                alignLeft={alignLeft}
                alignLeftFixedWidth={alignLeftFixedWidth}
            >
                {children[0]}
            </LabelTemplate>
            <FieldTemplate>{children[1]}</FieldTemplate>
        </LabeledInputTemplateStyled>
    )
}

export default WSLabeledInputTemplate
