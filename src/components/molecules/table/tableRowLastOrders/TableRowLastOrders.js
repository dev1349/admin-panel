import React from 'react'
import { styled, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'

export const TableRowLastOrdersStyled = styled(TableRow, {
    name: 'TableRowLastOrdersStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const WSTableRow = ({ userOrder }) => {
    return (
        <TableRowLastOrdersStyled>
            {Object.keys(userOrder).map(keyName => {
                return (
                    <TableCell key={keyName} aling={'left'} padding={'normal'}>
                        {userOrder[keyName]}
                    </TableCell>
                )
            })}
        </TableRowLastOrdersStyled>
    )
}

export default WSTableRow
