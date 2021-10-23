import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    padding: 5px 0;
    border: none;
    display: block;

    @media (min-width: 600px) {
        display: flex;
        align-items: center;
    }
`

const LabelWrapperStyled = styled.div`
    display: block;
    width: 100%;

    @media (min-width: 600px) {
        width: 25%;
        text-align: right;
    }
`

const FieldWrapperStyled = styled.div`
    display: block;
    width: 100%;

    & .MuiInputBase-input {
        padding: 7px 10px;
    }

    @media (min-width: 600px) {
        margin-left: 10px;
        width: 75%;
    }
`

const LabeledInputTemplate = ({ children }) => {
    return (
        <WrapperStyled>
            <LabelWrapperStyled>{children[0]}</LabelWrapperStyled>
            <FieldWrapperStyled>{children[1]}</FieldWrapperStyled>
        </WrapperStyled>
    )
}

export default LabeledInputTemplate
