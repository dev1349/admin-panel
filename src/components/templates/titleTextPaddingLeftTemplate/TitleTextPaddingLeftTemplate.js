import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const TitleTextPaddingLeftStyled = createStyled('TitleTextPaddingLeftStyle', 'div')

const WSTitleTextPaddingLeftTemplate = ({ children }) => {
    return <TitleTextPaddingLeftStyled>{children}</TitleTextPaddingLeftStyled>
}

export default WSTitleTextPaddingLeftTemplate
