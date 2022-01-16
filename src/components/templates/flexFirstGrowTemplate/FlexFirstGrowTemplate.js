import React from 'react'
import { styled } from '@mui/material'

const FlexFirstGrowTemplateStyled = styled('div', {
    name: 'FlexFirstGrowTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FirstElementTemplateStyled = styled('div', {
    name: 'FirstElementTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const OtherElementTemplateStyled = styled('div', {
    name: 'OtherElementTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FlexFirstGrowTemplate = ({ children }) => {
    return (
        <FlexFirstGrowTemplateStyled>
            <FirstElementTemplateStyled>
                {children[0]}
            </FirstElementTemplateStyled>
            {children.slice(1).map((elem, index) => (
                <OtherElementTemplateStyled key={index}>
                    {elem}
                </OtherElementTemplateStyled>
            ))}
        </FlexFirstGrowTemplateStyled>
    )
}

export default FlexFirstGrowTemplate
