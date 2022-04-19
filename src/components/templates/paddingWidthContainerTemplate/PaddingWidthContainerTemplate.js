import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSPaddingWidthContainerTemplate = ({ children }) => {
    const PaddingWidthContainerTemplateStyled = useStyle('PaddingWidthContainerTemplateStyle', 'div')
    return (
        <PaddingWidthContainerTemplateStyled>
            {children}
        </PaddingWidthContainerTemplateStyled>
    )
}

export default WSPaddingWidthContainerTemplate
