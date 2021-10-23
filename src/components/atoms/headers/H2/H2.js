import React from 'react'
import styled from 'styled-components'

const H2Styled = styled.h1`
    font-size: 16px;
    color: ${props => props.color || 'black'};
    margin: 0;
    display: block;
    font-family: Arial;
    font-weight: 700;
`

const H2 = ({ children, ...rest }) => {
    return <H2Styled {...rest}>{children}</H2Styled>
}

export default H2
