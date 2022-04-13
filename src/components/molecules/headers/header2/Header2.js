import React from 'react'
import H2 from '../../../atoms/textElements/headers/H2/H2'
import IconTitleTemplate from '../../../templates/iconTitleTemplate/IconTitleTemplate'
import { useStyle } from '../../../../hooks/useStyle'
import Header2Style from './Header2Style'


const Header2 = ({ icon = null, children }) => {
    const Header2Styled = useStyle('Header2Styled', 'header', Header2Style)
    return (
        <Header2Styled>
            <IconTitleTemplate>
                {icon}
                <H2>{children}</H2>
            </IconTitleTemplate>
        </Header2Styled>
    )
}

export default Header2
