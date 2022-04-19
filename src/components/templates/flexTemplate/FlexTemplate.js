import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const FlexTemplate = ({ children, ...rest }) => {
    const FlexTemplateStyled = useStyle('FlexTemplateStyle', 'div', 'alignItemsCenter')
    return <FlexTemplateStyled {...rest}>{children}</FlexTemplateStyled>
}

export default FlexTemplate
