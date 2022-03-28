import React from 'react'
import { styled } from '@mui/material'

const FlexFirstGrowTemplateStyled = styled('div', {
    shouldForwardProp: prop =>
        prop !== 'noPadding' && prop !== 'alignItemsCenter',
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
    shouldForwardProp: prop => prop !== 'noMargin',
    name: 'OtherElementTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FlexFirstGrowTemplate = ({ children, noMargin, ...rest }) => {
    const isManyChildren = Array.isArray(children)

    return (
        <FlexFirstGrowTemplateStyled {...rest}>
            <FirstElementTemplateStyled>
                {isManyChildren ? children[0] : children}
            </FirstElementTemplateStyled>
            {isManyChildren &&
                children
                    .slice(1)
                    .filter(child => child)
                    .map((elem, index) => (
                        <OtherElementTemplateStyled
                            key={index}
                            noMargin={noMargin}
                        >
                            {elem}
                        </OtherElementTemplateStyled>
                    ))}
        </FlexFirstGrowTemplateStyled>
    )
}

export default FlexFirstGrowTemplate
