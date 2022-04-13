import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'
import TabTitlesWrapperStyle from './TabTitlesWrapperStyle'


const WSTabsTitleWrapper = ({ children }) => {
    const TabTitlesWrapperStyled = useStyle('TabTitlesWrapperStyled', 'div', TabTitlesWrapperStyle)
    return <TabTitlesWrapperStyled>{children}</TabTitlesWrapperStyled>
}

export default WSTabsTitleWrapper
