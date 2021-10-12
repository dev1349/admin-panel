import React from 'react'
import Button from '../../buttons/Button'
import styled, { css } from 'styled-components'

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
    ${props =>
        props.edit &&
        css`
            width: 50px;
            text-align: center;
        `}
`

const TableListItem = ({
    item,
    editAttributeGroup,
    addRemoveIdGroupForDeleting,
    idGroupArrayForDeleting,
}) => {
    const editAttributeGroupHandler = () => {
        editAttributeGroup(item.id)
    }

    const checkHandler = () => {
        addRemoveIdGroupForDeleting(item.id)
    }

    return (
        <Tr>
            <Td centered>
                <input
                    checked={idGroupArrayForDeleting.includes(item.id)}
                    type={'checkbox'}
                    onChange={checkHandler}
                />
            </Td>

            {Object.keys(item)
                .slice(1)
                .map((key, index) => {
                    return (
                        <Td key={key} centered={index > 0}>
                            {item[key]}
                        </Td>
                    )
                })}

            <Td centered edit>
                <Button
                    icon={'#edit'}
                    size={10}
                    padding={10}
                    onClick={editAttributeGroupHandler}
                />
            </Td>
        </Tr>
    )
}

export default TableListItem
