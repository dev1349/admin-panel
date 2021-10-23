import React from 'react'
import styled from 'styled-components'

const WrapperStyled = styled.div`
    padding: 10px;
`

const PaddingTemplate = ({ children }) => {
    return <WrapperStyled>{children}</WrapperStyled>
}

export default PaddingTemplate
