import React from 'react'
import { styled, TableHead } from '@mui/material'
import TableCell from '../../../atoms/table/tableCell/TableCell'
import { TableRowStyled } from '../tableRow/TableRow'

const TableHeadLastOrdersStyled = styled(TableHead, {
    name: 'TableHeadLastOrdersStyled',
    slot: 'Root',
    overridesResolver: (props, styles) => [styles.root],
})(() => ({}))

const TableHeadLastOrders = () => {
    return (
        <TableHeadLastOrdersStyled>
            <TableRowStyled>
                <TableCell key={'idOrder'} align={'left'} padding="normal">
                    Заказ №
                </TableCell>

                <TableCell key={'buyer'} align={'left'} padding="normal">
                    Покупатель
                </TableCell>

                <TableCell key={'status'} align={'left'} padding="normal">
                    Статус
                </TableCell>

                <TableCell key={'date'} align={'left'} padding="normal">
                    Дата заказа
                </TableCell>

                <TableCell key={'sum'} align={'left'} padding="normal">
                    На сумму
                </TableCell>
                <TableCell key={'action'} align={'left'} padding={'normal'}>
                    Действие
                </TableCell>
            </TableRowStyled>
        </TableHeadLastOrdersStyled>
    )
}

export default TableHeadLastOrders
