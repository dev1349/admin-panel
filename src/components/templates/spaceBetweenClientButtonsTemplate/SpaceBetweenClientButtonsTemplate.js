import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const ClientButtonsTemplate = ({ children }) => {
    const ClientButtonSpaceTemplateStyled = useStyle('ClientButtonSpaceTemplateStyle', 'span')
    const ClientButtonsTemplateStyled = useStyle('ClientButtonSpaceTemplateStyle', 'div')

    const childrenWithoutEmpty = Array.isArray(children)
        ? children.filter(child => child)
        : children

    return (
        <ClientButtonsTemplateStyled>
            {Array.isArray(childrenWithoutEmpty) ? (
                childrenWithoutEmpty.map((child, index) => (
                    <ClientButtonSpaceTemplateStyled
                        key={index}
                        lastChild={
                            children.filter(child => child).length - 1 === index
                        }
                    >
                        {child}
                    </ClientButtonSpaceTemplateStyled>
                ))
            ) : (
                <ClientButtonSpaceTemplateStyled lastChild>
                    {childrenWithoutEmpty}
                </ClientButtonSpaceTemplateStyled>
            )}
        </ClientButtonsTemplateStyled>
    )
}

export default ClientButtonsTemplate
