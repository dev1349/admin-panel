import React from 'react'
import {useStyle} from '../../../hooks/useStyle'

const WSTitleTextPaddingLeftTemplate = ({children}) => {
    const TitleTextPaddingLeftStyled = useStyle('TitleTextPaddingLeftStyle', 'div')
    return <TitleTextPaddingLeftStyled>{children}</TitleTextPaddingLeftStyled>
}

export default WSTitleTextPaddingLeftTemplate
