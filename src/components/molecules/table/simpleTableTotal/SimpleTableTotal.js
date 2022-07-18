import React from 'react'
import { TableRow } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { createStyled } from '../../../../services/style/createStyled'

const SimpleTableTotalStyled = createStyled('SimpleTableTotalStyle', TableRow)

const SimpleTableTotal = ({ totalPrice }) => {
    return (
        <SimpleTableTotalStyled>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell align={'right'}>Итого:</TableCell>
            <TableCell align={'right'}>{totalPrice && totalPrice + ' грн.'}</TableCell>
            <TableCell />
        </SimpleTableTotalStyled>
    )
}

export default SimpleTableTotal
