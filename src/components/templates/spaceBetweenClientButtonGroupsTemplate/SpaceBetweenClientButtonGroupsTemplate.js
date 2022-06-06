import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const SpaceBetweenClientButtonGroupsTemplate = ({ children }) => {
    const SpaceBetweenTemplateStyled = createStyled(
        'SpaceBetweenTemplateStyle',
        'div'
    )
    return <SpaceBetweenTemplateStyled>{children}</SpaceBetweenTemplateStyled>
}

export default SpaceBetweenClientButtonGroupsTemplate
