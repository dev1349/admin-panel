import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const PageHeaderTemplateWS = ({ children }) => {
    const PageHeaderTemplateStyled = useStyle('PageHeaderTemplateStyle', 'div')

    return <PageHeaderTemplateStyled>{children}</PageHeaderTemplateStyled>
}

export default PageHeaderTemplateWS
