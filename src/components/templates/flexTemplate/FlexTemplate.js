import React from 'react'
import { styled } from '@mui/material'

const FlexTemplateStyled = styled('div', {
    name: 'FlexTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSFlexTemplate = ({ children }) => {
    return <FlexTemplateStyled>{children}</FlexTemplateStyled>
}

export default WSFlexTemplate
