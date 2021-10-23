import React from 'react'
import Styled from 'styled-components'
import PaddingTemplate from '../../templates/paddingTemplate/PaddingTemplate'

const ContainerStyled = Styled.div`
    box-sizing: border-box;
    border: 1px solid lightgrey;
`

const MyContainer = ({ displayedComponent }) => {
    return (
        <ContainerStyled>
            <PaddingTemplate>{displayedComponent}</PaddingTemplate>
        </ContainerStyled>
    )
}

export default MyContainer
