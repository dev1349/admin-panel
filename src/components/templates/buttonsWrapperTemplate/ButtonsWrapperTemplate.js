import React from 'react'
import { styled } from '@mui/material'

const ButtonsWrapperTemplateStyled = styled('div', {
    name: 'ButtonsWrapperTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSButtonsWrapperTemplate = ({ children }) => {
    return (
        <ButtonsWrapperTemplateStyled>{children}</ButtonsWrapperTemplateStyled>
    )
}

export default WSButtonsWrapperTemplate
