import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const ClientButtonSpaceTemplateStyled = createStyled('ClientButtonSpaceTemplateStyle', 'span', 'lastChild')
const ClientButtonsTemplateStyled = createStyled('ClientButtonSpaceTemplateStyle', 'div', 'lastChild')

const ClientButtonsTemplate = ({ children }) => {
    const childrenWithoutEmpty = Array.isArray(children) ? children.filter(child => child) : children

    return (
        <ClientButtonsTemplateStyled>
            {Array.isArray(childrenWithoutEmpty) ? (
                childrenWithoutEmpty.map((child, index) => (
                    <ClientButtonSpaceTemplateStyled key={index} lastChild={children.filter(child => child).length - 1 === index}>
                        {child}
                    </ClientButtonSpaceTemplateStyled>
                ))
            ) : (
                <ClientButtonSpaceTemplateStyled lastChild>{childrenWithoutEmpty}</ClientButtonSpaceTemplateStyled>
            )}
        </ClientButtonsTemplateStyled>
    )
}

export default ClientButtonsTemplate
