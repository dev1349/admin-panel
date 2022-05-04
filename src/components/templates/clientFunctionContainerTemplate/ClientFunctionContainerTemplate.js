import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const ClientFunctionContainerTemplate = ({ children }) => {
    const ClientFunctionContainerTemplateStyled = useStyle('ClientFunctionContainerTemplateStyle', 'div')
    return (
        <ClientFunctionContainerTemplateStyled>
            {children}
        </ClientFunctionContainerTemplateStyled>
    )
}

export default ClientFunctionContainerTemplate
