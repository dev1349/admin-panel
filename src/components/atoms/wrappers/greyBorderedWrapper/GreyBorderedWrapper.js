import React from 'react'
import { createStyled } from '../../../../services/style/createStyled'

const GreyBorderedWrapperStyled = createStyled('GreyBorderedWrapperStyle', 'div', ['topBottomMargin', 'withPadding'])

const WSGreyBorderWrapper = ({ children, ...rest }) => {
    return <GreyBorderedWrapperStyled {...rest}>{children}</GreyBorderedWrapperStyled>
}

export default WSGreyBorderWrapper
