import React from 'react'
import { styled } from '@mui/material/styles'

const LabelWithHelpTemplateStyled = styled('div', {
    name: 'LabelWithHelpTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const LabelWithHelpTemplate = ({ children, ...rest }) => {
    return (
        <LabelWithHelpTemplateStyled {...rest}>
            {children}
        </LabelWithHelpTemplateStyled>
    )
}

export default LabelWithHelpTemplate
