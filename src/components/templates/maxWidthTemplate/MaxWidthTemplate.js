import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const WSMaxWidthContainer = ({ children }) => {
    const MaxWidthTemplateStyled = useStyle('MaxWidthTemplateStyle', 'div')
    return <MaxWidthTemplateStyled>{children}</MaxWidthTemplateStyled>
}

export default WSMaxWidthContainer
