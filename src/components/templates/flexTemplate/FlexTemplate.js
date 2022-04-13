import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import FlexTemplateStyle from './FlexTemplateStyle'


const FlexTemplate = ({ children, ...rest }) => {
    const FlexTemplateStyled = useStyle('FlexTemplateStyled', 'div', FlexTemplateStyle, 'alignItemsCenter')
    return <FlexTemplateStyled {...rest}>{children}</FlexTemplateStyled>
}

export default FlexTemplate
