import React from 'react'
import { styled } from '@mui/material/styles'

export const GreyBorderedWrapperStyled = styled('div', {
    shouldForwardProp: prop =>
        prop !== 'topBottomMargin' && prop !== 'withPadding',
    name: 'GreyBorderedWrapperStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSGreyBorderWrapper = ({ children, ...rest }) => {
    return (
        <GreyBorderedWrapperStyled {...rest}>
            {children}
        </GreyBorderedWrapperStyled>
    )
}

export default WSGreyBorderWrapper
