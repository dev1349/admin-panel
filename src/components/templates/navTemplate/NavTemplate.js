import React from 'react'
import { useStyle } from '../../../hooks/useStyle'
import NavTemplateStyle from './NavTemplateStyle'


const NavTemplateWSM = ({ children }) => {
    const NavTemplateStyled = useStyle('NavTemplateStyled', 'div', NavTemplateStyle)
    return <NavTemplateStyled>{children}</NavTemplateStyled>
}

export default NavTemplateWSM
