import React from 'react'
import PaddingTemplate from '../../../templates/paddingTemplate/PaddingTemplate'
import { createStyled } from '../../../../services/style/createStyled'

const WSGreyBorderedWrapper = ({ displayedComponent }) => {
    const GreyBorderedWrapperStyled = createStyled(
        'GreyBorderedWrapperStyle',
        'div',
        ['topBottomMargin', 'withPadding']
    )
    return (
        <GreyBorderedWrapperStyled>
            <PaddingTemplate>{displayedComponent}</PaddingTemplate>
        </GreyBorderedWrapperStyled>
    )
}

export default WSGreyBorderedWrapper
