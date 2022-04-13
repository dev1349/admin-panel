import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import ClientFunctionContainerTemplateStyle from './ClientFunctionContainerTemplateStyle'


const ClientFunctionContainerTemplate = ({ children }) => {
    const ClientFunctionContainerTemplateStyled = useStyle('ClientFunctionContainerTemplateStyled', 'div',
        ClientFunctionContainerTemplateStyle)
    return (
        <ClientFunctionContainerTemplateStyled>
            {children}
        </ClientFunctionContainerTemplateStyled>
    )
}

export default ClientFunctionContainerTemplate
