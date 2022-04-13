import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import StatisticsItemTemplateStyle from './StatisticsItemTemplateStyle'


const StatisticsItemTemplate = ({ children }) => {
    const StatisticsItemTemplateStyled = useStyle('StatisticsItemTemplateStyled', 'div', StatisticsItemTemplateStyle)
    return (
        <StatisticsItemTemplateStyled>{children}</StatisticsItemTemplateStyled>
    )
}

export default StatisticsItemTemplate
