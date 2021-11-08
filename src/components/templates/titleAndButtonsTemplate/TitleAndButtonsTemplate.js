import React from 'react'
import { styled } from '@mui/material'

const TitleAndButtonsTemplateStyled = styled('div', {
    name: 'TitleAndButtonsTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTitleAndButtonsTemplate = ({ children }) => {
    return (
        <TitleAndButtonsTemplateStyled>
            {children}
        </TitleAndButtonsTemplateStyled>
    )
}

export default WSTitleAndButtonsTemplate
