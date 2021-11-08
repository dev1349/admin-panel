import React from 'react'
import { styled } from '@mui/material'

const PaddingBottomTemplateStyled = styled('div', {
    name: 'PaddingBottomTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSPaddingBottomTemplate = ({ children }) => {
    return <PaddingBottomTemplateStyled>{children}</PaddingBottomTemplateStyled>
}

export default WSPaddingBottomTemplate
