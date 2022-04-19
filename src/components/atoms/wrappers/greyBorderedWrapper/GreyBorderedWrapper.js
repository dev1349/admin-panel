import React from 'react'
import { useStyle } from '../../../../hooks/useStyle'


const WSGreyBorderWrapper = ({ children, ...rest }) => {
    const GreyBorderedWrapperStyled = useStyle('GreyBorderedWrapperStyle', 'div',
        'topBottomMargin', 'withPadding')
    return (
        <GreyBorderedWrapperStyled {...rest}>
            {children}
        </GreyBorderedWrapperStyled>
    )
}

export default WSGreyBorderWrapper
