import React from 'react'
import { styled } from '@mui/material/styles'

const FlexTemplateStyled = styled('div', {
    shouldForwardProp: prop => prop !== 'alignItemsCenter',
    name: 'FlexTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FlexTemplate = ({ children, ...rest }) => {
    return <FlexTemplateStyled {...rest}>{children}</FlexTemplateStyled>
}

export default FlexTemplate
