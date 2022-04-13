import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FixedWidthContainerTemplateStyle from './FixedWidthContainerTemplateStyle'


const WSFixedWidthContainerTemplate = ({ children }) => {
    const FixedWidthContainerTemplateStyled = useStyle('FixedWidthContainerTemplateStyled', 'div', FixedWidthContainerTemplateStyle)
    return (
        <FixedWidthContainerTemplateStyled>
            {children}
        </FixedWidthContainerTemplateStyled>
    )
}

export default WSFixedWidthContainerTemplate
