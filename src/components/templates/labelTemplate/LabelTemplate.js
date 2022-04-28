import React from 'react'
import { useStyle } from '../../../hooks/useStyle'

const WSLabelTemplate = ({ children, alignLeft, alignLeftFixedWidth }) => {
    const LabelTemplateStyled = useStyle('LabelTemplateStyle', 'div',
        ['alignLeft', 'alignLeftFixedWidth'])
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
