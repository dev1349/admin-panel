import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import MaxWidthTemplateStyle from './MaxWidthTemplateStyle'


const WSMaxWidthContainer = ({ children }) => {
    const MaxWidthTemplateStyled = useStyle('MaxWidthTemplateStyled', 'div', MaxWidthTemplateStyle)
    return <MaxWidthTemplateStyled>{children}</MaxWidthTemplateStyled>
}

export default WSMaxWidthContainer
