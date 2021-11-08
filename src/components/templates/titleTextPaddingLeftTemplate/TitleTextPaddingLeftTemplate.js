import React from 'react'
import { styled } from '@mui/material'

const TitleTextPaddingLeftStyled = styled('div', {
    name: 'TitleTextPaddingLeftStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTitleTextPaddingLeftTemplate = ({ children }) => {
    return <TitleTextPaddingLeftStyled>{children}</TitleTextPaddingLeftStyled>
}

export default WSTitleTextPaddingLeftTemplate
