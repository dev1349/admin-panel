import React from 'react'
import {useStyle} from '../../../hooks/useStyle'
import TitleTextPaddingLeftStyle from './TitleTextPaddingLeftStyle'

const WSTitleTextPaddingLeftTemplate = ({children}) => {
    const TitleTextPaddingLeftStyled = useStyle('TitleTextPaddingLeftStyled', 'div', TitleTextPaddingLeftStyle)
    return <TitleTextPaddingLeftStyled>{children}</TitleTextPaddingLeftStyled>
}

export default WSTitleTextPaddingLeftTemplate
