import React from 'react'
import styled from 'styled-components'

const ButtonsWrapperStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
`

const MyButtonsWrapperTemplate = ({ children }) => {
    return <ButtonsWrapperStyled>{children}</ButtonsWrapperStyled>
}

export default MyButtonsWrapperTemplate
