import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const ClientFunctionContainerTemplateStyled = createStyled(
    'ClientFunctionContainerTemplateStyle',
    'div'
)

const ClientFunctionContainerTemplate = ({ children }) => {
    return (
        <ClientFunctionContainerTemplateStyled>
            {children}
        </ClientFunctionContainerTemplateStyled>
    )
}

export default ClientFunctionContainerTemplate
