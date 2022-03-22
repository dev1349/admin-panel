import React from 'react'
import { styled } from '@mui/material'

const ClientButtonSpaceTemplateStyled = styled('span', {
    shouldForwardProp: prop => prop !== 'lastChild',
    name: 'ClientButtonSpaceTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ClientButtonsTemplateStyled = styled('div', {
    name: 'ClientButtonsTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ClientButtonsTemplate = ({ children }) => {
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
