import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`

const TitleWrapperStyled = styled.div``
const ButtonsWrapperStyled = styled.div``

const TitleAndButtonsTemplate = ({ children }) => {
    return (
        <WrapperStyled>
            <TitleWrapperStyled>{children[0]}</TitleWrapperStyled>
            <ButtonsWrapperStyled>{children[1]}</ButtonsWrapperStyled>
        </WrapperStyled>
    )
}

export default TitleAndButtonsTemplate
