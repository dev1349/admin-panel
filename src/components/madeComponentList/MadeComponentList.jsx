import React from 'react'
import ColumnHead from './ColumnHead'
import styled from 'styled-components'
import componentList from './componentList'
import MadeComponentListItem from './MadeComponentListItem'
import puzzle from './puzzle.png'

const ComponentContainer = styled.div`
    max-width: 1024px;
    margin: 15px auto 0 auto;
    padding: 10px;
`

const Header = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
`

const Image = styled.img`
    display: block;
    width: 50px;
`

const Title = styled.h2`
    font-size: 20px;
    margin-left: 20px;
`

const Table = styled.table`
    width: 100%;
    border: 1px solid lightgray;
    border-collapse: collapse;
`

const Thead = styled.thead`
    background-color: lightgray;
`

const Tbody = styled.tbody``

const MadeComponentList = () => {
    return (
        <ComponentContainer>
            <Header>
                <Image src={puzzle} />
                <Title>Созданные компоненты для админки</Title>
            </Header>
            <Table>
                <Thead>
                    <ColumnHead
                        columnTitle={['Номер', 'Компонент', 'Таск', 'Ссылка']}
                    />
                </Thead>
                <Tbody>
                    {componentList.map((item, index) => (
                        <MadeComponentListItem
                            item={item}
                            key={item.task}
                            index={index}
                        />
                    ))}
                </Tbody>
            </Table>
        </ComponentContainer>
    )
}

export default MadeComponentList
