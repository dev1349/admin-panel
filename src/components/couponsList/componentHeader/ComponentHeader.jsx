import React from 'react'
import styled from 'styled-components'
import ButtonsContainer from './buttons/ButtonsContainer'


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 24px;
`


const ComponentHeader = ({title}) => {
    return (
        <Header>
            <Title>{title}</Title>
            <ButtonsContainer/>
        </Header>
    )
}


export default ComponentHeader