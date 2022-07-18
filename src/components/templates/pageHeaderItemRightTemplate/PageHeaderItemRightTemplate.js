import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PageHeaderItemRightTemplateStyled = createStyled('PageHeaderItemRightTemplateStyle', 'div')

const PageHeaderItemRightTemplateWS = ({ children }) => {
    return <PageHeaderItemRightTemplateStyled>{children}</PageHeaderItemRightTemplateStyled>
}

export default PageHeaderItemRightTemplateWS
