import React from 'react'
import { styled } from '@mui/material'

const NavTemplateStyled = styled('div', {
    name: 'NavTemplateStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const NavTemplateWSM = ({ children }) => {
    return <NavTemplateStyled>{children}</NavTemplateStyled>
}

export default NavTemplateWSM
