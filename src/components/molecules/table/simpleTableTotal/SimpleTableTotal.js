import React from 'react'
import { styled, TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'

export const SimpleTableTotalStyled = styled(TableRow, {
    name: 'SimpleTableTotalStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const SimpleTableTotal = ({ totalPrice }) => {
    return (
        <SimpleTableTotalStyled>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell align={'right'}>Итого:</TableCell>
            <TableCell align={'right'}>
                {totalPrice && totalPrice + ' грн.'}
            </TableCell>
            <TableCell />
        </SimpleTableTotalStyled>
    )
}

export default SimpleTableTotal
