import React from 'react'
import { TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { useStyle } from '../../../../hooks/useStyle'


const SimpleTableTotal = ({ totalPrice }) => {
    const SimpleTableTotalStyled = useStyle('SimpleTableTotalStyle', TableRow)
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
