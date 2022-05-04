import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const StatisticsItemTemplate = ({ children }) => {
    const StatisticsItemTemplateStyled = useStyle('StatisticsItemTemplateStyle', 'div')
    return (
        <StatisticsItemTemplateStyled>{children}</StatisticsItemTemplateStyled>
    )
}

export default StatisticsItemTemplate
