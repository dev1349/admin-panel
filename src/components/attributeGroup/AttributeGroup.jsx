import React from 'react'
import styled from 'styled-components'
import ModalsContainer from './modals/ModalsContainer'
import ButtonsContainer from './buttons/ButtonsContainer'
import AddEditGroupContainer from './addEditGroup/AddEditGroupContainer'
import AttributeGroupListContainer from './attributeGroupList/AttributeGroupListContainer'


const ComponentContainer = styled.div`
  max-width: 1024px;
  margin: 15px auto 0 auto;
  padding: 10px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 24px;
`


const AttributeGroup = ({attributeGroupMode}) => {
    return (
        <ComponentContainer>
            <ModalsContainer/>
            <Header>
                <Title>Группы атрибутов</Title>
                <ButtonsContainer/>
            </Header>
            {(attributeGroupMode === 'add' || attributeGroupMode === 'edit') && <AddEditGroupContainer/>}
            {attributeGroupMode === 'list' && <AttributeGroupListContainer/>}
        </ComponentContainer>
    )
}


export default AttributeGroup