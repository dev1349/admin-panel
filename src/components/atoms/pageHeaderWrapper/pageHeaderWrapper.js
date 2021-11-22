import React from 'react'
import { styled } from '@mui/material/styles'

const PageHeaderWrapperStyled = styled('div', {
    name: 'PageHeaderWrapperStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const PageHeaderWrapperWS = ({ children, ...rest }) => {
    return (
        <PageHeaderWrapperStyled {...rest}>{children}</PageHeaderWrapperStyled>
    )
}

export default PageHeaderWrapperWS
