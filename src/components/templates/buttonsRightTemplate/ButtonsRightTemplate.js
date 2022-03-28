import React from 'react'
import { styled } from '@mui/material'

const ButtonsRightTemplateStyled = styled('div', {
    name: 'ButtonsRightTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const ButtonTemplateStyled = styled('span', {
    name: 'ButtonTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const FlexFirstGrowTemplate = ({ children, ...rest }) => {
    const isManyChildren = Array.isArray(children)

    return (
        <ButtonsRightTemplateStyled {...rest}>
            <ButtonTemplateStyled>
                {isManyChildren ? children[0] : children}
            </ButtonTemplateStyled>
            {isManyChildren &&
                children
                    .slice(1)
                    .filter(child => child)
                    .map((elem, index) => (
                        <ButtonTemplateStyled key={index}>
                            {elem}
                        </ButtonTemplateStyled>
                    ))}
        </ButtonsRightTemplateStyled>
    )
}

export default FlexFirstGrowTemplate
