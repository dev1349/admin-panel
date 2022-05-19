import React from 'react'
import H2 from '../../../atoms/textElements/headers/H2/H2'
import IconTitleTemplate from '../../../templates/iconTitleTemplate/IconTitleTemplate'
import { createStyled } from '../../../../services/style/createStyled'

const Header2Styled = createStyled('Header2Style', 'header')

const Header2 = ({ icon = null, children }) => {
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
