import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const NpOfficeTemplateStyled = createStyled('OfficeTemplateStyle', 'div')

const NpOfficeTemplate = ({ children }) => {
    return <NpOfficeTemplateStyled>{children}</NpOfficeTemplateStyled>
}

export default NpOfficeTemplate
