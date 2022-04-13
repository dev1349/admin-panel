import React from 'react'
import { useStyle } from '../../../hooks/useStyle'


const PageHeaderWrapperWS = ({ children, ...rest }) => {
    const PageHeaderWrapperStyled = useStyle('PageHeaderWrapperStyled', 'div', null)
    return (
        <PageHeaderWrapperStyled {...rest}>{children}</PageHeaderWrapperStyled>
    )
}

export default PageHeaderWrapperWS
