import React from 'react'
import { styled } from '@mui/material'

const PageHeaderTemplateStyled = styled('div', {
    name: 'PageHeaderTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PageHeaderTemplateWS = ({ children }) => {
    return <PageHeaderTemplateStyled>{children}</PageHeaderTemplateStyled>
}

export default PageHeaderTemplateWS
