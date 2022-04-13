import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import PageHeaderTemplateStyle from './PageHeaderTemplateStyle'


const PageHeaderTemplateWS = ({ children }) => {
    const PageHeaderTemplateStyled = useStyle('PageHeaderTemplateStyled', 'div', PageHeaderTemplateStyle)

    return <PageHeaderTemplateStyled>{children}</PageHeaderTemplateStyled>
}

export default PageHeaderTemplateWS
