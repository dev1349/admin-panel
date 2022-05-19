import React from 'react'
import { createStyled } from '../../../services/style/createStyled'

const PageHeaderWrapperStyled = createStyled('PageHeaderWrapperStyle', 'div')

const PageHeaderWrapperWS = ({ children, ...rest }) => {
    return (
        <PageHeaderWrapperStyled {...rest}>{children}</PageHeaderWrapperStyled>
    )
}

export default PageHeaderWrapperWS
