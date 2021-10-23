import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`

const IconWrapperStyled = styled.div`
    display: flex;
    align-items: center;
`

const TitleWrapperStyled = styled.div`
    margin-left: 7px;
`

const IconTitleTemplate = ({ children }) => {
    return (
        <WrapperStyled>
            <IconWrapperStyled>{children[0]}</IconWrapperStyled>
            <TitleWrapperStyled>{children[1]}</TitleWrapperStyled>
        </WrapperStyled>
    )
}

export default IconTitleTemplate
