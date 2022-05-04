import React from 'react'
import { TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { useStyle } from '../../../../hooks/useStyle'


const WSTableRow = ({ userOrder }) => {
    const TableRowLastOrdersStyled = useStyle('TableRowLastOrdersStyle', TableRow)
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
