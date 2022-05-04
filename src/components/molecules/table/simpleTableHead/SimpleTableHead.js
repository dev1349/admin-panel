import React from 'react'
import { TableHead, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { useStyle } from '../../../../hooks/useStyle'


const SimpleTableHeadWS = ({ headerCells }) => {
    const SimpleTableHeadStyled = useStyle('SimpleTableHeadStyle', TableHead)
    const TableRowStyled = useStyle('TableRowStyle', TableRow)
    return (
        <SimpleTableHeadStyled>
            <TableRowStyled>
                {headerCells.map(cell => (
                    <TableCell
                        key={cell.id}
                        align={
                            cell.numeric === undefined
                                ? 'center'
                                : cell.numeric
                                ? 'right'
                                : 'left'
                        }
                        padding={cell.disablePadding ? 'none' : 'normal'}
                    >
                        {cell.label}
                    </TableCell>
                ))}
                <TableCell key={'delete'} padding={'none'} />
            </TableRowStyled>
        </SimpleTableHeadStyled>
    )
}

export default SimpleTableHeadWS
