import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const TabTitlesWrapperStyled = createStyled('TabTitlesWrapperStyle', 'div')

const WSTabsTitleWrapper = ({ children }) => {
    return <TabTitlesWrapperStyled>{children}</TabTitlesWrapperStyled>
}

export default WSTabsTitleWrapper
