import React from 'react'
import { useStyle } from '../../../hooks/useStyle'

const SpaceBetweenClientButtonGroupsTemplate = ({ children }) => {
    const SpaceBetweenTemplateStyled = useStyle('SpaceBetweenTemplateStyle', 'div')
    return <SpaceBetweenTemplateStyled>{children}</SpaceBetweenTemplateStyled>
}

export default SpaceBetweenClientButtonGroupsTemplate
