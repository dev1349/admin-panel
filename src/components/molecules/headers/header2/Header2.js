import React from 'react'
import styled from 'styled-components'
import H2 from '../../../atoms/headers/H2/H2'
import IconTitleTemplate from '../../../templates/iconTitleTemplate/IconTitleTemplate'

const Header2Styled = styled.header`
    background-color: lightgrey;
`

const H2Styled = styled(H2)``

const Header2 = ({ icon, children }) => {
    return (
        <Header2Styled>
            <IconTitleTemplate>
                {icon}
                <H2Styled>{children}</H2Styled>
            </IconTitleTemplate>
        </Header2Styled>
    )
}

export default Header2
