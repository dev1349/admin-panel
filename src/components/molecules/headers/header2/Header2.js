import React from 'react'
import { styled } from '@mui/material'
import H2 from '../../../atoms/textElements/headers/H2/H2'
import IconTitleTemplate from '../../../templates/iconTitleTemplate/IconTitleTemplate'

const Header2Styled = styled('header', {
    name: 'Header2Styled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

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
