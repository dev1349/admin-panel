import React from 'react'
import { styled, TableHead } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { TableRowStyled } from '../tableRow/TableRow'

const GoodsTableHeadStyled = styled(TableHead, {
    name: 'GoodsTableHeadStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SimpleTableHeadWS = ({ headerCells }) => {
    return (
        <GoodsTableHeadStyled>
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
                <TableCell key={'change'} padding={'none'} />
            </TableRowStyled>
        </GoodsTableHeadStyled>
    )
}

export default SimpleTableHeadWS
