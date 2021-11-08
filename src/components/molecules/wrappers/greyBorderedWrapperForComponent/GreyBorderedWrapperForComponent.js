import React from 'react'
import PaddingTemplate from '../../../templates/paddingTemplate/PaddingTemplate'
import { GreyBorderedWrapperStyled } from '../../../atoms/wrappers/greyBorderedWrapper/GreyBorderedWrapper'

const WSGreyBorderedWrapper = ({ displayedComponent }) => {
    return (
        <GreyBorderedWrapperStyled>
            <PaddingTemplate>{displayedComponent}</PaddingTemplate>
        </GreyBorderedWrapperStyled>
    )
}

export default WSGreyBorderedWrapper
