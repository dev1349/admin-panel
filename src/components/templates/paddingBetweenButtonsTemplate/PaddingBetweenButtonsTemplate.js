import React from 'react'
import { styled } from '@mui/material'

const PaddingBetweenButtonsTemplateStyled = styled('ul', {
    name: 'PaddingBetweenButtonsTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ButtonWrapperStyled = styled('li', {
    name: 'ButtonWrapperStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PaddingBetweenButtonsTemplate = ({ children }) => {
    return (
        <PaddingBetweenButtonsTemplateStyled>
            {children.map((child, index) => (
                <ButtonWrapperStyled key={index}>{child}</ButtonWrapperStyled>
            ))}
        </PaddingBetweenButtonsTemplateStyled>
    )
}

export default PaddingBetweenButtonsTemplate
