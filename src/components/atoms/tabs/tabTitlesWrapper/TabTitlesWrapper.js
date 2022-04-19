import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'


const WSTabsTitleWrapper = ({ children }) => {
    const TabTitlesWrapperStyled = useStyle('TabTitlesWrapperStyle', 'div')
    return <TabTitlesWrapperStyled>{children}</TabTitlesWrapperStyled>
}

export default WSTabsTitleWrapper
