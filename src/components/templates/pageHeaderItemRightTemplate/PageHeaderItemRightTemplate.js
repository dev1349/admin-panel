import React from 'react'
import { styled } from '@mui/material'

const PageHeaderItemRightTemplateStyled = styled('div', {
    name: 'PageHeaderItemRightTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PageHeaderItemRightTemplateWS = ({ children }) => {
    return (
        <PageHeaderItemRightTemplateStyled>
            {children}
        </PageHeaderItemRightTemplateStyled>
    )
}

export default PageHeaderItemRightTemplateWS
