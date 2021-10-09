import React from 'react'
import styled from 'styled-components'
import Icon from './icon/Icon'


const Container = styled.div`
  border: 1px solid lightgray;
  border-top: 2px solid #444;
`

const Header = styled.header`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: lightgray;
`

const Title = styled.h2`
  font-size: 16px;
  margin-left: 10px;
`

const Body = styled.div`
  padding: 10px;
`


const ContainerWithHead = ({children, icon, title, size}) => {
    return (
        <Container>
            <Header>
                <Icon
                    icon={icon}
                    size={size}
                />
                <Title>
                    {title}
                </Title>
            </Header>
            <Body>
                {children}
            </Body>
        </Container>
    )
}


export default ContainerWithHead