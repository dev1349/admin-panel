import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const PageHeaderItemRightTemplateWS = ({ children }) => {
    const PageHeaderItemRightTemplateStyled = useStyle('PageHeaderItemRightTemplateStyle', 'div')
    return (
        <PageHeaderItemRightTemplateStyled>
            {children}
        </PageHeaderItemRightTemplateStyled>
    )
}

export default PageHeaderItemRightTemplateWS
