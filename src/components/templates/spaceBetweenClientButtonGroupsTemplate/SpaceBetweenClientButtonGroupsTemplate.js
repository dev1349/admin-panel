import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const SpaceBetweenTemplateStyled = createStyled(
    'SpaceBetweenTemplateStyle',
    'div'
)

const SpaceBetweenClientButtonGroupsTemplate = ({ children }) => {
    return <SpaceBetweenTemplateStyled>{children}</SpaceBetweenTemplateStyled>
}

export default SpaceBetweenClientButtonGroupsTemplate
