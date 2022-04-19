import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSFixedWidthContainerTemplate = ({ children }) => {
    const FixedWidthContainerTemplateStyled = useStyle('FixedWidthContainerTemplateStyle', 'div')
    return (
        <FixedWidthContainerTemplateStyled>
            {children}
        </FixedWidthContainerTemplateStyled>
    )
}

export default WSFixedWidthContainerTemplate
