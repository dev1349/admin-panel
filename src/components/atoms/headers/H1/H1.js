import React from 'react'
import styled from 'styled-components'

const H1Styled = styled.h2`
    font-size: 22px;
    color: ${props => props.color || 'black'};
    margin: 0;
    display: block;
    font-family: Arial;
    font-weight: 700;
`

const H1 = ({ children, ...rest }) => {
    return <H1Styled {...rest}>{children}</H1Styled>
}

export default H1
