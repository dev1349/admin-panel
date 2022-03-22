import React from 'react'
import { styled } from '@mui/material'

const SpaceBetweenTemplateStyled = styled('div', {
    name: 'SpaceBetweenTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SpaceBetweenClientButtonGroupsTemplate = ({ children }) => {
    return <SpaceBetweenTemplateStyled>{children}</SpaceBetweenTemplateStyled>
}

export default SpaceBetweenClientButtonGroupsTemplate
