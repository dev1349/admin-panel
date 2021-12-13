import React from 'react'
import { styled } from '@mui/material'

const PaddingWidthContainerTemplateStyled = styled('div', {
    name: 'PaddingWidthContainerTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSPaddingWidthContainerTemplate = ({ children }) => {
    return (
        <PaddingWidthContainerTemplateStyled>
            {children}
        </PaddingWidthContainerTemplateStyled>
    )
}

export default WSPaddingWidthContainerTemplate
