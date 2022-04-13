import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import LabelTemplateStyle from './LabelTemplateStyle'


const WSLabelTemplate = ({ children, alignLeft, alignLeftFixedWidth }) => {
    const LabelTemplateStyled = useStyle('LabelTemplateStyled', 'div', LabelTemplateStyle,
        'alignLeft', 'alignLeftFixedWidth')
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
