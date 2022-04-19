import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const NavTemplateWSM = ({ children }) => {
    const NavTemplateStyled = useStyle('NavTemplateStyle', 'div')
    return <NavTemplateStyled>{children}</NavTemplateStyled>
}

export default NavTemplateWSM
