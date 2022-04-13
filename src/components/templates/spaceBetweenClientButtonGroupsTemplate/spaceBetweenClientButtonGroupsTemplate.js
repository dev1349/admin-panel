import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import SpaceBetweenTemplateStyle from './SpaceBetweenTemplateStyle'

const SpaceBetweenClientButtonGroupsTemplate = ({ children }) => {
    const SpaceBetweenTemplateStyled = useStyle('SpaceBetweenTemplateStyled', 'div', SpaceBetweenTemplateStyle)
    return <SpaceBetweenTemplateStyled>{children}</SpaceBetweenTemplateStyled>
}

export default SpaceBetweenClientButtonGroupsTemplate
