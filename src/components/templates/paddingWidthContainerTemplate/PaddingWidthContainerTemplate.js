import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import PaddingWidthContainerTemplateStyle from './PaddingWidthContainerTemplateStyle'


const WSPaddingWidthContainerTemplate = ({ children }) => {
    const PaddingWidthContainerTemplateStyled = useStyle('PaddingWidthContainerTemplateStyled', 'div', PaddingWidthContainerTemplateStyle)
    return (
        <PaddingWidthContainerTemplateStyled>
            {children}
        </PaddingWidthContainerTemplateStyled>
    )
}

export default WSPaddingWidthContainerTemplate
