import React from 'react'
import PaddingTemplate from '../../../templates/paddingTemplate/PaddingTemplate'
import { useStyle } from '../../../../hooks/useStyle'

const WSGreyBorderedWrapper = ({ displayedComponent }) => {
    const GreyBorderedWrapperStyled = useStyle('GreyBorderedWrapperStyle', 'div',
        'topBottomMargin', 'withPadding')
    return (
        <GreyBorderedWrapperStyled>
            <PaddingTemplate>{displayedComponent}</PaddingTemplate>
        </GreyBorderedWrapperStyled>
    )
}

export default WSGreyBorderedWrapper
