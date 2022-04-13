import React from 'react'
import GreyBorderedWrapperStyle from './GreyBorderedWrapperStyle'
import { useStyle } from '../../../../hooks/useStyle'


const WSGreyBorderWrapper = ({ children, ...rest }) => {
    const GreyBorderedWrapperStyled = useStyle('GreyBorderedWrapperStyled', 'div', GreyBorderedWrapperStyle,
        'topBottomMargin', 'withPadding')
    return (
        <GreyBorderedWrapperStyled {...rest}>
            {children}
        </GreyBorderedWrapperStyled>
    )
}

export default WSGreyBorderWrapper
