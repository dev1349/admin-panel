import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const StatisticsItemTemplateStyled = createStyled('StatisticsItemTemplateStyle', 'div')

const StatisticsItemTemplate = ({ children }) => {
    return <StatisticsItemTemplateStyled>{children}</StatisticsItemTemplateStyled>
}

export default StatisticsItemTemplate
