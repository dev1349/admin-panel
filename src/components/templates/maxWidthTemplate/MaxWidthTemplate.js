import React from 'react'
import { styled } from '@mui/material'

const MaxWidthTemplateStyled = styled('div', {
    name: 'MaxWidthTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSMaxWidthContainer = ({ children }) => {
    return <MaxWidthTemplateStyled>{children}</MaxWidthTemplateStyled>
}

export default WSMaxWidthContainer
