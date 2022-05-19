import React from 'react'
import { TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { createStyled } from '../../../../services/style/createStyled'

const TableRowLastOrdersStyled = createStyled(
    'TableRowLastOrdersStyle',
    TableRow
)

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
