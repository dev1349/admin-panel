import React from 'react'
import { TableHead, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { createStyled } from '../../../../services/style/createStyled'

const TableRowStyled = createStyled('TableRowStyle', TableRow)
const GoodsTableHeadStyled = createStyled('GoodsTableHeadStyle', TableHead)

const SimpleTableHeadWS = ({ headerCells }) => {
    //todo TableRowStyled
    return (
        <GoodsTableHeadStyled>
            <TableRowStyled>
                {headerCells.map(cell => (
                    <TableCell
                        key={cell.id}
                        align={cell.numeric === undefined ? 'center' : cell.numeric ? 'right' : 'left'}
                        padding={cell.disablePadding ? 'none' : 'normal'}
                    >
                        {cell.label}
                    </TableCell>
                ))}
                <TableCell key={'delete'} padding={'none'} />
                <TableCell key={'change'} padding={'none'} />
            </TableRowStyled>
        </GoodsTableHeadStyled>
    )
}

export default SimpleTableHeadWS
