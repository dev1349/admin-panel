import React from 'react'
import { styled, TableHead } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { TableRowStyled } from '../tableRow/TableRow'

const SimpleTableHeadStyled = styled(TableHead, {
    name: 'SimpleTableHeadStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SimpleTableHeadWS = ({ headerCells }) => {
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
