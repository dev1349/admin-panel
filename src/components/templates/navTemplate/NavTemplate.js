import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const NavTemplateStyled = createStyled('NavTemplateStyle', 'div')

const NavTemplateWSM = ({ children }) => {
    return <NavTemplateStyled>{children}</NavTemplateStyled>
}

export default NavTemplateWSM
