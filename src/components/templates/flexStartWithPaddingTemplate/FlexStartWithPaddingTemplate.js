import React from 'react'
import { styled } from '@mui/material'

const FlexStartWithPaddingTemplateStyled = styled('div', {
    name: 'FlexStartWithPaddingTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSFlexStartWithPaddingTemplate = ({ children }) => {
    return (
        <FlexStartWithPaddingTemplateStyled>
            {children}
        </FlexStartWithPaddingTemplateStyled>
    )
}

export default WSFlexStartWithPaddingTemplate
