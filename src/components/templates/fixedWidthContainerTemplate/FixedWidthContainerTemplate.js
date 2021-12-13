import React from 'react'
import { styled } from '@mui/material'

const FixedWidthContainerTemplateStyled = styled('div', {
    name: 'FixedWidthContainerTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSFixedWidthContainerTemplate = ({ children }) => {
    return (
        <FixedWidthContainerTemplateStyled>
            {children}
        </FixedWidthContainerTemplateStyled>
    )
}

export default WSFixedWidthContainerTemplate
