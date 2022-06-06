import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const NpCityTemplateStyled = createStyled('CityTemplateStyle', 'div')

const NpCityTemplate = ({ children }) => {
    return <NpCityTemplateStyled>{children}</NpCityTemplateStyled>
}

export default NpCityTemplate
