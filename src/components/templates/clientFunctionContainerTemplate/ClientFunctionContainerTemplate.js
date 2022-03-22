import React from 'react'
import { styled } from '@mui/material'

const ClientFunctionContainerTemplateStyled = styled('div', {
    name: 'ClientFunctionContainerTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ClientFunctionContainerTemplate = ({ children }) => {
    return (
        <ClientFunctionContainerTemplateStyled>
            {children}
        </ClientFunctionContainerTemplateStyled>
    )
}

export default ClientFunctionContainerTemplate
