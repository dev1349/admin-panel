import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import PageHeaderItemRightTemplateStyle from './PageHeaderItemRightTemplateStyle'


const PageHeaderItemRightTemplateWS = ({ children }) => {
    const PageHeaderItemRightTemplateStyled = useStyle('PageHeaderItemRightTemplateStyled', 'div', PageHeaderItemRightTemplateStyle)
    return (
        <PageHeaderItemRightTemplateStyled>
            {children}
        </PageHeaderItemRightTemplateStyled>
    )
}

export default PageHeaderItemRightTemplateWS
