import React from 'react'
import Styled from 'styled-components'

const MaxWidthContainerStyled = Styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
`

const MyMaxWidthContainer = ({ children }) => {
    return <MaxWidthContainerStyled>{children}</MaxWidthContainerStyled>
}

export default MyMaxWidthContainer
