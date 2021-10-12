import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

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

const MadeComponentListItem = ({ item, index }) => {
    return (
        <Tr>
            <Td key={'number'} centered>
                {index + 1}
            </Td>
            <Td key={'componentName'}>{item.componentName}</Td>
            <Td key={'task'}>{item.task}</Td>
            <Td key={'link'}>
                {item.routeLink ? (
                    <Link to={item.routeLink}>{item.routeText}</Link>
                ) : (
                    item.routeText
                )}
            </Td>
        </Tr>
    )
}

export default MadeComponentListItem
