import React from 'react'
import styled, { css } from 'styled-components'
import EditButtonContainer from '../editButton/EditButtonContainer'

const Tr = styled.tr`
    border: 1px solid lightgray;
`

const Td = styled.td`
    border: 1px solid lightgray;
    padding: 0 10px;
    ${props =>
        props.centered &&
        css`
            text-align: center;
        `}
`

const TableListItem = ({ item }) => {
    return (
        <Tr>
            <Td>{item.name}</Td>
            <Td centered>{item.code}</Td>
            <Td centered>{item.discount.value}</Td>
            <Td centered>
                {item.startDate !== null ? item.startDate.split('T')[0] : null}
            </Td>
            <Td centered>
                {item.endDate !== null ? item.endDate.split('T')[0] : null}
            </Td>
            <Td centered>{item.status ? 'Включено' : 'Не включено'}</Td>

            <Td centered>
                <EditButtonContainer id={item.id} />
            </Td>
        </Tr>
    )
}

export default TableListItem
